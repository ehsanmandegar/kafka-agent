import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TransportationCostBack', ['id'], { unique: true })
@Entity('TransportationCostBack', { schema: 'dbo' })
export class TransportationCostBack {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('int', { name: 'TransportationCostID', nullable: true })
  transportationCostId: number | null;

  @Column('int', { name: 'SourceCityID', nullable: true })
  sourceCityId: number | null;

  @Column('int', { name: 'DestinationCityID', nullable: true })
  destinationCityId: number | null;

  @Column('bigint', { name: 'Cost', nullable: true })
  cost: string | null;

  @Column('datetime', { name: 'eventDate', nullable: true })
  eventDate: Date | null;

  @Column('int', { name: 'UserID', nullable: true })
  userId: number | null;

  @Column('int', { name: 'Action', nullable: true })
  action: number | null;
}
