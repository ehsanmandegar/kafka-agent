import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_karDataTypeValidation', ['pkfDataTypeValidation'], { unique: true })
@Entity('karDataTypeValidation', { schema: 'dbo' })
export class KarDataTypeValidation {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDataTypeValidation' })
  pkfDataTypeValidation: number;

  @Column('int', { name: 'FkfDataTypeField', nullable: true })
  fkfDataTypeField: number | null;

  @Column('int', { name: 'FkfValidationType', nullable: true })
  fkfValidationType: number | null;

  @Column('nvarchar', { name: 'defaultVal', length: 50, default: () => "''" })
  defaultVal: string;
}
