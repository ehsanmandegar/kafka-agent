import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salGoodsDocument', ['pkfGoodsDocument'], { unique: true })
@Entity('salGoodsDocument', { schema: 'dbo' })
export class SalGoodsDocument {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGoodsDocument' })
  pkfGoodsDocument: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('int', { name: 'FkfDocumentType' })
  fkfDocumentType: number;

  @Column('varbinary', { name: 'fileScan', nullable: true })
  fileScan: Buffer | null;

  @Column('nvarchar', { name: 'memo', length: 1000, default: () => "''" })
  memo: string;

  @Column('nvarchar', {
    name: 'FileExt',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fileExt: string | null;

  @Column('decimal', {
    name: 'fileSize',
    precision: 18,
    scale: 0,
    default: () => '(0)',
  })
  fileSize: number;
}
