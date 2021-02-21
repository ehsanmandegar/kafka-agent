import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenFormGridUser } from './gen-form-grid-user';
import { GenRelationUserControl } from './gen-relation-user-control';
import { GenEmployee } from './gen-employee';
import { GenAccessType } from './gen-access-type';
import { GenUserAccess } from './gen-user-access';

@Index('IX_genUser', ['userName'], { unique: true })
@Index('PK_genUser', ['pkfUser'], { unique: true })
@Entity('genUser', { schema: 'dbo' })
export class GenUser {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfUser' })
  pkfUser: number;

  @Column('nvarchar', { name: 'userName', length: 100 })
  userName: string;

  @Column('nvarchar', { name: 'password', length: 100 })
  password: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('int', { name: 'creatorRoleId', nullable: true })
  creatorRoleId: number | null;

  @Column('int', { name: 'senderRoleId', nullable: true })
  senderRoleId: number | null;

  @Column('bit', { name: 'encryptPass', default: () => '(0)' })
  encryptPass: boolean;

  @OneToMany(
    () => GenFormGridUser,
    (genFormGridUser) => genFormGridUser.fkfUser,
  )
  genFormGridUsers: GenFormGridUser[];

  @OneToMany(
    () => GenRelationUserControl,
    (genRelationUserControl) => genRelationUserControl.fkfUser,
  )
  genRelationUserControls: GenRelationUserControl[];

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.genUsers)
  @JoinColumn([{ name: 'FkfEmployee', referencedColumnName: 'pkfEmployee' }])
  fkfEmployee: GenEmployee;

  @ManyToOne(() => GenAccessType, (genAccessType) => genAccessType.genUsers)
  @JoinColumn([
    { name: 'FkfAccessType', referencedColumnName: 'pkfAccessType' },
  ])
  fkfAccessType: GenAccessType;

  @OneToMany(() => GenUserAccess, (genUserAccess) => genUserAccess.fkfUser)
  genUserAccesses: GenUserAccess[];

  @RelationId((genUser: GenUser) => genUser.fkfEmployee)
  fkfEmployee2: number;

  @RelationId((genUser: GenUser) => genUser.fkfAccessType)
  fkfAccessType2: number;
}
