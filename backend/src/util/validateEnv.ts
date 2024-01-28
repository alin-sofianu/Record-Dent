// this file is used to make sure all the env variables are present, and not udnefined, because sometimes that could cause harm

import { cleanEnv } from "envalid"
import { str, port } from "envalid/dist/validators"

export default cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str(),
    PORT: port(),
    SESSION_SECRET: str(),
})