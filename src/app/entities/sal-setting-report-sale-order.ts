import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salSettingReportSaleOrder', ['pkfSettingReportSaleOrder'], {
  unique: true,
})
@Entity('salSettingReportSaleOrder', { schema: 'dbo' })
export class SalSettingReportSaleOrder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSettingReportSaleOrder' })
  pkfSettingReportSaleOrder: number;

  @Column('nvarchar', { name: 'titleColumn', length: 50, default: () => "''" })
  titleColumn: string;

  @Column('nvarchar', { name: 'titlePrint', length: 50, default: () => "''" })
  titlePrint: string;

  @Column('nvarchar', { name: 'keyColumn', length: 50, default: () => "''" })
  keyColumn: string;

  @Column('int', { name: 'sequenceColumn', default: () => '(0)' })
  sequenceColumn: number;

  @Column('bit', { name: 'isPrint', default: () => '(0)' })
  isPrint: boolean;

  @Column('bit', { name: 'isHeader', default: () => '(0)' })
  isHeader: boolean;

  @Column('int', { name: 'FkfPorter', nullable: true })
  fkfPorter: number | null;

  @Column('float', {
    name: 'sizeColumn',
    precision: 53,
    default: () => '(0.0)',
  })
  sizeColumn: number;

  @Column('nvarchar', { name: 'typeColumn', length: 50, default: () => "''" })
  typeColumn: string;
}
