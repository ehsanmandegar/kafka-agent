import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salRequestGoodsDocument', ['pkfRequestGoodsDocument'], {
  unique: true,
})
@Entity('salRequestGoodsDocument', { schema: 'dbo' })
export class SalRequestGoodsDocument {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfRequestGoodsDocument' })
  pkfRequestGoodsDocument: number;

  @Column('int', { name: 'FkfRequestGoods' })
  fkfRequestGoods: number;

  @Column('int', { name: 'FkfDocumentType' })
  fkfDocumentType: number;

  @Column('varbinary', { name: 'fileScan', nullable: true })
  fileScan: Buffer | null;

  @Column('nvarchar', { name: 'memo', length: 1000, default: () => "''" })
  memo: string;

  @Column('nvarchar', {
    name: 'fileExt',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fileExt: string | null;

  @Column('int', { name: 'fileSize', nullable: true })
  fileSize: number | null;
}
