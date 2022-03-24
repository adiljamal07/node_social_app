import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, OneToMany} from "typeorm";
import {Post} from "../posts/post.entity";

@Entity()
export class Comment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    comment: string;
    @Column({ name: 'postId', default: null} )
    postId: number;

    @ManyToOne(() => Post, post => post.comments, {
        eager: false
    })
    public post: Post;

}
