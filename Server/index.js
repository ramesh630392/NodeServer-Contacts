import express from 'express';
import dotenv from 'dotenv';
import {dbConnect} from "./config/db.js";
import contactRouter from './routes/contactApi.js'
import serverless from 'serverless-http';

const app = express();
app.use(express.json());

dotenv.config();

app.use('/contacts', contactRouter);

app.listen(3000, ()=>{
    console.log("http://localhost:3000/contacts");
    dbConnect();
});

//export default serverless(app);