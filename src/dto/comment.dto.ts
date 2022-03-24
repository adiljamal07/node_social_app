import { IsEmail, IsNotEmpty } from 'class-validator';

export class CommentDto {
     @IsNotEmpty()
     comment: string;
     @IsNotEmpty()
     postId: number;
}
