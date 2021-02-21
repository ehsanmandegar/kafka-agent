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
import { SalCompanyType } from './sal-company-type';
import { SalContract } from './sal-contract';
import { SalTransfer } from './sal-transfer';
import { SalTransferStoreHouse } from './sal-transfer-store-house';

@Index('PK_salCompany', ['pkfComapny'], { unique: true })
@Entity('salCompany', { schema: 'dbo' })
export class SalCompany {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfComapny' })
  pkfComapny: number;

  @Column('nvarchar', { name: 'comapnyCode', length: 25 })
  comapnyCode: string;

  @Column('nvarchar', { name: 'companyName', length: 150 })
  companyName: string;

  @Column('nvarchar', { name: 'address', length: 255, default: () => "''" })
  address: string;

  @Column('nvarchar', { name: 'tel', length: 150, default: () => "''" })
  tel: string;

  @Column('nvarchar', { name: 'fax', length: 150, default: () => "''" })
  fax: string;

  @Column('nvarchar', { name: 'mail', length: 150, default: () => "''" })
  mail: string;

  @Column('nvarchar', { name: 'url', length: 150, default: () => "''" })
  url: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => '255' })
  memo: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'manager', length: 150, default: () => "''" })
  manager: string;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @ManyToOne(
    () => SalCompanyType,
    (salCompanyType) => salCompanyType.salCompanies,
  )
  @JoinColumn([
    { name: 'FkfCompanyType', referencedColumnName: 'pkfCompanyType' },
  ])
  fkfCompanyType: SalCompanyType;

  @OneToMany(() => SalContract, (salContract) => salContract.fkfProduceFactory)
  salContracts: SalContract[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfAgency)
  salContracts2: SalContract[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfBuyFactory)
  salContracts3: SalContract[];

  @OneToMany(() => SalTransfer, (salTransfer) => salTransfer.fkfPorterage)
  salTransfers: SalTransfer[];

  @OneToMany(
    () => SalTransferStoreHouse,
    (salTransferStoreHouse) => salTransferStoreHouse.fkfPorterage,
  )
  salTransferStoreHouses: SalTransferStoreHouse[];

  @RelationId((salCompany: SalCompany) => salCompany.fkfCompanyType)
  fkfCompanyType2: number;
}
