// Theese .d.ts files are the file definition Types, wich help TS recognise variables
// When we instales @types/blabla packages, we actually just install .d.ts files, only that they reside on node_modules
// for this file to work, you need config in the tsconfig.json file:
// uncomment "typeRoots": [] that by default, the empty array means node_modules/@types
// and make it: "typeRoots": [ "node_modules/@types", "@types" ]
// then add at the bottom, after }, "ts-node": { "files": true }

import mongoose from "mongoose";

declare module "express-session" {
    interface SessionData {
        userId: mongoose.Types.ObjectId;
    }
}