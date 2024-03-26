import fs from 'fs'
import { type } from 'os';
import maya from '../listener/maya';

type JSONValue =
    | string
    | number
    | void
    | boolean
    | JSONObject
    | JSONArray;

interface JSONObject {
    [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }

// const displayNumber = () => {
//     ""
// }
// initialize an object which will be a  type enum
const typeEnum: { [key: string]: string } = {}

// extract all fileNames in listeners folders
//and store it in typeEnum
fs.readdir("listener", (err, files) => {
    if (err) {
        console.error('Erreur lors de la lecture du répertoire : ', err);
        return;
    }
    files.forEach((file) => {
        const fileName = file.replace(/\.[^/.]+$/, '');
        typeEnum[fileName] = `${file}`;
    })
    // console.log(typeEnum)
    type testType = keyof typeof typeEnum


})

export const myObject = {
    maya: 0,
    houdini: 1,
    windows: 2,
} as const
type typeCheck = keyof typeof myObject



export interface Check {
    name: string
    command: any
    status: typeCheck
    Run(io: any): void
    Message(): void
    fix?(): void
}
const test: string = "john"
const testFunction = () => {
    const test2: string = `print('${test}')`
    return test2
}
console.log(typeof (testFunction()))

export const testCheck: Check = {
    name: "John",
    command: testFunction(),
    status: "maya",
    Run(io: any) {
        io.emit("check", {
            data: this.command
        })
    },
    Message() {
        console.log("je suis la fonction Message")
    },
}





