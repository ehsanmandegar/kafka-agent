import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'IX_strDefineStoreHouseExport_Fkf',
  ['fkfGoods', 'fkfStore', 'fkfTreaterContract', 'serial'],
  { unique: true },
)
@Index('IX_strDefineStoreHouseExport_Serial', ['serial'], { unique: true })
@Index('PK_strDefineStoreHouseExport', ['pkfDefineStoreHouseExport'], {
  unique: true,
})
@Entity('strDefineStoreHouseExport', { schema: 'dbo' })
export class StrDefineStoreHouseExport {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDefineStoreHouseExport' })
  pkfDefineStoreHouseExport: number;

  @Column('nvarchar', {
    name: 'serial',
    unique: true,
    length: 100,
    default: () => "''",
  })
  serial: string;

  @Column('int', { name: 'FkfTreaterContract', unique: true })
  fkfTreaterContract: number;

  @Column('int', { name: 'FkfStore', unique: true })
  fkfStore: number;

  @Column('int', { name: 'FkfGoods', unique: true })
  fkfGoods: number;

  @Column('int', { name: 'accYear', default: () => '(0)' })
  accYear: number;
}
