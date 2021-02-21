import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index(
  'myindex',
  [
    'virtualKaredex',
    'mojodi',
    'fkfgood',
    'pkfStoreHouseDetail',
    'import1',
    'export1',
    'rown',
    'fkfStore',
    'fkfStoreHouseType',
    'fkfproject',
    'storeHouseDate',
    'pkfStoreHouse',
  ],
  {},
)
@Entity('mykardex', { schema: 'dbo' })
export class Mykardex {
  @PrimaryColumn('int', { name: 'pkfStoreHouseDetail' })
  pkfStoreHouseDetail: number;

  @Column('decimal', { name: 'import1', precision: 18, scale: 2 })
  import1: number;

  @Column('decimal', { name: 'export1', precision: 18, scale: 2 })
  export1: number;

  @Column('bigint', { name: 'rown', nullable: true })
  rown: string | null;

  @Column('int', { name: 'FKFStore' })
  fkfStore: number;

  @Column('int', { name: 'FkfStoreHouseType' })
  fkfStoreHouseType: number;

  @Column('int', { name: 'fkfgood' })
  fkfgood: number;

  @Column('int', { name: 'fkfproject', nullable: true })
  fkfproject: number | null;

  @Column('bigint', { name: 'VirtualKaredex' })
  virtualKaredex: string;

  @Column('nvarchar', { name: 'storeHouseDate', length: 10 })
  storeHouseDate: string;

  @Column('int', { name: 'pkfStoreHouse' })
  pkfStoreHouse: number;

  @Column('decimal', {
    name: 'mojodi',
    nullable: true,
    precision: 38,
    scale: 2,
  })
  mojodi: number | null;
}
