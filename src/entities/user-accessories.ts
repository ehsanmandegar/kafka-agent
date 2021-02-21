import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Accessories } from './accessories';

@Index('PK_UserAccessories', ['userAccessoriesId'], { unique: true })
@Entity('UserAccessories', { schema: 'dbo' })
export class UserAccessories {
  @PrimaryGeneratedColumn({ type: 'int', name: 'UserAccessoriesID' })
  userAccessoriesId: number;

  @Column('int', { name: 'UsersID' })
  usersId: number;

  @ManyToOne(() => Accessories, (accessories) => accessories.userAccessories)
  @JoinColumn([
    { name: 'AccessoriesID', referencedColumnName: 'accessoriesId' },
  ])
  accessories: Accessories;

  @RelationId((userAccessories: UserAccessories) => userAccessories.accessories)
  accessoriesId: number;
}
