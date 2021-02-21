import { Column, Entity, Index, OneToMany } from 'typeorm';
import { BalBail } from './bal-bail';
import { ProProduce } from './pro-produce';
import { SalContract } from './sal-contract';
import { SalProforma } from './sal-proforma';
import { SalStoreHouse } from './sal-store-house';
import { SalTransfer } from './sal-transfer';
import { SalTransferStoreHouse } from './sal-transfer-store-house';
import { SalTrust } from './sal-trust';

@Index('PK_genStatus', ['pkfStatus'], { unique: true })
@Entity('genStatus', { schema: 'dbo' })
export class GenStatus {
  @Column('int', { primary: true, name: 'pkfStatus' })
  pkfStatus: number;

  @Column('nvarchar', { name: 'status', length: 50 })
  status: string;

  @OneToMany(() => BalBail, (balBail) => balBail.fkfStatus)
  balBails: BalBail[];

  @OneToMany(() => ProProduce, (proProduce) => proProduce.fkfStatus)
  proProduces: ProProduce[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfStatus)
  salContracts: SalContract[];

  @OneToMany(() => SalProforma, (salProforma) => salProforma.fkfStatus)
  salProformas: SalProforma[];

  @OneToMany(() => SalStoreHouse, (salStoreHouse) => salStoreHouse.fkfStatus)
  salStoreHouses: SalStoreHouse[];

  @OneToMany(
    () => SalStoreHouse,
    (salStoreHouse) => salStoreHouse.fkfStatusPrice,
  )
  salStoreHouses2: SalStoreHouse[];

  @OneToMany(() => SalTransfer, (salTransfer) => salTransfer.fkfStatus)
  salTransfers: SalTransfer[];

  @OneToMany(
    () => SalTransferStoreHouse,
    (salTransferStoreHouse) => salTransferStoreHouse.fkfStatus,
  )
  salTransferStoreHouses: SalTransferStoreHouse[];

  @OneToMany(() => SalTrust, (salTrust) => salTrust.fkfStatus)
  salTrusts: SalTrust[];
}
