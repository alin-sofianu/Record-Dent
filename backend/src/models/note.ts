import { InferSchemaType, Schema, model } from "mongoose"

const noteSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    text: { type: String },
    sdmi: { type: String },
    sdmii: { type: String },
    sdmiii: { type: String },
    sdpi: { type: String },
    sdpii: { type: String },
    sdc: { type: String },
    sdinci: { type: String },
    sdincii: { type: String },
    ssmi: { type: String },
    ssmii: { type: String },
    ssmiii: { type: String },
    sspi: { type: String },
    sspii: { type: String },
    ssc: { type: String },
    ssinci: { type: String },
    ssincii: { type: String },
    jdmi: { type: String },
    jdmii: { type: String },
    jdmiii: { type: String },
    jdpi: { type: String },
    jdpii: { type: String },
    jdc: { type: String },
    jdinci: { type: String },
    jdincii: { type: String },
    jsmi: { type: String },
    jsmii: { type: String },
    jsmiii: { type: String },
    jspi: { type: String },
    jspii: { type: String },
    jsc: { type: String },
    jsinci: { type: String },
    jsincii: { type: String },
}, { timestamps: true })

type Note = InferSchemaType<typeof noteSchema>

export default model<Note>("Note", noteSchema)