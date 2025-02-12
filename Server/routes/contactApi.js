import express, { request, response } from 'express';
import { getAllContacts, getContactById } from '../handler/getHandler.js';
import { deleteContactById } from '../handler/deleteHandler.js';
import { updateContactById } from '../handler/updateHandler.js';
import { addContact } from '../handler/postHandler.js';

const router = express.Router();

//get contacts
router.get("/", getAllContacts);

//get contact by ID
router.get("/:id", getContactById);

//add contact
router.post("/add", addContact);

//update contact based on ID
router.put('/update/:id', updateContactById);

//delete by ID
router.delete("/delete/:id", deleteContactById);



export default router;

