import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salTransportMode', ['pkfTransportMode'], { unique: true })
@Entity('salTransportMode', { schema: 'dbo' })
export class SalTransportMode {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTransportMode' })
  pkfTransportMode: number;

  @Column('nvarchar', {
    name: 'transportMode',
    length: 50,
    default: () => "''",
  })
  transportMode: string;

  @Column('nvarchar', {
    name: 'transportModeCode',
    length: 50,
    default: () => "''",
  })
  transportModeCode: string;

  @Column('nvarchar', {
    name: 'transportModeEN',
    length: 50,
    default: () => "''",
  })
  transportModeEn: string;
}
