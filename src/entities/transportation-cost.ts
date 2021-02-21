import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TransportationCost', ['transportationCostId'], { unique: true })
@Entity('TransportationCost', { schema: 'dbo' })
export class TransportationCost {
  @PrimaryGeneratedColumn({ type: 'int', name: 'TransportationCostID' })
  transportationCostId: number;

  @Column('int', { name: 'SourceCityID', nullable: true })
  sourceCityId: number | null;

  @Column('int', { name: 'DestinationCityID', nullable: true })
  destinationCityId: number | null;

  @Column('bigint', { name: 'Cost', nullable: true })
  cost: string | null;
}
