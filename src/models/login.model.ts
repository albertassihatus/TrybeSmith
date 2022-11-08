import connection from './connection';

import IUser from '../interfaces/user.interface';

export default class LoginModel {
  connection = connection;

  async getByName(username: string): Promise<IUser | null> {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
    const values = [username];
  
    const [data] = await this.connection.execute(query, values);
    const [user] = data as IUser[];
  
    return user || null;
  }
}