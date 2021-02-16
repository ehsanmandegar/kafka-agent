import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salGroupGood', ['pkfGroupGood'], { unique: true })
@Entity('salGroupGood', { schema: 'dbo' })
export class SalGroupGood {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGroupGood' })
  pkfGroupGood: number;

  @Column('nvarchar', { name: 'groupGood', length: 4000, default: () => "''" })
  groupGood: string;

  @Column('nvarchar', {
    name: 'groupGoodCode',
    length: 255,
    default: () => "''",
  })
  groupGoodCode: string;

  @Column('int', { name: 'FkfGoodTypeProduce', nullable: true })
  fkfGoodTypeProduce: number | null;

  @Column('int', { name: 'FkfGoodsMatter', nullable: true })
  fkfGoodsMatter: number | null;

  @Column('int', { name: 'FkfParent', nullable: true })
  fkfParent: number | null;

  @Column('nvarchar', { name: 'path', default: () => "''" })
  path: string;
}
