import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salPorter', ['pkfPorter'], { unique: true })
@Entity('salPorter', { schema: 'dbo' })
export class SalPorter {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPorter' })
  pkfPorter: number;

  @Column('nvarchar', { name: 'porter', length: 50 })
  porter: string;

  @Column('int', { name: 'lastSerial', default: () => '(0)' })
  lastSerial: number;
}
