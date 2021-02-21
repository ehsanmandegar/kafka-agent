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
import { AccAccountType } from './acc-account-type';
import { AccAccountNatural } from './acc-account-natural';
import { AccGroup } from './acc-group';
import { AccMoein } from './acc-moein';

@Index('IX_accKol', ['kolCode', 'accYear', 'fkfGroup'], { unique: true })
@Index('IX_accKol_1', ['kolName', 'accYear', 'fkfGroup'], { unique: true })
@Index('PK_accKol', ['pkfKol'], { unique: true })
@Entity('accKol', { schema: 'dbo' })
export class AccKol {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfKol' })
  pkfKol: number;

  @Column('nvarchar', { name: 'kolCode', length: 8 })
  kolCode: string;

  @Column('nvarchar', { name: 'kolName', length: 200 })
  kolName: string;

  @Column('nvarchar', { name: 'kolDescription', nullable: true, length: 255 })
  kolDescription: string | null;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkfGroup' })
  fkfGroup: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('bit', { name: 'nonBusiness', default: () => '(0)' })
  nonBusiness: boolean;

  @ManyToOne(() => AccAccountType, (accAccountType) => accAccountType.accKols)
  @JoinColumn([
    { name: 'FkfAccountType', referencedColumnName: 'pkfAccountType' },
  ])
  fkfAccountType: AccAccountType;

  @ManyToOne(
    () => AccAccountNatural,
    (accAccountNatural) => accAccountNatural.accKols,
  )
  @JoinColumn([
    { name: 'FkfAccountNatural', referencedColumnName: 'pkfaccAccountNatural' },
  ])
  fkfAccountNatural: AccAccountNatural;

  @ManyToOne(() => AccGroup, (accGroup) => accGroup.accKols)
  @JoinColumn([{ name: 'FkfGroup', referencedColumnName: 'pkfGroup' }])
  fkfGroup2: AccGroup;

  @OneToMany(() => AccMoein, (accMoein) => accMoein.fkfKol2)
  accMoeins: AccMoein[];

  @RelationId((accKol: AccKol) => accKol.fkfAccountType)
  fkfAccountType2: number;

  @RelationId((accKol: AccKol) => accKol.fkfAccountNatural)
  fkfAccountNatural2: number;

  @RelationId((accKol: AccKol) => accKol.fkfGroup2)
  fkfGroup3: number;
}
