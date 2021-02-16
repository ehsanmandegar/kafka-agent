import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { AccSanadTypes } from './acc-sanad-types';

@Index('IX_accSetting', ['accYear'], { unique: true })
@Index('PK_accSetting', ['pkfSetting'], { unique: true })
@Entity('accSetting', { schema: 'dbo' })
export class AccSetting {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSetting' })
  pkfSetting: number;

  @Column('tinyint', { name: 'groupDgt', default: () => '1' })
  groupDgt: number;

  @Column('tinyint', { name: 'kolDgt', default: () => '2' })
  kolDgt: number;

  @Column('tinyint', { name: 'moeinDgt', default: () => '3' })
  moeinDgt: number;

  @Column('tinyint', { name: 'tafziliDgt', default: () => '4' })
  tafziliDgt: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkSanadTypes', nullable: true })
  fkSanadTypes: number | null;

  @Column('int', { name: 'FkfSanadTypeBenifit', nullable: true })
  fkfSanadTypeBenifit: number | null;

  @Column('bit', { name: 'markazMandetory', default: () => '(0)' })
  markazMandetory: boolean;

  @Column('bit', { name: 'legal', default: () => '(0)' })
  legal: boolean;

  @Column('bit', { name: 'dateToOld', default: () => '(1)' })
  dateToOld: boolean;

  @Column('bit', { name: 'dateToNext', default: () => '(1)' })
  dateToNext: boolean;

  @Column('nvarchar', { name: 'sanadNoFor13', default: () => "''" })
  sanadNoFor13: string;

  @Column('bit', { name: 'userAcccessTafzili', default: () => '(0)' })
  userAcccessTafzili: boolean;

  @Column('int', { name: 'FkfCurrencyExchange', nullable: true })
  fkfCurrencyExchange: number | null;

  @Column('int', { name: 'FkfCurrencyExchangeMoein', nullable: true })
  fkfCurrencyExchangeMoein: number | null;

  @ManyToOne(() => AccSanadTypes, (accSanadTypes) => accSanadTypes.accSettings)
  @JoinColumn([
    { name: 'FkfSanadTypeClosing', referencedColumnName: 'pkfSanadTypes' },
  ])
  fkfSanadTypeClosing: AccSanadTypes;

  @ManyToOne(() => AccSanadTypes, (accSanadTypes) => accSanadTypes.accSettings2)
  @JoinColumn([
    { name: 'FkfSanadTypeOpening', referencedColumnName: 'pkfSanadTypes' },
  ])
  fkfSanadTypeOpening: AccSanadTypes;

  @RelationId((accSetting: AccSetting) => accSetting.fkfSanadTypeClosing)
  fkfSanadTypeClosing2: number | null;

  @RelationId((accSetting: AccSetting) => accSetting.fkfSanadTypeOpening)
  fkfSanadTypeOpening2: number | null;
}
