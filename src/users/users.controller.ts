import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    // @Get(':id')
    // showUserDetail(@Param('id') id: string) {
    //     return this.usersService.findUserPosts(id) ;
    // }

    @Get('detail/:id')
    show(@Param('id') id: number) {
        return this.usersService.findById(id);
    }


}
