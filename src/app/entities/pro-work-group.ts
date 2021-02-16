import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProProduce } from './pro-produce';

@Index('IX_proWorkGroup', ['workGroup'], { unique: true })
@Index('PK_proWorkGroup', ['pkfWorkGroup'], { unique: true })
@Entity('proWorkGroup', { schema: 'dbo' })
export class ProWorkGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWorkGroup' })
  pkfWorkGroup: number;

  @Column('nvarchar', { name: 'workGroup', length: 100 })
  workGroup: string;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @Column('int', { name: 'FkfHead', nullable: true })
  fkfHead: number | null;

  @Column('nvarchar', {
    name: 'workGroupCode',
    length: 100,
    default: () => "''",
  })
  workGroupCode: string;

  @OneToMany(() => ProProduce, (proProduce) => proProduce.fkfWorkGroup)
  proProduces: ProProduce[];
}
