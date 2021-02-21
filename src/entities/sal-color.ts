import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_salColor', ['colorCode'], { unique: true })
@Index('PK_color', ['pkfColor'], { unique: true })
@Entity('salColor', { schema: 'dbo' })
export class SalColor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfColor' })
  pkfColor: number;

  @Column('nvarchar', { name: 'colorCode', length: 50 })
  colorCode: string;

  @Column('nvarchar', { name: 'colorDesc', length: 100 })
  colorDesc: string;
}
