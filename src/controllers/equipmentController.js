import asyncHandler from '../middleware/asyncHandler.js';
import mongoose from 'mongoose';


const getEquipmentById = asyncHandler (async (req, res) => {

})

const getEquipment = asyncHandler (async (req, res) => {

})

const getAllEquipment = asyncHandler (async (req, res) => {

})

//can asc, can desc
const getEquipmentUsageCount = asyncHandler (async (req, res) => {

})


const getCriticalEquipment = asyncHandler (async (req, res) => {

})

const editEquipment = asyncHandler (async (req, res) => {

})

const deleteEquipment = asyncHandler (async (req, res) => {

})

const addEquipment = asyncHandler (async (req, res) => {

})




export { 
    getEquipmentById, 
    getAllEquipment, 
    getEquipmentUsageCount, 
    getEquipment, 
    getCriticalEquipment, 
    editEquipment, 
    deleteEquipment, 
    addEquipment 
}