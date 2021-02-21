import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalTracing } from './sal-tracing';
import { SalTrustDetail } from './sal-trust-detail';

@Index('PK_salWarehouse', ['pkfWarehouse'], { unique: true })
@Entity('salWarehouse', { schema: 'dbo' })
export class SalWarehouse {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWarehouse' })
  pkfWarehouse: number;

  @Column('nvarchar', { name: 'warehouse', length: 150 })
  warehouse: string;

  @OneToMany(() => SalTracing, (salTracing) => salTracing.fkfTransferDetail2)
  salTracings: SalTracing[];

  @OneToMany(
    () => SalTrustDetail,
    (salTrustDetail) => salTrustDetail.fkfWarehouse,
  )
  salTrustDetails: SalTrustDetail[];
}
