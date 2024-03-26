// This file regroup all nameSpaces  
// we can add namespace here

import { Server } from "socket.io";

export const mayaNamespace = (io: Server) => {
    return io.of("/maya");
};

export const houdiniNamespace = (io: Server) => {
    return io.of("/houdini");
};

export const windowsNamespace = (io: Server) => {
    return io.of("/windows");
}; 