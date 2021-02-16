import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalStoreHouseApp } from './sal-store-house-app';

@Index('PK_salStoreHouseDetailApp', ['pkfStoreHouseDetailApp'], {
  unique: true,
})
@Entity('salStoreHouseDetailApp', { schema: 'dbo' })
export class SalStoreHouseDetailApp {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStoreHouseDetailApp' })
  pkfStoreHouseDetailApp: number;

  @Column('int', { name: 'tracingType', default: () => '(1)' })
  tracingType: number;

  @Column('nvarchar', { name: 'createTime', length: 20, default: () => "''" })
  createTime: string;

  @Column('int', { name: 'createUser' })
  createUser: number;

  @Column('nvarchar', { name: 'tracing', length: 50, default: () => "''" })
  tracing: string;

  @ManyToOne(
    () => SalStoreHouseApp,
    (salStoreHouseApp) => salStoreHouseApp.salStoreHouseDetailApps,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfsalStoreHouseApp', referencedColumnName: 'pkfStoreHouseApp' },
  ])
  fkfsalStoreHouseApp: SalStoreHouseApp;

  @RelationId(
    (salStoreHouseDetailApp: SalStoreHouseDetailApp) =>
      salStoreHouseDetailApp.fkfsalStoreHouseApp,
  )
  fkfsalStoreHouseApp2: number;
}
