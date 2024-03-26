import { Server } from "socket.io";
import mayaNamespace from '~/nameSpaces'

export default function (io: Server) {
    // handle connection on Namespces /maya

    mayaNamespace.on("connection", (socket: any) => {
        // this is the Event Handler of this namespaces
        socket.join(socket.id)
        socket.on("client_message", (socket: any) => {
            console.log(socket)
        })
    })
}