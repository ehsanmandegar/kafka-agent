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
import { GenForm } from './gen-form';
import { GenUserAccess } from './gen-user-access';

@Index('IX_genFormAccess', ['accessName', 'fKfForm'], { unique: true })
@Index('PK_genFormAccess', ['pkfFormAccess'], { unique: true })
@Entity('genFormAccess', { schema: 'dbo' })
export class GenFormAccess {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFormAccess' })
  pkfFormAccess: number;

  @Column('int', { name: 'FKfForm' })
  fKfForm: number;

  @Column('nvarchar', { name: 'accessName', length: 70 })
  accessName: string;

  @ManyToOne(() => GenForm, (genForm) => genForm.genFormAccesses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FKfForm', referencedColumnName: 'pkfForm' }])
  fKfForm2: GenForm;

  @OneToMany(
    () => GenUserAccess,
    (genUserAccess) => genUserAccess.fkfFormAccess,
  )
  genUserAccesses: GenUserAccess[];

  @RelationId((genFormAccess: GenFormAccess) => genFormAccess.fKfForm2)
  fKfForm3: number;
}
