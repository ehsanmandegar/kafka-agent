import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AccSanadTypes } from './acc-sanad-types';

@Index('IX_accSanadTypesGroup', ['codeSanadTypesGroup'], { unique: true })
@Index('IX_accSanadTypesGroup_2', ['sanadTypesGroup'], { unique: true })
@Index('PK_accSanadTypesGroup', ['pkfSanadTypesGroup'], { unique: true })
@Entity('accSanadTypesGroup', { schema: 'dbo' })
export class AccSanadTypesGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSanadTypesGroup' })
  pkfSanadTypesGroup: number;

  @Column('nvarchar', { name: 'sanadTypesGroup', length: 200 })
  sanadTypesGroup: string;

  @Column('nvarchar', { name: 'codeSanadTypesGroup', length: 25 })
  codeSanadTypesGroup: string;

  @OneToMany(
    () => AccSanadTypes,
    (accSanadTypes) => accSanadTypes.fkfSanadTypesGroup,
  )
  accSanadTypes: AccSanadTypes[];
}
