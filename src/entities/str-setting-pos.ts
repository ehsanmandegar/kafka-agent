import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_strSettingPos', ['pkfSettingPos'], { unique: true })
@Entity('strSettingPos', { schema: 'dbo' })
export class StrSettingPos {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSettingPos' })
  pkfSettingPos: number;

  @Column('int', { name: 'FkfCompany', nullable: true })
  fkfCompany: number | null;

  @Column('int', { name: 'FkfPort', nullable: true })
  fkfPort: number | null;

  @Column('int', { name: 'FkfProtocol', nullable: true })
  fkfProtocol: number | null;

  @Column('nvarchar', { name: 'factorNo', length: 50, default: () => "''" })
  factorNo: string;

  @Column('nvarchar', { name: 'memo', default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'serialNo', length: 50, default: () => "''" })
  serialNo: string;

  @Column('nvarchar', { name: 'receptionNo', length: 50, default: () => "''" })
  receptionNo: string;

  @Column('nvarchar', { name: 'terminalNo', length: 50, default: () => "''" })
  terminalNo: string;

  @Column('bit', { name: 'isActive', default: () => '(1)' })
  isActive: boolean;

  @Column('bit', { name: 'isDefult', default: () => '(0)' })
  isDefult: boolean;

  @Column('nvarchar', { name: 'speadPort', length: 50, default: () => "''" })
  speadPort: string;

  @Column('nvarchar', {
    name: 'computerName',
    length: 200,
    default: () => "''",
  })
  computerName: string;

  @Column('int', { name: 'FkfBank' })
  fkfBank: number;
}
