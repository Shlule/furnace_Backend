// setting the socket server wich communicate with dcc

import express, { Express, Request, Response } from "express"
import { createServer } from 'http'
import socketio, { Server } from "socket.io"
import cors from 'cors'
import dotenv from 'dotenv'
import { testCheck } from "../../../Check/check"

dotenv.config()


const app: Express = express()
const httpServer = createServer(app)

app.use(cors())
app.set("port", process.env.PORT || 3000);

//set up socket.io and binde it to our http server
const io = new Server(httpServer, {
    maxHttpBufferSize: 1e8,
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
})

app.get("/", (req: Request, res: Response) => {
    res.send("hello world")
});



io.on("connection", (socket) => {

    console.log(socket.id)
    console.log(io)
    // socket.emit("server message", "this is a server message")
    // socket.on("my response", (socket) => {
    //     console.log(socket);
    // });
    testCheck.Run(io)
})


httpServer.listen(3000, () => {
    console.log("listening on *:3000")

})

// testCheck.Run(io)