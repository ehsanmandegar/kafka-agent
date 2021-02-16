import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { AccMoein } from './acc-moein';
import { AccCategory } from './acc-category';

@Index(
  'IX_accMoeinCategory',
  ['fkfLevel', 'fkfMoein', 'fkfCategory', 'accYear'],
  { unique: true },
)
@Index('PK_accMoeinCategory', ['pkfMoeinCategory'], { unique: true })
@Entity('accMoeinCategory', { schema: 'dbo' })
export class AccMoeinCategory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfMoeinCategory' })
  pkfMoeinCategory: number;

  @Column('int', { name: 'FkfLevel' })
  fkfLevel: number;

  @Column('int', { name: 'FkfMoein' })
  fkfMoein: number;

  @Column('int', { name: 'fkfCategory' })
  fkfCategory: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.accMoeinCategories, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfMoein', referencedColumnName: 'pkfMoein' }])
  fkfMoein2: AccMoein;

  @ManyToOne(() => AccCategory, (accCategory) => accCategory.accMoeinCategories)
  @JoinColumn([{ name: 'fkfCategory', referencedColumnName: 'pkfCategory' }])
  fkfCategory2: AccCategory;

  @RelationId(
    (accMoeinCategory: AccMoeinCategory) => accMoeinCategory.fkfMoein2,
  )
  fkfMoein3: number;

  @RelationId(
    (accMoeinCategory: AccMoeinCategory) => accMoeinCategory.fkfCategory2,
  )
  fkfCategory3: number;
}
