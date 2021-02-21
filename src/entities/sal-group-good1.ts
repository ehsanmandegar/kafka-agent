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
import { SalGoodsMatter } from './sal-goods-matter';
import { SalGroupGood2 } from './sal-group-good2';

@Index('IX_salGroupGood1', ['codeGroup1', 'fkfGoodsMatter'], { unique: true })
@Index('IX_salGroupGood1_1', ['groupGood1', 'fkfGoodsMatter'], { unique: true })
@Index('PK_salGroupGood1', ['pkfGroupGood1'], { unique: true })
@Entity('salGroupGood1', { schema: 'dbo' })
export class SalGroupGood1 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGroupGood1' })
  pkfGroupGood1: number;

  @Column('nvarchar', { name: 'groupGood1', length: 255, default: () => "''" })
  groupGood1: string;

  @Column('nvarchar', { name: 'codeGroup1', nullable: true, length: 255 })
  codeGroup1: string | null;

  @Column('int', { name: 'FkfGoodTypeProduce', nullable: true })
  fkfGoodTypeProduce: number | null;

  @Column('int', { name: 'FkfGoodsMatter', nullable: true })
  fkfGoodsMatter: number | null;

  @OneToMany(() => SalGoods, (salGoods) => salGoods.fkfGroupGood2)
  salGoods: SalGoods[];

  @ManyToOne(
    () => SalGoodsMatter,
    (salGoodsMatter) => salGoodsMatter.salGroupGoods,
  )
  @JoinColumn([
    { name: 'FkfGoodsMatter', referencedColumnName: 'pkfGoodsMatter' },
  ])
  fkfGoodsMatter2: SalGoodsMatter;

  @OneToMany(() => SalGroupGood2, (salGroupGood2) => salGroupGood2.fkfGroupGood)
  salGroupGoods: SalGroupGood2[];

  @RelationId((salGroupGood1: SalGroupGood1) => salGroupGood1.fkfGoodsMatter2)
  fkfGoodsMatter3: number | null;
}
