import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_casBenefitType', ['pkfBenefitType'], { unique: true })
@Entity('casBenefitType', { schema: 'dbo' })
export class CasBenefitType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfBenefitType' })
  pkfBenefitType: number;

  @Column('nvarchar', { name: 'benefitType', length: 50, default: () => "''" })
  benefitType: string;

  @Column('bit', { name: 'isActive', default: () => '(1)' })
  isActive: boolean;
}
