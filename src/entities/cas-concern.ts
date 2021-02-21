import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CasGetPay } from './cas-get-pay';
import { CasGetPayDeclaration } from './cas-get-pay-declaration';

@Index('IX_casConcern', ['concernCode', 'accYear'], { unique: true })
@Index('PK_casConcern', ['pkfConcern'], { unique: true })
@Entity('casConcern', { schema: 'dbo' })
export class CasConcern {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfConcern' })
  pkfConcern: number;

  @Column('nvarchar', { name: 'concernCode', length: 25 })
  concernCode: string;

  @Column('nvarchar', { name: 'concern', length: 150 })
  concern: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('bit', { name: 'active', default: () => '1' })
  active: boolean;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @OneToMany(() => CasGetPay, (casGetPay) => casGetPay.fkfConcern)
  casGetPays: CasGetPay[];

  @OneToMany(
    () => CasGetPayDeclaration,
    (casGetPayDeclaration) => casGetPayDeclaration.fkfConcern,
  )
  casGetPayDeclarations: CasGetPayDeclaration[];
}
