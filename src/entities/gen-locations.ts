import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genLocations', ['pkid'], { unique: true })
@Entity('genLocations', { schema: 'dbo' })
export class GenLocations {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PKID' })
  pkid: number;

  @Column('varchar', {
    name: 'fld_Code',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  fldCode: string | null;

  @Column('nvarchar', {
    name: 'fld_FTitle',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldFTitle: string | null;

  @Column('varchar', {
    name: 'fld_LTitle',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldLTitle: string | null;

  @Column('nvarchar', {
    name: 'fld_Desc',
    nullable: true,
    length: 200,
    default: () => "''",
  })
  fldDesc: string | null;

  @Column('int', { name: 'fk_Parent', nullable: true, default: () => '(0)' })
  fkParent: number | null;

  @Column('bit', { name: 'IsActive', nullable: true, default: () => '(1)' })
  isActive: boolean | null;

  @Column('int', { name: 'fkTaxID', nullable: true, default: () => '(103)' })
  fkTaxId: number | null;
}
