import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AccSanadDocument } from './acc-sanad-document';
import { BasWeightDocument } from './bas-weight-document';
import { PmRequestRepairDocument } from './pm-request-repair-document';
import { SalDocument } from './sal-document';
import { SalPatnerContractDocument } from './sal-patner-contract-document';
import { SalStoreHouseDocument } from './sal-store-house-document';
import { SalTransferDocument } from './sal-transfer-document';

@Index('PK_genDocumentType', ['pkfDocumentType'], { unique: true })
@Entity('genDocumentType', { schema: 'dbo' })
export class GenDocumentType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDocumentType' })
  pkfDocumentType: number;

  @Column('nvarchar', { name: 'documentType', length: 100 })
  documentType: string;

  @OneToMany(
    () => AccSanadDocument,
    (accSanadDocument) => accSanadDocument.fkfDocumentType,
  )
  accSanadDocuments: AccSanadDocument[];

  @OneToMany(
    () => BasWeightDocument,
    (basWeightDocument) => basWeightDocument.fkfDocumentType,
  )
  basWeightDocuments: BasWeightDocument[];

  @OneToMany(
    () => PmRequestRepairDocument,
    (pmRequestRepairDocument) => pmRequestRepairDocument.fkfDocumentType,
  )
  pmRequestRepairDocuments: PmRequestRepairDocument[];

  @OneToMany(() => SalDocument, (salDocument) => salDocument.fkfDocumentType)
  salDocuments: SalDocument[];

  @OneToMany(
    () => SalPatnerContractDocument,
    (salPatnerContractDocument) => salPatnerContractDocument.fkfDocumentType,
  )
  salPatnerContractDocuments: SalPatnerContractDocument[];

  @OneToMany(
    () => SalStoreHouseDocument,
    (salStoreHouseDocument) => salStoreHouseDocument.fkfDocumentType,
  )
  salStoreHouseDocuments: SalStoreHouseDocument[];

  @OneToMany(
    () => SalTransferDocument,
    (salTransferDocument) => salTransferDocument.fkfDocumentType,
  )
  salTransferDocuments: SalTransferDocument[];
}
