import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_salForceColor', ['forceColorCode'], { unique: true })
@Index('PK_salForceColor', ['pkfforceColor'], { unique: true })
@Entity('salForceColor', { schema: 'dbo' })
export class SalForceColor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfforceColor' })
  pkfforceColor: number;

  @Column('nvarchar', { name: 'forceColorCode', length: 50 })
  forceColorCode: string;

  @Column('nvarchar', { name: 'forceColorDesc', length: 100 })
  forceColorDesc: string;
}
