import express, { request, response } from 'express';
import { Contacts } from '../models/contacts.js';


const router = express.Router();

//get contacts
router.get("/", async(request, response)=>{
    try{
        const contacts = await Contacts.find({});
        return response.status(200).json({success:true, message:contacts});
    }catch(err){
        console.log(err);
        return response.status(500).json({success:false, message:"Server Error"});
    };
});

//add contact
router.post("/add", async(request, response)=>{
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
});


//update contact based on ID

router.put('/update/:id', async(request, response)=>{
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
});


//get contact by ID
router.get("/:id", async(request, response)=>{
    const {id} = request.params;
    try{
        const contact = await Contacts.findById(id);
        return response.status(200).json({success:true, message: contact});
    }catch(err){
        console.log(err);
        return response.status(500).json({success:true, message: "Server error"});
    };
});


//delete by ID
router.delete("/delete/:id", async(request, response)=>{
    const {id} = request.params;
    try{
        await Contacts.findByIdAndDelete(id);
        return response.status(200).json({success:true, message: "Contact deleted"});
    }catch(err){
        console.log(err);
        return response.status(500).json({success:true, message: "server error"});
    };
});



export default router;

