import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_casPayOffFacilities', ['pkfPayOffFacilities'], { unique: true })
@Entity('casPayOffFacilities', { schema: 'dbo' })
export class CasPayOffFacilities {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPayOffFacilities' })
  pkfPayOffFacilities: number;

  @Column('int', { name: 'FkfGetPayGet' })
  fkfGetPayGet: number;

  @Column('int', { name: 'FkfGetPayPay' })
  fkfGetPayPay: number;
}
