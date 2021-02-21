import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_payPlace', ['pkfPlace'], { unique: true })
@Entity('payPlace', { schema: 'dbo' })
export class PayPlace {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPlace' })
  pkfPlace: number;

  @Column('nvarchar', { name: 'placeCode', nullable: true, length: 50 })
  placeCode: string | null;

  @Column('nvarchar', { name: 'placeName', nullable: true, length: 50 })
  placeName: string | null;

  @Column('int', { name: 'fk_Parent', nullable: true, default: () => '(0)' })
  fkParent: number | null;

  @Column('int', { name: 'fkfTaxStatus', nullable: true, default: () => '(1)' })
  fkfTaxStatus: number | null;
}
