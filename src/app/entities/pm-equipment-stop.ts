import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_pmEquipmentStop', ['pkfEquipmentStop'], { unique: true })
@Entity('pmEquipmentStop', { schema: 'dbo' })
export class PmEquipmentStop {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfEquipmentStop' })
  pkfEquipmentStop: number;

  @Column('int', { name: 'fkfEquipment' })
  fkfEquipment: number;

  @Column('nvarchar', { name: 'stopDate', length: 50 })
  stopDate: string;

  @Column('smalldatetime', { name: 'startTime' })
  startTime: Date;

  @Column('smalldatetime', { name: 'endTime' })
  endTime: Date;

  @Column('int', { name: 'fkfActivityRecord', nullable: true })
  fkfActivityRecord: number | null;

  @Column('nvarchar', { name: 'memo', nullable: true })
  memo: string | null;
}
