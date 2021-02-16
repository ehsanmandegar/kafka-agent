import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salDevice', ['pkfDevice'], { unique: true })
@Entity('salDevice', { schema: 'dbo' })
export class SalDevice {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDevice' })
  pkfDevice: number;

  @Column('int', { name: 'FkfQuartering', nullable: true })
  fkfQuartering: number | null;

  @Column('int', { name: 'FkfDeviceDetail', nullable: true })
  fkfDeviceDetail: number | null;

  @Column('nvarchar', { name: 'specs', length: 50, default: () => "''" })
  specs: string;

  @Column('int', { name: 'number', default: () => '(0)' })
  number: number;

  @Column('nvarchar', { name: 'memo', default: () => "''" })
  memo: string;
}
