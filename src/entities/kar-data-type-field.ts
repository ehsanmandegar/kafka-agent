import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_karDataTypeField', ['pkfDataTypeField'], { unique: true })
@Entity('karDataTypeField', { schema: 'dbo' })
export class KarDataTypeField {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDataTypeField' })
  pkfDataTypeField: number;

  @Column('nvarchar', {
    name: 'dataTypeField',
    length: 50,
    default: () => "''",
  })
  dataTypeField: string;
}
