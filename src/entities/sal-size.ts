import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_salSize', ['sizeCode'], { unique: true })
@Index('PK_salSize', ['pkfsize'], { unique: true })
@Entity('salSize', { schema: 'dbo' })
export class SalSize {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfsize' })
  pkfsize: number;

  @Column('nvarchar', { name: 'sizeCode', length: 50 })
  sizeCode: string;

  @Column('nvarchar', { name: 'sizeDesc', length: 100 })
  sizeDesc: string;
}
