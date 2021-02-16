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
import { PmActivity } from './pm-activity';
import { PmSection } from './pm-section';
import { PmEquipmentGroup } from './pm-equipment-group';
import { PmProvideType } from './pm-provide-type';
import { PmFllowingSegment } from './pm-fllowing-segment';
import { PmRequestRepairs } from './pm-request-repairs';

@Index('PK_tblEquipment', ['pkfEquipment'], { unique: true })
@Entity('pmEquipment', { schema: 'dbo' })
export class PmEquipment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfEquipment' })
  pkfEquipment: number;

  @Column('nvarchar', { name: 'equipmentCode', length: 25 })
  equipmentCode: string;

  @Column('nvarchar', { name: 'equipment', length: 100 })
  equipment: string;

  @Column('nvarchar', {
    name: 'mapAddressCode',
    length: 25,
    default: () => "''",
  })
  mapAddressCode: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('nvarchar', {
    name: 'supplyComment',
    length: 500,
    default: () => "''",
  })
  supplyComment: string;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @Column('nvarchar', {
    name: 'installationPlace',
    length: 255,
    default: () => "''",
  })
  installationPlace: string;

  @Column('nvarchar', {
    name: 'establishmentCode',
    length: 200,
    default: () => "''",
  })
  establishmentCode: string;

  @Column('nvarchar', { name: 'serialNo', length: 200, default: () => "''" })
  serialNo: string;

  @Column('nvarchar', { name: 'series', length: 200, default: () => "''" })
  series: string;

  @Column('nvarchar', { name: 'model', length: 200, default: () => "''" })
  model: string;

  @Column('nvarchar', { name: 'capacityN', length: 200, default: () => "''" })
  capacityN: string;

  @Column('nvarchar', { name: 'capacityW', length: 200, default: () => "''" })
  capacityW: string;

  @Column('nvarchar', {
    name: 'builderCountry',
    length: 200,
    default: () => "''",
  })
  builderCountry: string;

  @Column('nvarchar', { name: 'weight', length: 200, default: () => "''" })
  weight: string;

  @Column('nvarchar', {
    name: 'installationDate',
    length: 200,
    default: () => "''",
  })
  installationDate: string;

  @Column('nvarchar', {
    name: 'builderCompany',
    length: 200,
    default: () => "''",
  })
  builderCompany: string;

  @Column('nvarchar', { name: 'dimension', length: 200, default: () => "''" })
  dimension: string;

  @Column('nvarchar', { name: 'useDate', length: 200, default: () => "''" })
  useDate: string;

  @Column('nvarchar', { name: 'buildYear', length: 200, default: () => "''" })
  buildYear: string;

  @Column('nvarchar', {
    name: 'establishmentPlace',
    length: 200,
    default: () => "''",
  })
  establishmentPlace: string;

  @Column('nvarchar', { name: 'foundation', length: 200, default: () => "''" })
  foundation: string;

  @Column('nvarchar', {
    name: 'builderCompanyAddress',
    length: 255,
    default: () => "''",
  })
  builderCompanyAddress: string;

  @Column('nvarchar', {
    name: 'agencyAddress',
    length: 255,
    default: () => "''",
  })
  agencyAddress: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('bit', { name: 'ac', default: () => '(0)' })
  ac: boolean;

  @Column('bit', { name: 'dc', default: () => '(0)' })
  dc: boolean;

  @Column('nvarchar', { name: 'voltage', length: 200, default: () => "''" })
  voltage: string;

  @Column('nvarchar', { name: 'phaseNumber', length: 200, default: () => "''" })
  phaseNumber: string;

  @Column('nvarchar', { name: 'useCo2', length: 200, default: () => "''" })
  useCo2: string;

  @Column('nvarchar', { name: 'useSteam', length: 200, default: () => "''" })
  useSteam: string;

  @Column('nvarchar', { name: 'useFuel', length: 200, default: () => "''" })
  useFuel: string;

  @Column('nvarchar', {
    name: 'useCompressAir',
    length: 200,
    default: () => "''",
  })
  useCompressAir: string;

  @Column('nvarchar', { name: 'useWater', length: 200, default: () => "''" })
  useWater: string;

  @Column('nvarchar', { name: 'pushCo2', length: 200, default: () => "''" })
  pushCo2: string;

  @Column('nvarchar', { name: 'pushSteam', length: 200, default: () => "''" })
  pushSteam: string;

  @Column('nvarchar', { name: 'pushFuel', length: 200, default: () => "''" })
  pushFuel: string;

  @Column('nvarchar', {
    name: 'pushCompressAir',
    length: 200,
    default: () => "''",
  })
  pushCompressAir: string;

  @Column('nvarchar', { name: 'pushWater', length: 200, default: () => "''" })
  pushWater: string;

  @Column('text', { name: 'descriptionEqu', default: () => "''" })
  descriptionEqu: string;

  @Column('text', { name: 'useSmooth', default: () => "''" })
  useSmooth: string;

  @Column('text', { name: 'usePieces', default: () => "''" })
  usePieces: string;

  @Column('text', { name: 'equipmentPieces', default: () => "''" })
  equipmentPieces: string;

  @Column('text', { name: 'mechanic', default: () => "''" })
  mechanic: string;

  @Column('text', { name: 'electrical', default: () => "''" })
  electrical: string;

  @Column('text', { name: 'enterprise', default: () => "''" })
  enterprise: string;

  @Column('nvarchar', { name: 'expireDate', length: 50, default: () => "''" })
  expireDate: string;

  @Column('nvarchar', {
    name: 'nominalprecision',
    length: 50,
    default: () => "''",
  })
  nominalprecision: string;

  @Column('nvarchar', {
    name: 'calibrationCode',
    length: 50,
    default: () => "''",
  })
  calibrationCode: string;

  @Column('nvarchar', {
    name: 'calibrationDate',
    length: 50,
    default: () => "''",
  })
  calibrationDate: string;

  @Column('nvarchar', { name: 'superseded', length: 50, default: () => "''" })
  superseded: string;

  @Column('nvarchar', {
    name: 'standardRefrence',
    length: 255,
    default: () => "''",
  })
  standardRefrence: string;

  @Column('nvarchar', {
    name: 'circumstance',
    length: 255,
    default: () => "''",
  })
  circumstance: string;

  @Column('nvarchar', {
    name: 'calibrationMethod',
    length: 255,
    default: () => "''",
  })
  calibrationMethod: string;

  @Column('nvarchar', { name: 'issuanceDate', length: 50, default: () => "''" })
  issuanceDate: string;

  @Column('nvarchar', { name: 'useMeasure', length: 50, default: () => "''" })
  useMeasure: string;

  @Column('nvarchar', { name: 'motorType', length: 100, default: () => "''" })
  motorType: string;

  @Column('nvarchar', { name: 'motorTip', length: 100, default: () => "''" })
  motorTip: string;

  @Column('nvarchar', { name: 'powerN', length: 50, default: () => "''" })
  powerN: string;

  @Column('nvarchar', { name: 'flowN', length: 50, default: () => "''" })
  flowN: string;

  @Column('nvarchar', { name: 'revolution', length: 50, default: () => "''" })
  revolution: string;

  @Column('nvarchar', { name: 'power', length: 50, default: () => "''" })
  power: string;

  @Column('nvarchar', { name: 'factorC', length: 50, default: () => "''" })
  factorC: string;

  @Column('nvarchar', { name: 'wadN', length: 50, default: () => "''" })
  wadN: string;

  @Column('nvarchar', {
    name: 'ballbearingNoF',
    length: 50,
    default: () => "''",
  })
  ballbearingNoF: string;

  @Column('nvarchar', {
    name: 'ballbearingNoB',
    length: 50,
    default: () => "''",
  })
  ballbearingNoB: string;

  @Column('nvarchar', { name: 'protection', length: 255, default: () => "''" })
  protection: string;

  @Column('nvarchar', { name: 'supplyPlace', length: 255, default: () => "''" })
  supplyPlace: string;

  @Column('nvarchar', { name: 'rangeChange', length: 50, default: () => "''" })
  rangeChange: string;

  @Column('nvarchar', { name: 'userE', length: 255, default: () => "''" })
  userE: string;

  @Column('nvarchar', { name: 'rangeUser', length: 50, default: () => "''" })
  rangeUser: string;

  @Column('nvarchar', { name: 'expireTime', length: 50, default: () => "''" })
  expireTime: string;

  @Column('nvarchar', { name: 'errorAllowed', length: 50, default: () => "''" })
  errorAllowed: string;

  @Column('nvarchar', {
    name: 'calibrationCompany',
    length: 255,
    default: () => "''",
  })
  calibrationCompany: string;

  @Column('nvarchar', {
    name: 'connectionType',
    length: 255,
    default: () => "''",
  })
  connectionType: string;

  @OneToMany(() => PmActivity, (pmActivity) => pmActivity.fkfEquipment)
  pmActivities: PmActivity[];

  @ManyToOne(() => PmSection, (pmSection) => pmSection.pmEquipments)
  @JoinColumn([{ name: 'FKfSection', referencedColumnName: 'pkfSection' }])
  fKfSection: PmSection;

  @ManyToOne(
    () => PmEquipmentGroup,
    (pmEquipmentGroup) => pmEquipmentGroup.pmEquipments,
  )
  @JoinColumn([
    { name: 'FkfEquipmentGroup', referencedColumnName: 'pkfEquipmentGroup' },
  ])
  fkfEquipmentGroup: PmEquipmentGroup;

  @ManyToOne(() => PmEquipment, (pmEquipment) => pmEquipment.pmEquipments)
  @JoinColumn([{ name: 'FkfEquipment', referencedColumnName: 'pkfEquipment' }])
  fkfEquipment: PmEquipment;

  @OneToMany(() => PmEquipment, (pmEquipment) => pmEquipment.fkfEquipment)
  pmEquipments: PmEquipment[];

  @ManyToOne(() => PmProvideType, (pmProvideType) => pmProvideType.pmEquipments)
  @JoinColumn([
    { name: 'FkfProvideType', referencedColumnName: 'pkfProvideType' },
  ])
  fkfProvideType: PmProvideType;

  @ManyToOne(
    () => PmFllowingSegment,
    (pmFllowingSegment) => pmFllowingSegment.pmEquipments,
  )
  @JoinColumn([
    { name: 'FkfFllowingSegment', referencedColumnName: 'pkfFllowingSegment' },
  ])
  fkfFllowingSegment: PmFllowingSegment;

  @OneToMany(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.fkfEquipment,
  )
  pmRequestRepairs: PmRequestRepairs[];

  @RelationId((pmEquipment: PmEquipment) => pmEquipment.fKfSection)
  fKfSection2: number;

  @RelationId((pmEquipment: PmEquipment) => pmEquipment.fkfEquipmentGroup)
  fkfEquipmentGroup2: number;

  @RelationId((pmEquipment: PmEquipment) => pmEquipment.fkfEquipment)
  fkfEquipment2: number | null;

  @RelationId((pmEquipment: PmEquipment) => pmEquipment.fkfProvideType)
  fkfProvideType2: number | null;

  @RelationId((pmEquipment: PmEquipment) => pmEquipment.fkfFllowingSegment)
  fkfFllowingSegment2: number | null;
}
