import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_proFactor', ['pkfFactor'], { unique: true })
@Entity('proFactor', { schema: 'dbo' })
export class ProFactor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFactor' })
  pkfFactor: number;

  @Column('nvarchar', { name: 'factor', length: 255 })
  factor: string;

  @Column('int', { name: 'FkfTreaterBes' })
  fkfTreaterBes: number;

  @Column('int', { name: 'FkfTreaterBed' })
  fkfTreaterBed: number;

  @Column('bit', { name: 'isActive' })
  isActive: boolean;

  @Column('int', { name: 'accYear' })
  accYear: number;
}
