import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salDefineEditWeight', ['pkfDefineEditWeight'], { unique: true })
@Entity('salDefineEditWeight', { schema: 'dbo' })
export class SalDefineEditWeight {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDefineEditWeight' })
  pkfDefineEditWeight: number;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('decimal', {
    name: 'editWeight',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  editWeight: number;

  @Column('int', { name: 'FkfContractDetail', nullable: true })
  fkfContractDetail: number | null;
}
