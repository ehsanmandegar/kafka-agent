import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salTransferCostDetailDelete', ['pkfTransferCostDetailDel'], {
  unique: true,
})
@Entity('salTransferCostDetailDelete', { schema: 'dbo' })
export class SalTransferCostDetailDelete {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTransferCostDetailDel' })
  pkfTransferCostDetailDel: number;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('nvarchar', { name: 'contractCost', length: 255 })
  contractCost: string;

  @Column('nvarchar', { name: 'besTreater', length: 255 })
  besTreater: string;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 10 })
  deleteTime: string;

  @Column('int', { name: 'FkfTransfer' })
  fkfTransfer: number;
}
