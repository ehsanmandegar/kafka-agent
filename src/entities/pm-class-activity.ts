import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_pmFloorActivity', ['pkfClassActivity'], { unique: true })
@Entity('pmClassActivity', { schema: 'dbo' })
export class PmClassActivity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfClassActivity' })
  pkfClassActivity: number;

  @Column('nvarchar', { name: 'classActivityCode', length: 50 })
  classActivityCode: string;

  @Column('nvarchar', { name: 'classActivity', length: 50 })
  classActivity: string;

  @Column('nvarchar', { name: 'memo', nullable: true, length: 500 })
  memo: string | null;
}
