import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalStoreHouse } from './sal-store-house';
import { GenDocumentType } from './gen-document-type';

@Index('PK_salStoreHouseDocument', ['pkfStoreHouseDocument'], { unique: true })
@Entity('salStoreHouseDocument', { schema: 'dbo' })
export class SalStoreHouseDocument {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStoreHouseDocument' })
  pkfStoreHouseDocument: number;

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

  @ManyToOne(
    () => SalStoreHouse,
    (salStoreHouse) => salStoreHouse.salStoreHouseDocuments,
  )
  @JoinColumn([
    { name: 'FkfStoreHouse', referencedColumnName: 'pkfStoreHouse' },
  ])
  fkfStoreHouse: SalStoreHouse;

  @ManyToOne(
    () => GenDocumentType,
    (genDocumentType) => genDocumentType.salStoreHouseDocuments,
  )
  @JoinColumn([
    { name: 'FkfDocumentType', referencedColumnName: 'pkfDocumentType' },
  ])
  fkfDocumentType: GenDocumentType;

  @RelationId(
    (salStoreHouseDocument: SalStoreHouseDocument) =>
      salStoreHouseDocument.fkfStoreHouse,
  )
  fkfStoreHouse2: number;

  @RelationId(
    (salStoreHouseDocument: SalStoreHouseDocument) =>
      salStoreHouseDocument.fkfDocumentType,
  )
  fkfDocumentType2: number;
}
