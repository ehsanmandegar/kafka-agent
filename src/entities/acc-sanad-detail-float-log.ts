import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_accSanadDetailFloatLog', ['pkfSanadDetailFloatLog'], {
  unique: true,
})
@Entity('accSanadDetailFloatLog', { schema: 'dbo' })
export class AccSanadDetailFloatLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSanadDetailFloatLog' })
  pkfSanadDetailFloatLog: number;

  @Column('int', { name: 'typeLog', nullable: true })
  typeLog: number | null;

  @Column('int', { name: 'FkfLogUser' })
  fkfLogUser: number;

  @Column('nvarchar', { name: 'logTime', length: 5 })
  logTime: string;

  @Column('nvarchar', { name: 'logDate', length: 10 })
  logDate: string;

  @Column('nvarchar', { name: 'computerIP', length: 255 })
  computerIp: string;

  @Column('nvarchar', { name: 'computerUser', length: 255 })
  computerUser: string;

  @Column('nvarchar', { name: 'computerName', length: 255 })
  computerName: string;

  @Column('int', { name: 'pkfSanad' })
  pkfSanad: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'tempNo' })
  tempNo: number;

  @Column('int', { name: 'finalNo', nullable: true })
  finalNo: number | null;

  @Column('nvarchar', { name: 'sanadDate', length: 50 })
  sanadDate: string;

  @Column('tinyint', { name: 'FkfSanadStatus' })
  fkfSanadStatus: number;

  @Column('nvarchar', { name: 'description', length: 255 })
  description: string;

  @Column('int', { name: 'FkfSanadTypes' })
  fkfSanadTypes: number;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('varchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', length: 50 })
  editDate: string;

  @Column('int', { name: 'FkfAssignUser', nullable: true })
  fkfAssignUser: number | null;

  @Column('varchar', { name: 'assignDate', length: 10 })
  assignDate: string;

  @Column('int', { name: 'FkfAuditUser', nullable: true })
  fkfAuditUser: number | null;

  @Column('varchar', { name: 'auditDate', length: 10 })
  auditDate: string;

  @Column('varchar', { name: 'finalDate', length: 10 })
  finalDate: string;

  @Column('int', { name: 'FkfFinalUser', nullable: true })
  fkfFinalUser: number | null;

  @Column('int', { name: 'getPaySerial', nullable: true })
  getPaySerial: number | null;

  @Column('int', { name: 'FkfSendFrom' })
  fkfSendFrom: number;

  @Column('int', { name: 'FkfMarkaz', nullable: true })
  fkfMarkaz: number | null;

  @Column('int', { name: 'FkfMain', nullable: true })
  fkfMain: number | null;

  @Column('int', { name: 'tempNoMain', nullable: true })
  tempNoMain: number | null;

  @Column('int', { name: 'tempNoOld', nullable: true })
  tempNoOld: number | null;

  @Column('int', { name: 'tempNoMarkaz' })
  tempNoMarkaz: number;

  @Column('int', { name: 'sanadNo' })
  sanadNo: number;

  @Column('int', { name: 'FkfUltimateUser', nullable: true })
  fkfUltimateUser: number | null;

  @Column('nvarchar', { name: 'ultimateDate', length: 10 })
  ultimateDate: string;

  @Column('nvarchar', { name: 'sanadNoDate', length: 10 })
  sanadNoDate: string;

  @Column('int', { name: 'batchNo' })
  batchNo: number;

  @Column('nvarchar', { name: 'batchNoDate', length: 10 })
  batchNoDate: string;

  @Column('int', { name: 'pkfSanadDetail' })
  pkfSanadDetail: number;

  @Column('int', { name: 'articleNo', nullable: true })
  articleNo: number | null;

  @Column('int', { name: 'FkfSanad' })
  fkfSanad: number;

  @Column('int', { name: 'FkfMoein', nullable: true })
  fkfMoein: number | null;

  @Column('int', { name: 'FkfTafzili4', nullable: true })
  fkfTafzili4: number | null;

  @Column('int', { name: 'FkfTafzili5', nullable: true })
  fkfTafzili5: number | null;

  @Column('int', { name: 'FkfTAfzili6', nullable: true })
  fkfTAfzili6: number | null;

  @Column('nvarchar', { name: 'descriptionD', length: 250 })
  descriptionD: string;

  @Column('bigint', { name: 'bedPrice' })
  bedPrice: string;

  @Column('bigint', { name: 'besPrice' })
  besPrice: string;

  @Column('int', { name: 'FkfCurrency', nullable: true })
  fkfCurrency: number | null;

  @Column('decimal', { name: 'bedPriceCur', precision: 18, scale: 2 })
  bedPriceCur: number;

  @Column('decimal', { name: 'besPriceCur', precision: 18, scale: 2 })
  besPriceCur: number;

  @Column('float', { name: 'feeCurrency', precision: 53 })
  feeCurrency: number;

  @Column('int', { name: 'FkfGetPayDetail', nullable: true })
  fkfGetPayDetail: number | null;

  @Column('int', { name: 'FkfContractDetail', nullable: true })
  fkfContractDetail: number | null;

  @Column('int', { name: 'FkfContractCostDetail', nullable: true })
  fkfContractCostDetail: number | null;

  @Column('int', { name: 'FkfTransferDetail', nullable: true })
  fkfTransferDetail: number | null;

  @Column('int', { name: 'FkfTransferCostDetail', nullable: true })
  fkfTransferCostDetail: number | null;

  @Column('int', { name: 'FkfSendtype', nullable: true })
  fkfSendtype: number | null;

  @Column('int', { name: 'FKF', nullable: true })
  fkf: number | null;

  @Column('int', { name: 'FkfFrom', nullable: true })
  fkfFrom: number | null;

  @Column('int', { name: 'FKF2', nullable: true })
  fkf2: number | null;

  @Column('int', { name: 'mark' })
  mark: number;

  @Column('nvarchar', { name: 'groupCode', length: 4 })
  groupCode: string;

  @Column('nvarchar', { name: 'groupName', length: 200 })
  groupName: string;

  @Column('nvarchar', { name: 'kolCode', length: 8 })
  kolCode: string;

  @Column('nvarchar', { name: 'kolName', length: 200 })
  kolName: string;

  @Column('nvarchar', { name: 'moeinCode', length: 8 })
  moeinCode: string;

  @Column('nvarchar', { name: 'moeinName', length: 200 })
  moeinName: string;

  @Column('nvarchar', { name: 'tafziliCode1', nullable: true, length: 50 })
  tafziliCode1: string | null;

  @Column('nvarchar', { name: 'tafzili1', nullable: true, length: 400 })
  tafzili1: string | null;

  @Column('nvarchar', { name: 'tafziliCode2', nullable: true, length: 50 })
  tafziliCode2: string | null;

  @Column('nvarchar', { name: 'tafzili2', nullable: true, length: 400 })
  tafzili2: string | null;

  @Column('nvarchar', { name: 'tafziliCode3', nullable: true, length: 50 })
  tafziliCode3: string | null;

  @Column('nvarchar', { name: 'tafzili3', nullable: true, length: 400 })
  tafzili3: string | null;

  @Column('nvarchar', { name: 'sanadTypes', nullable: true, length: 150 })
  sanadTypes: string | null;

  @Column('nvarchar', { name: 'markaz', nullable: true, length: 400 })
  markaz: string | null;
}
