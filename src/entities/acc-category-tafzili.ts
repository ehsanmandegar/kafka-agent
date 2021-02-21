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
import { AccCategory } from './acc-category';
import { AccKindTafzili } from './acc-kind-tafzili';
import { AccSanadDetailFloat } from './acc-sanad-detail-float';
import { GenTreater } from './gen-treater';

@Index('IX_accCategoryTafzili', ['codeCategory', 'accYear'], { unique: true })
@Index('IX_accCategoryTafzili_1', ['descCategory', 'accYear'], { unique: true })
@Index('PK_accCategoryTafzili', ['pkfCategoryTafzili'], { unique: true })
@Entity('accCategoryTafzili', { schema: 'dbo' })
export class AccCategoryTafzili {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCategoryTafzili' })
  pkfCategoryTafzili: number;

  @Column('nvarchar', { name: 'codeCategory', length: 50 })
  codeCategory: string;

  @Column('nvarchar', { name: 'descCategory', length: 400 })
  descCategory: string;

  @Column('nvarchar', { name: 'memo', length: 200 })
  memo: string;

  @Column('tinyint', { name: 'FkfAccountType', nullable: true })
  fkfAccountType: number | null;

  @Column('tinyint', { name: 'FkfAccountNature', nullable: true })
  fkfAccountNature: number | null;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkfMoeinDefult', nullable: true })
  fkfMoeinDefult: number | null;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('bit', { name: 'mandatoryT2', default: () => '(0)' })
  mandatoryT2: boolean;

  @Column('bit', { name: 'mandatoryT3', default: () => '(0)' })
  mandatoryT3: boolean;

  @Column('int', { name: 'FKFCurrencyDef', nullable: true })
  fkfCurrencyDef: number | null;

  @Column('bit', { name: 'isActive', default: () => '(1)' })
  isActive: boolean;

  @ManyToOne(
    () => AccCategory,
    (accCategory) => accCategory.accCategoryTafzilis,
  )
  @JoinColumn([{ name: 'FkfCategory', referencedColumnName: 'pkfCategory' }])
  fkfCategory: AccCategory;

  @ManyToOne(
    () => AccKindTafzili,
    (accKindTafzili) => accKindTafzili.accCategoryTafzilis,
  )
  @JoinColumn([
    { name: 'FKFKindTafzili', referencedColumnName: 'pkfKindTafzili' },
  ])
  fkfKindTafzili: AccKindTafzili;

  @OneToMany(
    () => AccSanadDetailFloat,
    (accSanadDetailFloat) => accSanadDetailFloat.fkfTafzili,
  )
  accSanadDetailFloats: AccSanadDetailFloat[];

  @OneToMany(
    () => AccSanadDetailFloat,
    (accSanadDetailFloat) => accSanadDetailFloat.fkfTafzili2,
  )
  accSanadDetailFloats2: AccSanadDetailFloat[];

  @OneToMany(
    () => AccSanadDetailFloat,
    (accSanadDetailFloat) => accSanadDetailFloat.fkfTAfzili,
  )
  accSanadDetailFloats3: AccSanadDetailFloat[];

  @OneToMany(() => GenTreater, (genTreater) => genTreater.fkfTafzili)
  genTreaters: GenTreater[];

  @RelationId(
    (accCategoryTafzili: AccCategoryTafzili) => accCategoryTafzili.fkfCategory,
  )
  fkfCategory2: number;

  @RelationId(
    (accCategoryTafzili: AccCategoryTafzili) =>
      accCategoryTafzili.fkfKindTafzili,
  )
  fkfKindTafzili2: number | null;
}
