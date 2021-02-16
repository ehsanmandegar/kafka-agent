import { Column, Entity, Index, OneToMany } from 'typeorm';
import { SalFactorTrust } from './sal-factor-trust';
import { SalTrust } from './sal-trust';
import { SalTrustDelete } from './sal-trust-delete';

@Index('PK_salTrustType', ['pkfTrustType'], { unique: true })
@Entity('salTrustType', { schema: 'dbo' })
export class SalTrustType {
  @Column('int', { primary: true, name: 'pkfTrustType' })
  pkfTrustType: number;

  @Column('nvarchar', { name: 'trustType', length: 100 })
  trustType: string;

  @OneToMany(
    () => SalFactorTrust,
    (salFactorTrust) => salFactorTrust.fkfContractType,
  )
  salFactorTrusts: SalFactorTrust[];

  @OneToMany(() => SalTrust, (salTrust) => salTrust.fkfTrustType2)
  salTrusts: SalTrust[];

  @OneToMany(
    () => SalTrustDelete,
    (salTrustDelete) => salTrustDelete.fkfTrustType,
  )
  salTrustDeletes: SalTrustDelete[];
}
