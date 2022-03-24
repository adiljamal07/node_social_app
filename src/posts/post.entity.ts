import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, OneToMany} from "typeorm";
import {User} from "../users/user.entity";
import {Share} from "../shares/share.entity";
import { Comment } from "../comments/comment.entity";

@Entity()
export class Post extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    @Column()
    description: string;
    @Column({ name: 'userId', default: null} )
    userId: number;

    @ManyToOne(() => User, user => user.posts, {
        eager: false
    })
    public user: User;
    @OneToMany(() => Share, (share: Share) => share.post)
    public shares: Share[];
    @OneToMany(() => Comment, (comment: Comment) => comment.post)
    public comments: Comment[];

}
