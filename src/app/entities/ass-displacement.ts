import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_PPDisplacement', ['pkid'], { unique: true })
@Entity('ASSDisplacement', { schema: 'dbo' })
export class AssDisplacement {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PKID' })
  pkid: number;

  @Column('int', { name: 'fkfType', nullable: true })
  fkfType: number | null;

  @Column('int', { name: 'fkfSystem', nullable: true })
  fkfSystem: number | null;

  @Column('int', { name: 'fkfMaster', nullable: true })
  fkfMaster: number | null;

  @Column('int', { name: 'fkfLoation', nullable: true })
  fkfLoation: number | null;

  @Column('varchar', {
    name: 'fldFromDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  fldFromDate: string | null;

  @Column('varchar', {
    name: 'fldToDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  fldToDate: string | null;

  @Column('int', { name: 'fkfStatus', nullable: true, default: () => '(1)' })
  fkfStatus: number | null;

  @Column('bit', { name: 'IsActive', nullable: true, default: () => '(1)' })
  isActive: boolean | null;
}
