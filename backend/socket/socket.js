import {Server} from "socket.io";
import express from "express";
import http from "http";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin:'http://localhost:5173',
        methods:['GET','POST']
    }
})

const userSocketMap = {} ; // this map stores socket id corresponding the user id; userId -> socketId

export const getReceiverSocketId = (receiverId) => userSocketMap[receiverId];



