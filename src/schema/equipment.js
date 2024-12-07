import mongoose from 'mongoose';


const equipmentSchema = new mongoose.Schema({
    equipment_name: { type: String, required: true }, 
    condition: { type: String, enum: ['Excellent', 'Good', 'Fair', 'Poor', 'Critical'], required: true},
    lab_id: { type: String, required: true },
    last_used: { type: Date, required: true },
    first_added: { type: Date, required: true },
    last_maintanance: { type: Date },
    description: { type: String, required: true},
}, { collection: 'equipment' })

export const Equipment = mongoose.model('Equipment', equipmentSchema);