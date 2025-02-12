import express, { request, response } from 'express';
import { getAllContacts, getContactById } from '../handler/getApi.js';
import { deleteContactById } from '../handler/deleteApi.js';
import { updateContactById } from '../handler/updateApi.js';
import { addContact } from '../handler/postApi.js';

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

