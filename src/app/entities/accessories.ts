import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  RelationId,
} from 'typeorm';
import { MyObject } from './my-object';
import { UserAccessories } from './user-accessories';

@Index('PK_Accessories', ['accessoriesId'], { unique: true })
@Entity('Accessories', { schema: 'dbo' })
export class Accessories {
  @Column('int', { primary: true, name: 'AccessoriesID' })
  accessoriesId: number;

  @Column('nvarchar', { name: 'AccessoriesName', length: 150 })
  accessoriesName: string;

  @Column('nvarchar', { name: 'AccessoriesNameEn', length: 50 })
  accessoriesNameEn: string;

  @ManyToOne(() => MyObject, (myObject) => myObject.accessories)
  @JoinColumn([{ name: 'ObjectID', referencedColumnName: 'myObjectId' }])
  object: MyObject;

  @OneToMany(
    () => UserAccessories,
    (userAccessories) => userAccessories.accessories,
  )
  userAccessories: UserAccessories[];

  @RelationId((accessories: Accessories) => accessories.object)
  objectId: number;
}
