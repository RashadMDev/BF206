import express from 'express';
import {
      getUsers,
      register,
      login
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/register', register);
router.post('/login', login);

export default router;
