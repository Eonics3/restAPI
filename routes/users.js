import express from 'express';
import { createUser,getUsers, getUserID, deleteUser, patchUser } from '../controllers/users.js';


//start of all routes
const router = express.Router();

//all call back functions in express have req and res
router.get('/', getUsers);


router.post('/', createUser)

//req.params stores ids 
router.get('/:id', getUserID)

router.delete('/:id', deleteUser)

router.patch('/:id', patchUser)

export default router;