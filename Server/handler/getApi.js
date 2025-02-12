import { Contacts } from '../models/contacts.js';

export const getAllContacts = async(request, response)=>{
    try{
        const contacts = await Contacts.find({});
        return response.status(200).json({success:true, message:contacts});
    }catch(err){
        console.log(err);
        return response.status(500).json({success:false, message:"Server Error"});
    };
};

export const getContactById = async(request, response)=>{
    const {id} = request.params;
    try{
        const contact = await Contacts.findById(id);
        return response.status(200).json({success:true, message: contact});
    }catch(err){
        console.log(err);
        return response.status(500).json({success:true, message: "Server error"});
    };
};