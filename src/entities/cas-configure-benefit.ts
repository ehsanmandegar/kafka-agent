import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_casConfigureBenefit', ['pkfConfigBenifit'], { unique: true })
@Entity('casConfigureBenefit', { schema: 'dbo' })
export class CasConfigureBenefit {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfConfigBenifit' })
  pkfConfigBenifit: number;

  @Column('int', { name: 'FkfKol' })
  fkfKol: number;

  @Column('int', { name: 'type' })
  type: number;

  @Column('int', { name: 'accYear' })
  accYear: number;
}
