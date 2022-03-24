import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from "typeorm";
import {User} from "../users/user.entity";
import {Post} from "../posts/post.entity";

@Entity()
export class Share extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'postId', default: null } )
    postId: number;
    @Column({ name: 'userId', default: null } )
    userId: number;

    @ManyToOne(() => User, user => user.shares)
    public user: User;
    @ManyToOne(() => Post, post => post.shares)
    public post: Post;

}
