import express from 'express';
import {
      getUsers,
      register,
      login,
      confirm,
} from '../controllers/userController.js';
import { protect } from '../middlewares/generateToken.js';

const router = express.Router();

router.get('/', protect, getUsers);
router.post('/register', register);
router.post('/login', login);
router.post('/confirm', confirm);


export default router;
