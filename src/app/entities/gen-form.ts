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
import { GenSystem } from './gen-system';
import { GenFormAccess } from './gen-form-access';
import { GenFormGrid } from './gen-form-grid';
import { GenFormGridUser } from './gen-form-grid-user';
import { GenFormPrint } from './gen-form-print';

@Index('IX_genForm', ['formName', 'fkfSystem', 'fkfTypeForm'], { unique: true })
@Index('PK_genForm', ['pkfForm'], { unique: true })
@Entity('genForm', { schema: 'dbo' })
export class GenForm {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfForm' })
  pkfForm: number;

  @Column('nvarchar', { name: 'formName', length: 200 })
  formName: string;

  @Column('int', { name: 'FkfSystem' })
  fkfSystem: number;

  @Column('image', { name: 'layoutFile', nullable: true })
  layoutFile: Buffer | null;

  @Column('int', { name: 'FKFTypeForm', default: () => '(23)' })
  fkfTypeForm: number;

  @Column('char', { name: 'skChar', nullable: true, length: 1 })
  skChar: string | null;

  @Column('int', { name: 'FkfKeyType', nullable: true })
  fkfKeyType: number | null;

  @ManyToOne(() => GenSystem, (genSystem) => genSystem.genForms)
  @JoinColumn([{ name: 'FkfSystem', referencedColumnName: 'pkfSystem' }])
  fkfSystem2: GenSystem;

  @OneToMany(() => GenFormAccess, (genFormAccess) => genFormAccess.fKfForm2)
  genFormAccesses: GenFormAccess[];

  @OneToMany(() => GenFormGrid, (genFormGrid) => genFormGrid.fkfForm)
  genFormGrs: GenFormGrid[];

  @OneToMany(
    () => GenFormGridUser,
    (genFormGridUser) => genFormGridUser.fkfForm,
  )
  genFormGridUsers: GenFormGridUser[];

  @OneToMany(() => GenFormPrint, (genFormPrint) => genFormPrint.fkfForm2)
  genFormPrints: GenFormPrint[];

  @RelationId((genForm: GenForm) => genForm.fkfSystem2)
  fkfSystem3: number;
}
