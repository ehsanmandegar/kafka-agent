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

@Index('PK_genFormGrid', ['pkfFormGrid'], { unique: true })
@Entity('genFormGrid', { schema: 'dbo' })
export class GenFormGrid {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFormGrid' })
  pkfFormGrid: number;

  @Column('image', { name: 'layoutGrid' })
  layoutGrid: Buffer;

  @Column('nvarchar', { name: 'gridName', length: 200 })
  gridName: string;

  @ManyToOne(() => GenForm, (genForm) => genForm.genFormGrs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfForm', referencedColumnName: 'pkfForm' }])
  fkfForm: GenForm;

  @RelationId((genFormGrid: GenFormGrid) => genFormGrid.fkfForm)
  fkfForm2: number;
}
