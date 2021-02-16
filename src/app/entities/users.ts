import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Role } from './role';

@Index('PK_Users', ['usersId'], { unique: true })
@Entity('Users', { schema: 'dbo' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'UsersID' })
  usersId: number;

  @Column('nvarchar', { name: 'UserName', nullable: true, length: 50 })
  userName: string | null;

  @Column('nvarchar', { name: 'UserPass', nullable: true, length: 50 })
  userPass: string | null;

  @Column('nvarchar', { name: 'FirstName', nullable: true, length: 50 })
  firstName: string | null;

  @Column('nvarchar', { name: 'LastName', nullable: true, length: 50 })
  lastName: string | null;

  @Column('int', { name: 'PartID', nullable: true })
  partId: number | null;

  @Column('int', { name: 'UserIDBorhan' })
  userIdBorhan: number;

  @Column('varbinary', { name: 'SignerPic', nullable: true })
  signerPic: Buffer | null;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn([{ name: 'RoleID', referencedColumnName: 'roleId' }])
  role: Role;

  @RelationId((users: Users) => users.role)
  roleId: number | null;
}
