/**
 * Module handles database management
 *
 * Server API calls the methods in here to query and update the SQLite database
 */

// Utilities we need
const fs = require("fs");

// Initialize the database
const dbFile = "./.data/choices.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const dbWrapper = require("sqlite");
const { constants } = require('./constants');
let db;

/* 
We're using the sqlite wrapper so that we can make async / await connections
- https://www.npmjs.com/package/sqlite
*/
dbWrapper
  .open({
    filename: dbFile,
    driver: sqlite3.Database,
  })
  .then(async (dBase) => {
    db = dBase; 

    try {

      if (!exists) {

        await db.run(
          "CREATE TABLE teams (id text PRIMARY KEY, name text, description text, secret text)"
        );

        await db.run(
          `
          CREATE TABLE players (
          id text PRIMARY KEY,
          teamId text, 
          name TEXT,
          highScore integer,
          addDate integer,
          editDate integer,
          FOREIGN KEY(teamId) REFERENCES teams(id)
        )
        `
        );

        await db.run(
          `
          CREATE TABLE playerNames (
          name text, teamId text, playerId text, PRIMARY KEY (name, teamId),
          FOREIGN KEY(teamId) REFERENCES teams(id)
        )
        `
        );

        await db.run(`
        insert into teams(id, name, description) values('1nn2iuopnpd20x72be08zt','Worldwide','Worldwide players');
        `);
      } else {
        // db exists
        await db.run(`delete from players where highScore <= 4 || highScore > ${constants.maxScore}`)
        await db.run(`
        delete from playerNames
        where not exists(select 1 from players p where p.id = playerId)
        `)
      }
    } catch (dbError) {
      console.error(dbError);
      throw dbError;
    }
  });

// Our server script will call these methods to connect to the db
module.exports = {
  getPlayers: async (teamId) => {
    try {
      return await db.all(
        "SELECT * from players where teamId = ? order by highScore desc",
        teamId
      );
    } catch (dbError) {
      // Database connection error
      console.error(dbError);
      throw dbError;
    }
  },

  getPlayer: async (playerId) => {
    try {
      return await db.get("SELECT * from players where id = ?", playerId);
    } catch (dbError) {
      console.error(dbError);
      throw dbError;
    }
  },

  async createPlayer(player) {
    try {
    const teamExists = await this.teamExists(player.teamId);
    if (!teamExists) return 404;
      const date = Date.now();
      await db.run(
        `
        insert into playerNames(name, teamId, playerId) values(?, ?, ?)
        `,
        [player.name, player.teamId, player.id]
      );

      await db.run(
        `
        INSERT INTO players(id, teamId, name, highScore, addDate, editDate) VALUES(?, ?, ?, ?, ?, ?)
        `,
        [player.id, player.teamId, player.name, player.highScore, date, date]
      );
    } catch (dbError) {
      console.error(dbError);
      throw dbError;
    }
  },
  async teamExists(teamId) {
    const checkTeam = await db.get("select 1 from teams where id = ?", teamId);
    return !!checkTeam;
  },
  async playerIdExists(id) {
    const playerIdExists = await db.get(
      "select 1 from players where id = ?",
      id
    );
    return !!playerIdExists;
  },

  async playerNameExists(teamId, playerName) {
    const exists = await db.get(
      "select 1 from players where teamId = ? and name = ?",
      teamId, playerName
    );
    return !!exists;
  },
  async deletePlayer(teamId, playerId) {
    try {
      await db.run(`begin transaction`);
      
      await db.run(`delete from playerNames where playerId = ? and teamId = ?`, [playerId, teamId]);
      await db.run(`delete from players where id = ? and teamId = ?`, [playerId, teamId]);

      await db.run(`commit transaction`);
    } catch(err) {
      await db.exec("rollback transaction");
    }
  },
  async updatePlayerName(player) {
    try {

      const playerNameTaken = await this.playerNameExists(player.teamId, player.name)
      if(playerNameTaken) {
        return 409; // conflict;
      }
      const teamExists = await this.teamExists(player.teamId);
      if (!teamExists) return 404;

      const checkPlayer = this.playerIdExists(player.id)
      if (!checkPlayer) return 404;

      await db.run(`begin transaction`);
      await db.run(`delete from playerNames where playerId = ?`, [player.id]);
      await db.run(
        `        
        insert into playerNames(name,playerId, teamId) values($name, $playerId, $teamId);
        
        `,
        { $name: player.name, $teamId: player.teamId, $playerId: player.id }
      );

      await db.run(
        `update players set name = $name, editDate = $date where id = $playerId;`,
        { $name: player.name, $playerId: player.id, $date: Date.now() }
      );

      await db.run(`commit transaction`);
    } catch (dbError) {
      console.error(dbError);
      try {
        await db.exec("rollback transaction");
      } catch {}
      throw dbError;
    }
  },

  setHighScore: async (id, highScore) => {
    try {
      await db.run(
        `
        update players set highScore = ?, editDate = ? where id = ?
        `,
        [highScore, Date.now(), id]
      );
    } catch (dbError) {
      console.error(dbError);
      throw dbError;
    }
  },

  upsertTeam: async (team) => {
    try {
      await db.run(
        `
        INSERT INTO teams(id, name, description) VALUES(?, ?, ?)
  ON CONFLICT(id) DO UPDATE SET name = ?, description = ?;
        `,
        [team.id, team.name, team.description, team.name, team.description]
      );
    } catch (dbError) {
      console.error(dbError);
      throw dbError;
    }
  },

  getTeam: async (id) => {
    try {
      return await db.get(
        `
       select * from teams where id = ?
        `,
        [id]
      );
    } catch (dbError) {
      console.error(dbError);
      throw dbError;
    }
  },
};
