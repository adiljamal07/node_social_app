import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
     @IsNotEmpty()
     title: string;

     @IsNotEmpty()
     description: string;

     @IsNotEmpty()
     userId: number;

}
