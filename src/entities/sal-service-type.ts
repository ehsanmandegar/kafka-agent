import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalServiceDetail } from './sal-service-detail';
import { GenTreater } from './gen-treater';

@Index('IX_salServiceType', ['serviceCode', 'accYear'], { unique: true })
@Index('PK_salServiceType', ['pkfServiceType'], { unique: true })
@Entity('salServiceType', { schema: 'dbo' })
export class SalServiceType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfServiceType' })
  pkfServiceType: number;

  @Column('nvarchar', { name: 'serviceType', length: 150 })
  serviceType: string;

  @Column('nvarchar', { name: 'serviceCode', length: 25 })
  serviceCode: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('bit', { name: 'active' })
  active: boolean;

  @Column('int', { name: 'fee', default: () => '(0)' })
  fee: number;

  @Column('int', { name: 'FkfTreaterBesMoein', nullable: true })
  fkfTreaterBesMoein: number | null;

  @OneToMany(
    () => SalServiceDetail,
    (salServiceDetail) => salServiceDetail.fkfServiceType,
  )
  salServiceDetails: SalServiceDetail[];

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salServiceTypes)
  @JoinColumn([{ name: 'FkfTreaterBes', referencedColumnName: 'pkfTreater' }])
  fkfTreaterBes: GenTreater;

  @RelationId((salServiceType: SalServiceType) => salServiceType.fkfTreaterBes)
  fkfTreaterBes2: number;
}
