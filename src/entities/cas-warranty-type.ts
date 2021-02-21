import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_casWarrantyType', ['pkfWarrantyType'], { unique: true })
@Entity('casWarrantyType', { schema: 'dbo' })
export class CasWarrantyType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWarrantyType' })
  pkfWarrantyType: number;

  @Column('nvarchar', { name: 'warranty', length: 100 })
  warranty: string;

  @Column('int', { name: 'FkfMoein' })
  fkfMoein: number;

  @Column('bit', { name: 'isActive' })
  isActive: boolean;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;
}
