import { Injectable } from '@nestjs/common';
import User from 'src/repositories/entities/user';

@Injectable()
export class AppService {
  async getAllUsers(): Promise<User> {
    return await User.findAll();
  }

  async getUserById(id: number): Promise<User> {
    return await User.findByPk(id);
  }

  async getUserByName(name: string): Promise<User> {
    return await User.findAll({ where: { name: name } });
  }

  async createUser(user: User): Promise<User> {
    return await User.create(user);
  }

  async updateUser(id: number, user: User): Promise<User> {
    return await User.update(user, { where: { id } });
  }

  async deleteUser(id: number): Promise<User> {
    const user = await User.findByPk(id);
    if (user) return await user.destroy();
    else return null;
  }
}
