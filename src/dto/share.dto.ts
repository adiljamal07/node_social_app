import { IsEmail, IsNotEmpty } from 'class-validator';

export class ShareDto {
    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
     postId: number;
}
