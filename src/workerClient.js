let messageId = 1;

const worker = new Worker('./assets/worker.umd.js');
window.worker = worker;
worker.addEventListener('error', (...args) => {
    console.error('worker error', args);
} )

export const workerActions = {
    async generateKeyAsync(value) {
        return await sendAsync('generateKey', value);
    }
}

async function sendAsync(type, request) {    
    return new Promise((resolve, reject) => {
        const id = messageId++;
        function handle(event) {
            const {id: responseId, payload, outcome} = event.data;
            if(responseId === id ) {
                worker.removeEventListener('message', handle)
                if(outcome === 'success') {
                    return resolve(payload);
                } else if (outcome === 'error') {
                    reject(payload);
                }
            }
        }
        worker.addEventListener('message', handle)
        worker.postMessage({id, type, payload: request})

    })
}

// async function run() {
//     const boo = await workerActions.generateKeyAsync('1234');
//     console.log('generated', boo);
//     const response = await sendAsync('ping', 'hello world');
//     console.log('response', response);
//     try {
//         await sendAsync('boom', 'hello world');    
//     } catch (error) {
        
//     }
    
//     const response2 = await sendAsync('ping', 'hello world');
//     console.log('second response', response2);
    
// }
// run();