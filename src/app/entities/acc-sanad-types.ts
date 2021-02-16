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
import { AccSanadFloat } from './acc-sanad-float';
import { AccSanadTypesGroup } from './acc-sanad-types-group';
import { AccSetting } from './acc-setting';

@Index('IX_accSanadTypes', ['codeSanadTypes'], { unique: true })
@Index('PK_accSanadTypes', ['pkfSanadTypes'], { unique: true })
@Entity('accSanadTypes', { schema: 'dbo' })
export class AccSanadTypes {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSanadTypes' })
  pkfSanadTypes: number;

  @Column('nvarchar', { name: 'sanadTypes', length: 200 })
  sanadTypes: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('nvarchar', {
    name: 'codeSanadTypes',
    length: 200,
    default: () => "''",
  })
  codeSanadTypes: string;

  @OneToMany(
    () => AccSanadFloat,
    (accSanadFloat) => accSanadFloat.fkfSanadTypes,
  )
  accSanadFloats: AccSanadFloat[];

  @ManyToOne(
    () => AccSanadTypesGroup,
    (accSanadTypesGroup) => accSanadTypesGroup.accSanadTypes,
  )
  @JoinColumn([
    { name: 'FkfSanadTypesGroup', referencedColumnName: 'pkfSanadTypesGroup' },
  ])
  fkfSanadTypesGroup: AccSanadTypesGroup;

  @OneToMany(() => AccSetting, (accSetting) => accSetting.fkfSanadTypeClosing)
  accSettings: AccSetting[];

  @OneToMany(() => AccSetting, (accSetting) => accSetting.fkfSanadTypeOpening)
  accSettings2: AccSetting[];

  @RelationId(
    (accSanadTypes: AccSanadTypes) => accSanadTypes.fkfSanadTypesGroup,
  )
  fkfSanadTypesGroup2: number | null;
}
