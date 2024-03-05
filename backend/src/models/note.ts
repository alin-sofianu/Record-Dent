import { InferSchemaType, Schema, model } from "mongoose"

const noteSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String },
    phoneno: { type: String },
    importantdetails: { type: String },
    age: { type: String },
    cnp: { type: String },
    reason: { type: String },
    a1: { type: String },
    a2: { type: String },
    a3: { type: String },
    a4: { type: String },
    a5: { type: String },
    a6: { type: String },
    a7: { type: String },
    a8: { type: String },
    a9: { type: String },
    a10: { type: String },
    a11: { type: String },
    a12: { type: String },
    a13: { type: String },
    b1: { type: String },
    b2: { type: String },
    b3: { type: String },
    b4: { type: String },
    b5: { type: String },
    b6: { type: String },
    b7: { type: String },
    b8: { type: String },
    b9: { type: String },
    b10: { type: String },
    b11: { type: String },
    b12: { type: String },
    b13: { type: String },
    c1: { type: String },
    c2: { type: String },
    c3: { type: String },
    c4: { type: String },
    c5: { type: String },
    c6: { type: String },
    c7: { type: String },
    c8: { type: String },
    c9: { type: String },
    c10: { type: String },
    c11: { type: String },
    c12: { type: String },
    c13: { type: String },
    d1: { type: String },
    d2: { type: String },
    d3: { type: String },
    d4: { type: String },
    d5: { type: String },
    d6: { type: String },
    d7: { type: String },
    d9: { type: String },
    d8: { type: String },
    d11: { type: String },
    d10: { type: String },
    d13: { type: String },
    d12: { type: String },

    tooth1a: { type: String },
    tooth1b: { type: String },
    tooth1c: { type: String },
    tooth2b: { type: String },
    tooth2c: { type: String },
    tooth2a: { type: String },
    tooth3b: { type: String },
    tooth3c: { type: String },
    tooth3a: { type: String },
    tooth4b: { type: String },
    tooth4c: { type: String },
    tooth4a: { type: String },
    tooth5b: { type: String },
    tooth5c: { type: String },
    tooth5a: { type: String },
    tooth6b: { type: String },
    tooth6c: { type: String },
    tooth6a: { type: String },
    tooth7b: { type: String },
    tooth7c: { type: String },
    tooth7a: { type: String },
    tooth8b: { type: String },
    tooth8c: { type: String },
    tooth8a: { type: String },
    tooth9b: { type: String },
    tooth9c: { type: String },
    tooth9a: { type: String },
    tooth10a: { type: String },
    tooth10b: { type: String },
    tooth10c: { type: String },
    tooth11a: { type: String },
    tooth11b: { type: String },
    tooth11c: { type: String },
    tooth12b: { type: String },
    tooth12c: { type: String },
    tooth12a: { type: String },
    tooth13b: { type: String },
    tooth13c: { type: String },
    tooth13a: { type: String },
    tooth14b: { type: String },
    tooth14c: { type: String },
    tooth14a: { type: String },
    tooth15b: { type: String },
    tooth15c: { type: String },
    tooth15a: { type: String },
    tooth16b: { type: String },
    tooth16c: { type: String },
    tooth16a: { type: String },
    tooth17b: { type: String },
    tooth17c: { type: String },
    tooth17a: { type: String },
    tooth18b: { type: String },
    tooth18c: { type: String },
    tooth18a: { type: String },
    tooth19b: { type: String },
    tooth19c: { type: String },
    tooth19a: { type: String },
    tooth20a: { type: String },
    tooth20b: { type: String },
    tooth20c: { type: String },
    tooth21a: { type: String },
    tooth21b: { type: String },
    tooth21c: { type: String },
    tooth22b: { type: String },
    tooth22c: { type: String },
    tooth22a: { type: String },
    tooth23b: { type: String },
    tooth23c: { type: String },
    tooth23a: { type: String },
    tooth24b: { type: String },
    tooth24c: { type: String },
    tooth24a: { type: String },
    tooth25b: { type: String },
    tooth25c: { type: String },
    tooth25a: { type: String },
    tooth26b: { type: String },
    tooth26c: { type: String },
    tooth26a: { type: String },
    tooth27b: { type: String },
    tooth27c: { type: String },
    tooth27a: { type: String },
    tooth28b: { type: String },
    tooth28c: { type: String },
    tooth28a: { type: String },
    tooth29b: { type: String },
    tooth29c: { type: String },
    tooth29a: { type: String },
    tooth30a: { type: String },
    tooth30b: { type: String },
    tooth30c: { type: String },
    tooth31a: { type: String },
    tooth31b: { type: String },
    tooth31c: { type: String },
    tooth32a: { type: String },
    tooth32b: { type: String },
    tooth32c: { type: String },
    tooth33a: { type: String },
    tooth33b: { type: String },
    tooth33c: { type: String },

    treat1a: { type: String },
    treat1b: { type: String },
    treat1c: { type: String },
    treat1d: { type: String },
    treat2a: { type: String },
    treat2b: { type: String },
    treat2c: { type: String },
    treat2d: { type: String },
    treat3a: { type: String },
    treat3b: { type: String },
    treat3c: { type: String },
    treat3d: { type: String },
    treat4a: { type: String },
    treat4b: { type: String },
    treat4c: { type: String },
    treat4d: { type: String },
    treat5a: { type: String },
    treat5b: { type: String },
    treat5c: { type: String },
    treat5d: { type: String },

    currentColor: { type: String },
    currentColorIndex: { type: String },
    control: { type: String },
    name: { type: String },
    select: { type: String },
}, { timestamps: true })

type Note = InferSchemaType<typeof noteSchema>

export default model<Note>("Note", noteSchema)