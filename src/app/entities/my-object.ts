import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Accessories } from './accessories';

@Index('PK_MyObject', ['myObjectId'], { unique: true })
@Entity('MyObject', { schema: 'dbo' })
export class MyObject {
  @Column('int', { primary: true, name: 'MyObjectID' })
  myObjectId: number;

  @Column('nvarchar', { name: 'MyObjectName', length: 50 })
  myObjectName: string;

  @Column('nvarchar', { name: 'MyObjectNamefa', length: 50 })
  myObjectNamefa: string;

  @Column('int', { name: 'MyObjectOrder' })
  myObjectOrder: number;

  @OneToMany(() => Accessories, (accessories) => accessories.object)
  accessories: Accessories[];
}
