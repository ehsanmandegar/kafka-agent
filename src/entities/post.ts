import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserPost } from './user-post';

@Index('PK_Post', ['postId'], { unique: true })
@Entity('Post', { schema: 'dbo' })
export class Post {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PostID' })
  postId: number;

  @Column('nvarchar', { name: 'PostTitle', length: 50 })
  postTitle: string;

  @OneToMany(() => UserPost, (userPost) => userPost.post)
  userPosts: UserPost[];
}
