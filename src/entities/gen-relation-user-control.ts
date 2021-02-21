import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenUser } from './gen-user';
import { GenControl } from './gen-control';

@Entity('genRelation_User_Control', { schema: 'dbo' })
export class GenRelationUserControl {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfRelation_User_Control' })
  pkfRelationUserControl: number;

  @Column('bit', { name: 'flag', default: () => '(0)' })
  flag: boolean;

  @ManyToOne(() => GenUser, (genUser) => genUser.genRelationUserControls)
  @JoinColumn([{ name: 'FkfUser', referencedColumnName: 'pkfUser' }])
  fkfUser: GenUser;

  @ManyToOne(
    () => GenControl,
    (genControl) => genControl.genRelationUserControls,
  )
  @JoinColumn([{ name: 'FkfControl', referencedColumnName: 'pkfGenControl' }])
  fkfControl: GenControl;

  @RelationId(
    (genRelationUserControl: GenRelationUserControl) =>
      genRelationUserControl.fkfUser,
  )
  fkfUser2: number;

  @RelationId(
    (genRelationUserControl: GenRelationUserControl) =>
      genRelationUserControl.fkfControl,
  )
  fkfControl2: number;
}
