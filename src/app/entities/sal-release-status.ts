import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salReleaseStatus', ['pkfReleaseStatus'], { unique: true })
@Entity('salReleaseStatus', { schema: 'dbo' })
export class SalReleaseStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfReleaseStatus' })
  pkfReleaseStatus: number;

  @Column('nvarchar', { name: 'releaseStatusCode', length: 50 })
  releaseStatusCode: string;

  @Column('nvarchar', { name: 'releaseStatus', length: 100 })
  releaseStatus: string;
}
