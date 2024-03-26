import fs from 'fs'
import { Server } from 'socket.io'
import path from 'path'

// this file initialize all listener present 
// in this directory called listeners.
// and return all listener

export default function (io: Server) {

    const listenersPath = path.resolve(__dirname);
    const listenersFiles = fs.readdirSync(listenersPath);

    for (const listenerFile of listenersFiles) {
        if (listenerFile !== "index.ts") {
            const listener = require(path.resolve(__dirname, listenerFile));
            listener(io)
        }
    }
}