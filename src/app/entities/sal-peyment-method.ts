import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salPeymentMethod', ['pkfPeymentMethod'], { unique: true })
@Entity('salPeymentMethod', { schema: 'dbo' })
export class SalPeymentMethod {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPeymentMethod' })
  pkfPeymentMethod: number;

  @Column('nvarchar', { name: 'peymentMethodCode', length: 50 })
  peymentMethodCode: string;

  @Column('nvarchar', { name: 'peymentMethod', length: 50 })
  peymentMethod: string;

  @Column('nvarchar', { name: 'memo', length: 500 })
  memo: string;
}
