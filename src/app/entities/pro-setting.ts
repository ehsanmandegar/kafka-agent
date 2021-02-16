import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_proSetting', ['pkfProSetting'], { unique: true })
@Entity('proSetting', { schema: 'dbo' })
export class ProSetting {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProSetting' })
  pkfProSetting: number;

  @Column('int', { name: 'FkfAnbarBase', nullable: true })
  fkfAnbarBase: number | null;

  @Column('int', { name: 'FkfAnbarHalf_built', nullable: true })
  fkfAnbarHalfBuilt: number | null;

  @Column('int', { name: 'FkfAnbarProduct', nullable: true })
  fkfAnbarProduct: number | null;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FKFMoienHavaleMasraf', nullable: true })
  fkfMoienHavaleMasraf: number | null;

  @Column('int', { name: 'FKFTafzilHavaleMasraf', nullable: true })
  fkfTafzilHavaleMasraf: number | null;

  @Column('int', { name: 'FKFMoienResidTolid', nullable: true })
  fkfMoienResidTolid: number | null;

  @Column('int', { name: 'FKFTafzilResidTolid', nullable: true })
  fkfTafzilResidTolid: number | null;

  @Column('int', { name: 'fkfproject', nullable: true })
  fkfproject: number | null;

  @Column('bit', { name: 'repNoMandatoryUniqe', default: () => '(0)' })
  repNoMandatoryUniqe: boolean;

  @Column('int', { name: 'FKFMoienImportExportDemontaj', nullable: true })
  fkfMoienImportExportDemontaj: number | null;

  @Column('int', { name: 'FKFTafzilImportExportDemontaj', nullable: true })
  fkfTafzilImportExportDemontaj: number | null;

  @Column('nvarchar', { name: 'sqlIP', length: 150, default: () => "''" })
  sqlIp: string;

  @Column('nvarchar', { name: 'sqlUser', length: 150, default: () => "''" })
  sqlUser: string;

  @Column('nvarchar', { name: 'sqlPass', length: 150, default: () => "''" })
  sqlPass: string;

  @Column('nvarchar', { name: 'sqlDbName', length: 150, default: () => "''" })
  sqlDbName: string;

  @Column('int', { name: 'FKFMoienResidTolidDemontaj', nullable: true })
  fkfMoienResidTolidDemontaj: number | null;

  @Column('int', { name: 'FKFTafzilResidTolidDemontaj', nullable: true })
  fkfTafzilResidTolidDemontaj: number | null;

  @Column('int', { name: 'FKFMoeinCostPay', nullable: true })
  fkfMoeinCostPay: number | null;

  @Column('int', { name: 'FKFTafzilCostPay', nullable: true })
  fkfTafzilCostPay: number | null;

  @Column('int', { name: 'FKFMoeinCostOverLoad', nullable: true })
  fkfMoeinCostOverLoad: number | null;

  @Column('int', { name: 'FKFTafzilCostOverLoad', nullable: true })
  fkfTafzilCostOverLoad: number | null;
}
