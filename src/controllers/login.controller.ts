import { Request, Response } from 'express';
import ILogin from '../interfaces/login.interface';
import LoginService from '../services/login.service';

export default class LoginController {
  loginService = new LoginService();

  async login(req: Request, res: Response) {
    const userCredentials = req.body as ILogin;

    if (!userCredentials.username) {
      return res.status(400).json({ message: '"username" is required' });
    }
    if (!userCredentials.password) {
      return res.status(400).json({ message: '"password" is required' });
    }

    const { status, data, error } = await this.loginService.login(userCredentials);
    
    return error
      ? res.status(status).json(error)
      : res.status(status).json(data);
  }
}