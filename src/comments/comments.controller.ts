import {Body, Controller, Get, HttpStatus, Param, Post} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentDto } from '../dto/comment.dto'

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() commentDto: CommentDto) {
      const comment = this.commentsService.create(commentDto);
      return {
          statusCode: HttpStatus.OK,
          message: 'Commented successfully.'
      }
  }

    @Get(':id')
    findPostComments(@Param('id') id:number) {
        return this.commentsService.findPostComments(id) ;
    }
}
