import {Body, Controller, Get, Param, Post} from '@nestjs/common';

import { PostsService } from './posts.service';
import {CreatePostDto} from "../dto/create-post.dto";

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get(':id')
  findUserPost(@Param('id') id:number) {
      return this.postsService.findUserPosts(id) ;
  }

}
