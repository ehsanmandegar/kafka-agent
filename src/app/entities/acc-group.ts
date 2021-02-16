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
import { AccKol } from './acc-kol';

@Index('IX_accGroup', ['groupCode', 'accYear'], { unique: true })
@Index('IX_accGroup_1', ['groupName', 'accYear'], { unique: true })
@Index('PK_accGroup', ['pkfGroup'], { unique: true })
@Entity('accGroup', { schema: 'dbo' })
export class AccGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGroup' })
  pkfGroup: number;

  @Column('nvarchar', { name: 'groupCode', length: 4 })
  groupCode: string;

  @Column('nvarchar', { name: 'groupName', length: 200 })
  groupName: string;

  @Column('nvarchar', { name: 'groupDescription', nullable: true, length: 255 })
  groupDescription: string | null;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @ManyToOne(() => AccAccountType, (accAccountType) => accAccountType.accGroups)
  @JoinColumn([
    { name: 'FkfAccountType', referencedColumnName: 'pkfAccountType' },
  ])
  fkfAccountType: AccAccountType;

  @ManyToOne(
    () => AccAccountNatural,
    (accAccountNatural) => accAccountNatural.accGroups,
  )
  @JoinColumn([
    { name: 'FkfAccountNatural', referencedColumnName: 'pkfaccAccountNatural' },
  ])
  fkfAccountNatural: AccAccountNatural;

  @OneToMany(() => AccKol, (accKol) => accKol.fkfGroup2)
  accKols: AccKol[];

  @RelationId((accGroup: AccGroup) => accGroup.fkfAccountType)
  fkfAccountType2: number;

  @RelationId((accGroup: AccGroup) => accGroup.fkfAccountNatural)
  fkfAccountNatural2: number;
}
