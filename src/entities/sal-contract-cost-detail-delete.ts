import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salContractCostDetailDelete', ['pkfContractCostDetailDel'], {
  unique: true,
})
@Entity('salContractCostDetailDelete', { schema: 'dbo' })
export class SalContractCostDetailDelete {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractCostDetailDel' })
  pkfContractCostDetailDel: number;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('nvarchar', { name: 'contractCost', length: 255 })
  contractCost: string;

  @Column('nvarchar', { name: 'besTreater', length: 255 })
  besTreater: string;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 10 })
  deleteTime: string;

  @Column('nvarchar', { name: 'buyContract', nullable: true, length: 50 })
  buyContract: string | null;
}
