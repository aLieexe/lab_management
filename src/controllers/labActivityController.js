import asyncHandler from '../middleware/asyncHandler.js';
import { LabActivity } from '../schema/labActivity.js';

const getActivity = asyncHandler (async (req, res) => {
    const activityDocs = await LabActivity.find({});

    res.status(200).send({
        message: 'Data fetch successfull',
        data: activityDocs
    });
})

const getActivityById = asyncHandler (async (req, res) => {
    const { id } = req.params;

    const activityDocs = await LabActivity.findOne({_id: id});

    if(!activityDocs){
        res.status(404).send({
            message: 'Cannot find any activity with this id'
        })
        return;
    }
    res.status(200).send({
        message: 'Data fetch successfull',
        data: activityDocs
    });
})

const getActivityByLab = asyncHandler (async (req, res) => {
    const { labId } = req.params;

    try{
        const activityDocs = await LabActivity.findById({labId});

        res.status(200).send({
            message: 'Data fetch successfull',
            data: activityDocs
        });
    }
    catch(err){
        res.status(404).send({
            message: 'Cannot find any activity with this id'
        })
        return;
    }
    
    res.status(500).send({
        message: 'Something went wrong'
    })
    return;
})

const addActivity = asyncHandler (async (req, res) => {
    const newActivity = new LabActivity(req.body);
    await newActivity.save();

    res.status(200).send({
        message: 'Data added successfully',
        data: newActivity,
    });
})

const editActivity = asyncHandler (async (req, res) => {

})

const deleteActivity = asyncHandler (async (req, res) => {

})



export { 
    getActivityById, 
    getActivityByLab, 
    getActivity, 
    addActivity, 
    editActivity, 
    deleteActivity, 
}