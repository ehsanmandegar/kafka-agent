import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_SalStoreInventoryApp', ['tracing'], {})
@Index('IX_SalStoreInventoryApp_1', ['accYear'], {})
@Index('PK_SalStoreInventoryApp', ['pkfSaleStoreInventoryApp'], {
  unique: true,
})
@Entity('SalStoreInventoryApp', { schema: 'dbo' })
export class SalStoreInventoryApp {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSaleStoreInventoryApp' })
  pkfSaleStoreInventoryApp: number;

  @Column('nvarchar', { name: 'tracing', length: 50 })
  tracing: string;

  @Column('bit', { name: 'pack', default: () => '(1)' })
  pack: boolean;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'memo', nullable: true, length: 500 })
  memo: string | null;

  @Column('bit', { name: 'mistake', default: () => '(0)' })
  mistake: boolean;

  @Column('bit', { name: 'LastRoll', default: () => '(0)' })
  lastRoll: boolean;

  @Column('bit', { name: 'CutRoll', default: () => '(0)' })
  cutRoll: boolean;

  @Column('int', { name: 'createUser', nullable: true })
  createUser: number | null;

  @Column('nvarchar', { name: 'createDate', length: 50, default: () => "''" })
  createDate: string;

  @Column('nvarchar', { name: 'createTime', length: 50, default: () => "''" })
  createTime: string;
}
