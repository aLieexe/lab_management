import asyncHandler from '../middleware/asyncHandler.js';
import { Equipment } from '../schema/equipment.js';


const getEquipment = asyncHandler (async (req, res) => {
    const equipmentDocs = await Equipment.find({});

    res.status(200).send({
        message: 'Data fetch successfull',
        data: equipmentDocs
    });
})

const getEquipmentById = asyncHandler (async (req, res) => {
    const { id } = req.params;

    const equipmentDocs = await Equipment.findOne({_id: id});

    if(!equipmentDocs){
        res.status(404).send({
            message: 'Cannot find any equipment with this id'
        })
        return;
    }

    res.status(200).send({
        message: 'Data fetch successfull',
        data: equipmentDocs
    });
})

//can asc, can desc, need to implement activity first
const getEquipmentUsageCount = asyncHandler (async (req, res) => {

})


const editEquipment = asyncHandler (async (req, res) => {
    const { id } = req.params;
    const { last_used, last_maintenance, first_added } = req.body;

    //neeed to parsed, date passed via req.body is a string
    const parsedLastUsed = new Date(last_used);
    const parsedLastMaintenance = new Date(last_maintenance);
    const parsedFirstAdded = new Date(first_added);

    //first check
    if(parsedLastUsed < parsedFirstAdded){
        return res.status(400).json({ error: 'last_used must be equal to or after first_added' });
    }
    
    if(parsedLastMaintenance < parsedFirstAdded){
        return res.status(400).json({ error: 'last_maintenance must be equal to or after first_added' });
    }


    const docs = await Equipment.findOne({_id: id});
    if(!docs){
        res.status(404).send({
            message: 'Cannot find lab with this id'
        })
        return;
    }

    console.log(docs.first_added);

    //second check
    if(parsedLastUsed < docs.first_added){
        return res.status(400).json({ error: 'last_used must be equal to or after first_added' });
    }
    
    if(parsedLastMaintenance < docs.first_added){
        return res.status(400).json({ error: 'last_maintenance must be equal to or after first_added' });
    }


    try{
        const updatedDocs = await Equipment.findOneAndUpdate({_id: id}, req.body, {new: true});

        res.status(200).send({
            message: "Equipment successfully edited",
            data: updatedDocs
        });
    }
    catch{
        res.status(404).send({
            message: "Data not found",
        })
    }
})

const deleteEquipment = asyncHandler (async (req, res) => {
    const { id } = req.params;

    try{
        await Equipment.findOneAndDelete({_id: id}, req.body);
    
        res.status(200).send({
            message: "Equipment successfully deleted",
        });
    }
    catch{
        res.status(404).send({
            message: "Data not found",
        });
    }
})


const addEquipment = asyncHandler (async (req, res) => {
    const { last_used, last_maintenance, first_added } = req.body;
    const parsedLastUsed = new Date(last_used);
    const parsedLastMaintenance = new Date(last_maintenance);
    const parsedFirstAdded = new Date(first_added);

    if(parsedLastUsed < parsedFirstAdded){
        return res.status(400).json({ error: 'last_used must be equal to or after first_added' });
    }
    if(parsedLastMaintenance < parsedFirstAdded){
        return res.status(400).json({ error: 'last_maintenance must be equal to or after first_added' });
    }

    const docs = new Equipment(req.body);
    const newEquipment = await docs.save();

    res.status(201).send({
        message: 'Data added successfully',
        data: newEquipment,
    });
})




export { 
    getEquipmentById, 
    getEquipmentUsageCount, 
    getEquipment, 
    editEquipment, 
    deleteEquipment, 
    addEquipment 
}