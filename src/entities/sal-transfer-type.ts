import { Column, Entity, Index, OneToMany } from 'typeorm';
import { SalTransfer } from './sal-transfer';
import { SalTransferStoreHouse } from './sal-transfer-store-house';

@Index('PK_salTransferType', ['pkfTransferType'], { unique: true })
@Entity('salTransferType', { schema: 'dbo' })
export class SalTransferType {
  @Column('int', { primary: true, name: 'pkfTransferType' })
  pkfTransferType: number;

  @Column('nvarchar', { name: 'transferType', nullable: true, length: 50 })
  transferType: string | null;

  @OneToMany(() => SalTransfer, (salTransfer) => salTransfer.fkfTransferType2)
  salTransfers: SalTransfer[];

  @OneToMany(
    () => SalTransferStoreHouse,
    (salTransferStoreHouse) => salTransferStoreHouse.fkfTransferType2,
  )
  salTransferStoreHouses: SalTransferStoreHouse[];
}
