import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_paytblBimeh_Tab_job', ['pkid'], { unique: true })
@Entity('paytblBimeh_Tab_job', { schema: 'dbo' })
export class PaytblBimehTabJob {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PKID' })
  pkid: number;

  @Column('varchar', { name: 'Job_Code', nullable: true, length: 10 })
  jobCode: string | null;

  @Column('nvarchar', { name: 'Job_Desc', nullable: true, length: 50 })
  jobDesc: string | null;
}
