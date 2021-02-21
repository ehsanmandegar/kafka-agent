import { Column, Entity, Index, OneToMany } from 'typeorm';
import { GenForm } from './gen-form';

@Index('PK_genSystem', ['pkfSystem'], { unique: true })
@Entity('genSystem', { schema: 'dbo' })
export class GenSystem {
  @Column('int', { primary: true, name: 'pkfSystem' })
  pkfSystem: number;

  @Column('nvarchar', { name: 'system', length: 50 })
  system: string;

  @Column('bit', { name: 'IsActive', nullable: true, default: () => '(1)' })
  isActive: boolean | null;

  @Column('int', { name: 'fkfParent', nullable: true, default: () => '(0)' })
  fkfParent: number | null;

  @OneToMany(() => GenForm, (genForm) => genForm.fkfSystem2)
  genForms: GenForm[];
}
