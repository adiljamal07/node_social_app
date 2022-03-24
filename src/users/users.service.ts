import { Injectable } from '@nestjs/common';

import { User } from './user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
    async create(createUserDto: CreateUserDto) {
        const user = User.create(createUserDto);
        await user.save();

        delete user.password;
        return user;
    }

    async showById(id: string): Promise<User> {
        const user = await this.findById(+id);

        delete user.password;
        return user;
    }

    async findById(id: number) {
        return await User.findOne(id);
    }

    async findByEmail(id: string) {
        return await User.findOne();
    }

}
