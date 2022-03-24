import { Injectable } from '@nestjs/common';

import { Post } from './post.entity';
import { Comment } from "../comments/comment.entity";
import { CreatePostDto } from '../dto/create-post.dto';
import {User} from "../users/user.entity";

@Injectable()
export class PostsService {
    async create(createPostDto: CreatePostDto) {
        const post = new Post() ;
        post.title = createPostDto.title ;
        post.description = createPostDto.description ;
        post.userId = createPostDto.userId ;
        await post.save();

        return post ;
    }

    async findUserPosts(id: number) {
        return await User.find({ where: {
                id: id,
            },
            relations: ["posts"],
        });
    }
}
