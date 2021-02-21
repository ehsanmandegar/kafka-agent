import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenForm } from './gen-form';
import { GenUser } from './gen-user';

@Index('PK_genFormGridUser', ['pkfFormGridUser'], { unique: true })
@Entity('genFormGridUser', { schema: 'dbo' })
export class GenFormGridUser {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFormGridUser' })
  pkfFormGridUser: number;

  @Column('image', { name: 'layoutGrid' })
  layoutGrid: Buffer;

  @Column('nvarchar', { name: 'gridName', length: 200 })
  gridName: string;

  @ManyToOne(() => GenForm, (genForm) => genForm.genFormGridUsers, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfForm', referencedColumnName: 'pkfForm' }])
  fkfForm: GenForm;

  @ManyToOne(() => GenUser, (genUser) => genUser.genFormGridUsers, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfUser', referencedColumnName: 'pkfUser' }])
  fkfUser: GenUser;

  @RelationId((genFormGridUser: GenFormGridUser) => genFormGridUser.fkfForm)
  fkfForm2: number;

  @RelationId((genFormGridUser: GenFormGridUser) => genFormGridUser.fkfUser)
  fkfUser2: number;
}
