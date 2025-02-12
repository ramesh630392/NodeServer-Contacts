import { Contacts } from '../models/contacts.js';

export const deleteContactById = async(request, response)=>{
    const {id} = request.params;
    try{
        await Contacts.findByIdAndDelete(id);
        return response.status(200).json({success:true, message: "Contact deleted"});
    }catch(err){
        console.log(err);
        return response.status(500).json({success:true, message: "server error"});
    };
};