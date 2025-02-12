import { Contacts } from '../models/contacts.js';

export const updateContactById = async(request, response)=>{
    const {name, phoneNumber, email, address} = request.body;
    const {id} = request.params;
    try{
        if (!name && !phoneNumber && !email){
            return response.status(400).json({success:false, message: "please provide update fields"});
        }else if(name && phoneNumber && email){
            if (!address){
                await Contacts.findByIdAndUpdate(id,{name, phoneNumber, email});
                return response.status(200).json({success:true, message: "Updated"});
            }else{
                await Contacts.findByIdAndUpdate(id,{name, phoneNumber, email, address});
                return response.status(200).json({success:true, message: "Updated"});
            };
        };
    }catch(err){
        console.log(err);
        return response.status(500).json({success:true, message: "Server error"});
    };
};