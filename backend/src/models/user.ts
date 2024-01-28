import { InferSchemaType, Schema, model } from "mongoose"

const userSchema = new Schema({
    // unique: true, so that you dont have duplicate usernames in the db
    username: { type: String, required: true, unique: true },
    // selected: false, means to not return it normall, unless specifically asked for.
    email: { type: String, required: false, unique: true, selected: false },
    password: { type: String, required: false, selected: false },
})

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema)