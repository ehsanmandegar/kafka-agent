import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalTrust } from './sal-trust';

@Index('IX_strTrustRelated', ['fkfTrust', 'fkfHd'], { unique: true })
@Index('IX_strTrustRelated_1', ['fkfTrust'], { unique: true })
@Index('PK_strTrustRelated', ['pkfTrustRelated'], { unique: true })
@Entity('strTrustRelated', { schema: 'dbo' })
export class StrTrustRelated {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTrustRelated' })
  pkfTrustRelated: number;

  @Column('int', { name: 'FkfHD' })
  fkfHd: number;

  @Column('int', { name: 'FkfTrust' })
  fkfTrust: number;

  @Column('nvarchar', { name: 'memo', length: 250, default: () => "''" })
  memo: string;

  @OneToOne(() => SalTrust, (salTrust) => salTrust.strTrustRelated)
  @JoinColumn([{ name: 'FkfTrust', referencedColumnName: 'pkfTrust' }])
  fkfTrust2: SalTrust;

  @RelationId((strTrustRelated: StrTrustRelated) => strTrustRelated.fkfTrust2)
  fkfTrust3: number;
}
