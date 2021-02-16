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
import { ProForcast } from './pro-forcast';
import { ProProduceDetail } from './pro-produce-detail';
import { ProProducTreeDetail } from './pro-produc-tree-detail';
import { ProProducTreeDetailDamage } from './pro-produc-tree-detail-damage';
import { SalGoods } from './sal-goods';

@Index('IX_proProductTree', ['accYear', 'formulaName', 'fkfProductTreeType'], {
  unique: true,
})
@Index('IX_proProductTree_1', ['serial', 'accYear'], { unique: true })
@Index('PK_proProductTree', ['pkfProductTree'], { unique: true })
@Entity('proProductTree', { schema: 'dbo' })
export class ProProductTree {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProductTree' })
  pkfProductTree: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'formulaName', length: 50 })
  formulaName: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'ctrlPay', default: () => '(0)' })
  ctrlPay: number;

  @Column('int', { name: 'ctrlLoad', default: () => '(0)' })
  ctrlLoad: number;

  @Column('bit', { name: 'formulaDef', default: () => '(0)' })
  formulaDef: boolean;

  @Column('int', { name: 'FkfProductTreeType', default: () => '(1)' })
  fkfProductTreeType: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @OneToMany(() => ProForcast, (proForcast) => proForcast.fkfProductTree)
  proForcasts: ProForcast[];

  @OneToMany(
    () => ProProduceDetail,
    (proProduceDetail) => proProduceDetail.fkfProductTree,
  )
  proProduceDetails: ProProduceDetail[];

  @OneToMany(
    () => ProProducTreeDetail,
    (proProducTreeDetail) => proProducTreeDetail.fkfProductTree2,
  )
  proProducTreeDetails: ProProducTreeDetail[];

  @OneToMany(
    () => ProProducTreeDetailDamage,
    (proProducTreeDetailDamage) => proProducTreeDetailDamage.fkfProductTree,
  )
  proProducTreeDetailDamages: ProProducTreeDetailDamage[];

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.proProductTrees)
  @JoinColumn([{ name: 'fkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods: SalGoods;

  @RelationId((proProductTree: ProProductTree) => proProductTree.fkfGoods)
  fkfGoods2: number;
}
