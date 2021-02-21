import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_accDocumentType', ['pkfDocumentType'], { unique: true })
@Entity('accDocumentType', { schema: 'dbo' })
export class AccDocumentType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDocumentType' })
  pkfDocumentType: number;

  @Column('nvarchar', { name: 'documentType', length: 100 })
  documentType: string;

  @Column('int', { name: 'documentTypeCode', default: () => "''" })
  documentTypeCode: number;
}
