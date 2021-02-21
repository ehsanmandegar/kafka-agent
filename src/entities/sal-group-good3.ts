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
import { SalGoods } from './sal-goods';
import { SalGroupGood2 } from './sal-group-good2';

@Index('IX_salGroupGood3', ['codeGroup3', 'fkfGroupGood2'], { unique: true })
@Index('IX_salGroupGood3_1', ['groupGood3', 'fkfGroupGood2'], { unique: true })
@Index('PK_salGoodGroup3', ['pkfGroupGood3'], { unique: true })
@Entity('salGroupGood3', { schema: 'dbo' })
export class SalGroupGood3 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGroupGood3' })
  pkfGroupGood3: number;

  @Column('nvarchar', { name: 'groupGood3', length: 255, default: () => "''" })
  groupGood3: string;

  @Column('nvarchar', { name: 'codeGroup3', nullable: true, length: 255 })
  codeGroup3: string | null;

  @Column('int', { name: 'FkfGroupGood2', nullable: true })
  fkfGroupGood2: number | null;

  @OneToMany(() => SalGoods, (salGoods) => salGoods.fkfGroupGood7)
  salGoods: SalGoods[];

  @ManyToOne(
    () => SalGroupGood2,
    (salGroupGood2) => salGroupGood2.salGroupGoods,
  )
  @JoinColumn([
    { name: 'FkfGroupGood2', referencedColumnName: 'pkfGroupGood2' },
  ])
  fkfGroupGood: SalGroupGood2;

  @RelationId((salGroupGood3: SalGroupGood3) => salGroupGood3.fkfGroupGood)
  fkfGroupGood3: number | null;
}
