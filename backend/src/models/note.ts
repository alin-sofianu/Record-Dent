import { InferSchemaType, Schema, model } from "mongoose"

const noteSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String },
    phoneno: { type: String },
    importantdetails: { type: String },
    datefirstvisit: { type: String },
    cnp: { type: String },
    reason: { type: String },
    c1a: { type: String },
    c1b: { type: String },
    c1c: { type: String },
    c1d: { type: String },
    c1e: { type: String },
    c1f: { type: String },
    c1g: { type: String },
    c1h: { type: String },
    c2a: { type: String },
    c2b: { type: String },
    c2c: { type: String },
    c2d: { type: String },
    c2e: { type: String },
    c2f: { type: String },
    c2g: { type: String },
    c2h: { type: String },
    c3a: { type: String },
    c3b: { type: String },
    c3c: { type: String },
    c3d: { type: String },
    c3e: { type: String },
    c3f: { type: String },
    c3g: { type: String },
    c3h: { type: String },
    c4a: { type: String },
    c4b: { type: String },
    c4c: { type: String },
    c4d: { type: String },
    c4e: { type: String },
    c4f: { type: String },
    c4g: { type: String },
    c4h: { type: String },
    c1aProgress: { type: String },
    c1bProgress: { type: String },
    c1cProgress: { type: String },
    c1dProgress: { type: String },
    c1eProgress: { type: String },
    c1fProgress: { type: String },
    c1gProgress: { type: String },
    c1hProgress: { type: String },
    c2aProgress: { type: String },
    c2bProgress: { type: String },
    c2cProgress: { type: String },
    c2dProgress: { type: String },
    c2eProgress: { type: String },
    c2fProgress: { type: String },
    c2gProgress: { type: String },
    c2hProgress: { type: String },
    c3aProgress: { type: String },
    c3bProgress: { type: String },
    c3cProgress: { type: String },
    c3dProgress: { type: String },
    c3eProgress: { type: String },
    c3fProgress: { type: String },
    c3gProgress: { type: String },
    c3hProgress: { type: String },
    c4aProgress: { type: String },
    c4bProgress: { type: String },
    c4cProgress: { type: String },
    c4dProgress: { type: String },
    c4eProgress: { type: String },
    c4fProgress: { type: String },
    c4gProgress: { type: String },
    c4hProgress: { type: String },
    currentColor: { type: String },
}, { timestamps: true })

type Note = InferSchemaType<typeof noteSchema>

export default model<Note>("Note", noteSchema)