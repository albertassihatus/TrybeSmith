import * as jwt from 'jsonwebtoken';
import ILogin from '../interfaces/login.interface';
import LoginModel from '../models/login.model';

export default class LoginService {
  loginModel = new LoginModel();

  async login(userCredentials: ILogin) {
    const data = await this.loginModel.getByName(userCredentials.username);
    if (data === null || data.password !== userCredentials.password) {
      return {
        status: 401, error: { message: 'Username or password invalid' },
      };
    }

    const token = jwt.sign({
      username: userCredentials.username,
      password: userCredentials.password,
    }, process.env.JWT_SECRET as string);

    return { status: 200, data: { token } };
  }
}