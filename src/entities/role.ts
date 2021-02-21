import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './users';

@Index('PK_Role', ['roleId'], { unique: true })
@Entity('Role', { schema: 'dbo' })
export class Role {
  @PrimaryGeneratedColumn({ type: 'int', name: 'RoleID' })
  roleId: number;

  @Column('nvarchar', { name: 'RoleNameSystem', length: 50 })
  roleNameSystem: string;

  @Column('nvarchar', { name: 'RoleTitle', length: 50 })
  roleTitle: string;

  @OneToMany(() => Users, (users) => users.role)
  users: Users[];
}
