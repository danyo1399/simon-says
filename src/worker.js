import md5 from "md5";


console.log('worker loaded')

const actions = {
    async generateKey(id, payload) {
        let result;
        for (let i = 0; ; i++) {
          let hash = md5(`${payload}|${i}`);
          if (hash.endsWith("00000")) {
            console.log({ i, result: hash });
            result = i;
            break;
          }
        }
        replySuccess(id, result);
      },
      async ping(id, payload) {
        replySuccess(id, 'pong')
      }
}

function replySuccess(id, payload) {
    postMessage({id, payload, outcome: 'success'})
}

function replyError(id, payload) {
    postMessage({id, payload, outcome: 'error'})
}

onmessage = function (e) {    
    console.log('worker: message received', e)
    const {id, payload, type} = e.data;
    const action = actions[type];
    if(!action) {
        console.warn('worker: unknown type',  type);
        replyError(id, new Error('unrecognised worker command ' + type))
        return;
    }
    
    wrap(action)(id, payload)
  };

function wrap(fn) {
    return async (id, payload) => {
        try {
            await fn(id, payload);
        } catch (error) {
            console.error('web worker method failed', {error, id, payload})
            replyError(id, error)
        }
    
    }
}

console.log("worker initialised");
