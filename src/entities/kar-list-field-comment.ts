import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_karListFieldComment', ['pkfListFieldComment'], { unique: true })
@Entity('karListFieldComment', { schema: 'dbo' })
export class KarListFieldComment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfListFieldComment' })
  pkfListFieldComment: number;

  @Column('nvarchar', { name: 'fieldName', length: 50, default: () => "''" })
  fieldName: string;

  @Column('nvarchar', { name: 'fieldNameEN', length: 50, default: () => "''" })
  fieldNameEn: string;

  @Column('int', { name: 'fieldOrder', nullable: true })
  fieldOrder: number | null;

  @Column('int', { name: 'FkfWorkFlowStepComment', nullable: true })
  fkfWorkFlowStepComment: number | null;
}
