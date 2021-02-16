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
import { SalGroupGood1 } from './sal-group-good1';
import { SalGroupGood3 } from './sal-group-good3';

@Index('IX_salGroupGood2', ['codeGroup2', 'fkfGroupGood1'], { unique: true })
@Index('IX_salGroupGood2_1', ['groupGood2', 'fkfGroupGood1'], { unique: true })
@Index('PK_salGroupGood2', ['pkfGroupGood2'], { unique: true })
@Entity('salGroupGood2', { schema: 'dbo' })
export class SalGroupGood2 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGroupGood2' })
  pkfGroupGood2: number;

  @Column('nvarchar', { name: 'groupGood2', length: 255, default: () => "''" })
  groupGood2: string;

  @Column('nvarchar', { name: 'codeGroup2', nullable: true, length: 255 })
  codeGroup2: string | null;

  @Column('int', { name: 'FkfGroupGood1', nullable: true })
  fkfGroupGood1: number | null;

  @OneToMany(() => SalGoods, (salGoods) => salGoods.fkfGroupGood3)
  salGoods: SalGoods[];

  @ManyToOne(
    () => SalGroupGood1,
    (salGroupGood1) => salGroupGood1.salGroupGoods,
  )
  @JoinColumn([
    { name: 'FkfGroupGood1', referencedColumnName: 'pkfGroupGood1' },
  ])
  fkfGroupGood: SalGroupGood1;

  @OneToMany(() => SalGroupGood3, (salGroupGood3) => salGroupGood3.fkfGroupGood)
  salGroupGoods: SalGroupGood3[];

  @RelationId((salGroupGood2: SalGroupGood2) => salGroupGood2.fkfGroupGood)
  fkfGroupGood2: number | null;
}
