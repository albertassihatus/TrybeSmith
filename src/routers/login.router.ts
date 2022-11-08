import express from 'express';
import LoginController from '../controllers/login.controller';

const router = express.Router();
const login = new LoginController();

router.route('/')
  .post((req, res) => login.login(req, res));

// router.post('/login', login.login);

export default router;