import mongoose from "mongoose";


export const dbConnect = async() =>{
    try{
        const conn = await mongoose.connect('mongodb+srv://Ramesh:zzjCdNL2aQznkR76@cluster0.bqurm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Mongoose is connected");
    }catch(err){
        console.err(err);
        process.exit(1);
    };
};