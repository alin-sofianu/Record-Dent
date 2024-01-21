import "dotenv/config" //place this line very first
import mongoose from "mongoose"
import env from "./utils/validateEnv"

import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send("Hello, world")
})

const port = env.PORT

mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Connected to the DB")
        app.listen(port, () => {
            console.log("Server is listening on port: " + port)
        })
    })
    .catch(console.error)