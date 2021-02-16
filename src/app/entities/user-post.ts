import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Post } from './post';

@Index('PK_UserPost', ['userPostId'], { unique: true })
@Entity('UserPost', { schema: 'dbo' })
export class UserPost {
  @PrimaryGeneratedColumn({ type: 'int', name: 'UserPostID' })
  userPostId: number;

  @Column('int', { name: 'UserID' })
  userId: number;

  @ManyToOne(() => Post, (post) => post.userPosts)
  @JoinColumn([{ name: 'PostID', referencedColumnName: 'postId' }])
  post: Post;

  @RelationId((userPost: UserPost) => userPost.post)
  postId: number;
}
