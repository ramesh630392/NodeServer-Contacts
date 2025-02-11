import mongoose from "mongoose";

const contactsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        unique: true,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    address:{
        type: String
    }
},{ timestamps: true });

export const Contacts = mongoose.model('contacts', contactsSchema);