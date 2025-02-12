import { Contacts } from '../models/contacts.js';

export const addContact = async(request, response)=>{
    const {name, phoneNumber,  email, address} = request.body;

    if(!name || !phoneNumber || !email){
        return response.status(400).json({success: false, message: "Please provide all the details"});
    }else if(phoneNumber.length < 10 || phoneNumber.length > 10){
        return response.status(400).json({success: false, message: "Please provide 10 digit phone number"});
    };

    try{
        const findingNumber = await Contacts.findOne({phoneNumber});
        console.log(findingNumber);
        if (findingNumber === null){
            if (!address){
                const newContact = new Contacts({name, phoneNumber, email});
                await newContact.save();
                return response.status(201).json({success: true, message: "Contact Created"});
            }else{
                const newContact = new Contacts({name, phoneNumber, email, address});
                await newContact.save();
                return response.status(201).json({success: true, message: "Contact Created"});
            };
        }else{
            return response.status(400).json({success: false, message: "Already contact exists with this Number"});
        };
    }catch(err){
        console.log(err);
        return response.status(500).json({success: true, message: "Server Error"});
    };
};