import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_basSetting', ['pkfSettingBascule'], { unique: true })
@Entity('basSetting', { schema: 'dbo' })
export class BasSetting {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSettingBascule' })
  pkfSettingBascule: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'fkfbasculePrice', nullable: true })
  fkfbasculePrice: number | null;

  @Column('bit', { name: 'addressNoMandatory', default: () => '(0)' })
  addressNoMandatory: boolean;

  @Column('int', { name: 'tracingRefrence', default: () => '(1)' })
  tracingRefrence: number;

  @Column('bit', { name: 'cameraActive', default: () => '(0)' })
  cameraActive: boolean;

  @Column('nvarchar', { name: 'iPCamera', length: 500, default: () => "''" })
  iPCamera: string;

  @Column('int', { name: 'cameraType', nullable: true })
  cameraType: number | null;

  @Column('nvarchar', { name: 'userName', length: 50, default: () => "''" })
  userName: string;

  @Column('nvarchar', { name: 'passWord', length: 50, default: () => "''" })
  passWord: string;

  @Column('bit', { name: 'cameraActive2', default: () => '(0)' })
  cameraActive2: boolean;

  @Column('nvarchar', { name: 'iPCamera2', length: 500, default: () => "''" })
  iPCamera2: string;

  @Column('int', { name: 'cameraType2', nullable: true })
  cameraType2: number | null;

  @Column('nvarchar', { name: 'userName2', length: 50, default: () => "''" })
  userName2: string;

  @Column('nvarchar', { name: 'passWord2', length: 50, default: () => "''" })
  passWord2: string;

  @Column('int', { name: 'FkfProjectDef', nullable: true })
  fkfProjectDef: number | null;
}
