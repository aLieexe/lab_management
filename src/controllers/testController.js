import mongoose from 'mongoose';
import asyncHandler from '../middleware/asyncHandler.js';


const TestSchema = new mongoose.Schema({
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    date: { type: Date }, 
}, { collection: 'sales'});


//field are only required when inserting stuff


const Test = mongoose.model('sales', TestSchema);

const getTestController = asyncHandler ( async (req, res) => {
    const docs = await Test.find({});

    res.status(200).json({
        message: 'oke',
        data: docs
    })
})

const addTestController = asyncHandler ( async (req, res) => {
    const newDocs = new Test(req.body);
    const savedDocs = await newDocs.save();
    
    await Test.find({});

    res.status(200).json({
        message: 'oke',
        data: savedDocs
    });
})


const getTestByIdController = asyncHandler ( async (req, res) => {
    const { id } = req.params;


    const specificDocs = await Test.findById(id);

    if(!specificDocs){
        res.status(404).send({
            message: "Data not found",
        });
        return;
    }

    console.log("hei")

    res.status(200).send({
        message: "Success",
        data: specificDocs
    });
})

const updateTestController = asyncHandler ( async (req, res) => {
    const { id } = req.params;


    const updatedDocs = await Test.findByIdAndUpdate(id, req.body, {new: true});

    if(!updatedDocs){
        res.status(404).send({
            message: "Data not found",
        });
        return;
    }

    console.log("hei")

    res.status(200).send({
        message: "Success",
        data: updatedDocs
    });
})


export { getTestController, addTestController, updateTestController, getTestByIdController }