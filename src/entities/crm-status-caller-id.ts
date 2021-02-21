import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_crmStatusCallerID', ['pkfStatusCallerId'], { unique: true })
@Entity('crmStatusCallerID', { schema: 'dbo' })
export class CrmStatusCallerId {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStatusCallerID' })
  pkfStatusCallerId: number;

  @Column('nvarchar', { name: 'statusCode', length: 50 })
  statusCode: string;

  @Column('nvarchar', { name: 'statusName', length: 100 })
  statusName: string;
}
