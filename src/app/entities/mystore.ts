import { Column, Entity } from 'typeorm';

@Entity('mystore', { schema: 'dbo' })
export class Mystore {
  @Column('int', { name: 'FkfPerformaDetail', nullable: true })
  fkfPerformaDetail: number | null;

  @Column('int', { name: 'pkfStoreHouse' })
  pkfStoreHouse: number;

  @Column('bigint', { name: 'VirtualKaredex' })
  virtualKaredex: string;

  @Column('int', { name: 'FkfStoreHouseType' })
  fkfStoreHouseType: number;

  @Column('int', { name: 'pkfStoreHouseDetail' })
  pkfStoreHouseDetail: number;

  @Column('int', { name: 'FkfGood' })
  fkfGood: number;

  @Column('int', { name: 'FkfProject', nullable: true })
  fkfProject: number | null;

  @Column('int', { name: 'FKFStore' })
  fkfStore: number;

  @Column('decimal', { name: 'import1', precision: 18, scale: 2 })
  import1: number;

  @Column('decimal', { name: 'export1', precision: 18, scale: 2 })
  export1: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'storeHouseDate', length: 10 })
  storeHouseDate: string;
}
