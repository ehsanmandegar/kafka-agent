import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CasBankConflictDetail } from './cas-bank-conflict-detail';

@Index('PK_casConflictPlace', ['pkfConflictPlace'], { unique: true })
@Entity('casConflictPlace', { schema: 'dbo' })
export class CasConflictPlace {
  @Column('int', { primary: true, name: 'pkfConflictPlace' })
  pkfConflictPlace: number;

  @Column('nvarchar', { name: 'conflictPlace', length: 100 })
  conflictPlace: string;

  @OneToMany(
    () => CasBankConflictDetail,
    (casBankConflictDetail) => casBankConflictDetail.fkfConflictPlace,
  )
  casBankConflictDetails: CasBankConflictDetail[];
}
