// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  // Set this to true for detailed logging:
  logger: false
});

fastify.register(require('@fastify/cors'), { 
  // put your options here
  origin: true,
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']
})

// Load and parse SEO data
const seo = require("./src/seo.json");
if (seo.url === "glitch-default") {
  seo.url = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;
}

// We use a module for handling database operations in /src
const data = require("./src/data.json");
const db = require("./src/" + data.database);

fastify.post("/teams", async (request, reply) => { 
  let auth = getAuth(request)
  if(auth !== process.env.ADMIN_KEY) return reply.status(401).send({})
  let team = request.body;
  if(!team || !team.id || !team.name || !team.description || team.name.length > 50 
     || team.description.length > 100) {
    return reply.status(400).send('Invalid team details')
  }
  

  // We have a vote - send to the db helper to process and return results
    await db.upsertTeam(team);
    reply.send("success");
});

fastify.get("/teams/:id", async (request, reply) => { 

  let id = request.params.id;
  if(!id) {
    return reply.status(404).send('Invalid team id')
  }
  

  // We have a vote - send to the db helper to process and return results
    const team = await db.getTeam(id);
  if(!team) {
    return reply.status(404).send('not found')
  }
    reply.send(team);
});

fastify.get("/teams/:id/players", async (request, reply) => { 

  let teamId = request.params.id;
  if(!teamId) {
    return reply.status(404).send('Invalid team id')
  }
  
  const auth = getAuth(request)
  // We have a vote - send to the db helper to process and return results
    const players = await db.getPlayers(teamId);
  if(!players) {
    return reply.status(404).send('not found')
  }
  if(auth === process.env.ADMIN_KEY) {
    return reply.send(players);
  }
    const limitedPlayers = players.map(({highScore, id, name}) => 
                                       ({highScore, name, me: id === auth}))
    reply.send(limitedPlayers);
});

fastify.post("/teams/:teamId/players", async (request, reply) => { 

  let teamId = request.params.teamId;
  let player = request.body
  if(!teamId || !player || !player.id || !player.name || !player.teamId 
     || player.name.length > 20
    || typeof player.highScore !== 'number') {
    return reply.status(400).send({})
  }
  player.teamId = teamId
     await db.createPlayer(player);

    reply.send({});
});

fastify.get("/teams/:teamId/players/:playerId", async (request, reply) => { 

  let teamId = request.params.teamId;
  let playerId = request.params.playerId;

  if(!teamId || !playerId) {
    return reply.status(404).send('');
  }
  
  const player = await db.getPlayer(playerId);
  if(!player) return reply.status(404).send({});
  reply.send(player);
});

fastify.post("/teams/:teamId/players/:playerId/set-name", async (request, reply) => { 

  let teamId = request.params.teamId;
  let playerId = request.params.playerId;
  let name = request.body
  if(!teamId || !playerId || !name || name.length > 15) {
    return reply.status(400).send({});
  }
  const player = {name, id: playerId, teamId}
  const status = await db.updatePlayerName(player);
  if(status) reply.status(status)
  reply.send({})

});

fastify.delete("/teams/:teamId/players/:playerId", async (request, reply) => { 
  let auth = getAuth(request)
  if(auth !== process.env.ADMIN_KEY) return reply.status(401).send({})

  let teamId = request.params.teamId;
  let playerId = request.params.playerId;

  if(!teamId || !playerId) {
    return reply.status(400).send({});
  }
  const status = await db.deletePlayer(teamId, playerId);
  if(status) reply.status(status)
  reply.send({})

});

fastify.post("/teams/:teamId/players/:playerId/set-high-score", async (request, reply) => { 

  let teamId = request.params.teamId;
  let playerId = request.params.playerId;
  
  if(!teamId || !playerId || !request.body) {
    return reply.status(400).send({})
  }
  
  await db.setHighScore(playerId, request.body);
  reply.send({});

});



// Run the server and report out to the logs
fastify.listen(process.env.PORT, '0.0.0.0', (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Your app is listening on ${address}`);
  fastify.log.info(`server listening on ${address}`);
});


function getAuth(request) {
    const auth = request.headers['authorization']
  return auth?.substr(7)
}