import mongoose from "mongoose";

const labSchema = new mongoose.Schema({
    lab_id: { type: String, required: true },
    lab_name: { type: String, required: true },
    lab_aslab: [{
        name: { type: String, required: true },
        email: { type: String, required: true },
        major: { type: String, required: true },
        semester: { type: Number, required: true },
        contact: { type: String, required: true },
    }],
    lab_staff: {
        name: { type: String, required: true },
        contact: { type: String, required: true },       
        deparment: { type: String, required: true },
        email: { type: String, required: true }, 
    },
    lab_kasublab: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        deparment: { type: String, required: true },
        contact: { type: String, required: true },
    }, 
}, { collection: 'lab' })

export const Lab = mongoose.model('Lab', labSchema);