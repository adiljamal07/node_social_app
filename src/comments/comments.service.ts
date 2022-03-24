import { Injectable } from '@nestjs/common';
import { CommentDto } from '../dto/comment.dto'
import {Comment} from '../comments/comment.entity';
import {Post} from "../posts/post.entity";

@Injectable()
export class CommentsService {
    async create(commentDto: CommentDto) {
        const comment = new Comment();
        console.log(commentDto) ;
        comment.comment = commentDto.comment ;
        comment.postId = commentDto.postId ;
        await comment.save();

        return comment;
    }

    async findPostComments(id: number) {
        return await Post.find({ where: {
                id: id,
            },
            relations: ["comments"],
        });
    }
}
