import * as jwt from 'jsonwebtoken';
import { IToken } from '../interfaces/token.interface';
import IUser from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';

class UserService {
  public model: UserModel;
  
  constructor() {
    this.model = new UserModel(connection);
  }
  
  public async create(user: IUser): Promise<IToken> {
    const token = jwt.sign({
      id: user.id,
      username: user.username,
    }, process.env.JWT_SECRET as string);

    await this.model.create(user);
    return { token };
  }
}
  
export default UserService;