import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AccCategoryTafzili } from './acc-category-tafzili';
import { AccMoeinCategory } from './acc-moein-category';

@Index('IX_accCategory', ['codeCategory'], { unique: true })
@Index('PK_accCategory', ['pkfCategory'], { unique: true })
@Entity('accCategory', { schema: 'dbo' })
export class AccCategory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCategory' })
  pkfCategory: number;

  @Column('nvarchar', { name: 'category', length: 50 })
  category: string;

  @Column('nvarchar', { name: 'codeCategory', length: 50, default: () => "''" })
  codeCategory: string;

  @OneToMany(
    () => AccCategoryTafzili,
    (accCategoryTafzili) => accCategoryTafzili.fkfCategory,
  )
  accCategoryTafzilis: AccCategoryTafzili[];

  @OneToMany(
    () => AccMoeinCategory,
    (accMoeinCategory) => accMoeinCategory.fkfCategory2,
  )
  accMoeinCategories: AccMoeinCategory[];
}
