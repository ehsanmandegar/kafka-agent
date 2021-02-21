import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salRequestStatus', ['pkfRequestStatus'], { unique: true })
@Entity('salRequestStatus', { schema: 'dbo' })
export class SalRequestStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfRequestStatus' })
  pkfRequestStatus: number;

  @Column('nvarchar', { name: 'requestStatus', length: 200 })
  requestStatus: string;
}
