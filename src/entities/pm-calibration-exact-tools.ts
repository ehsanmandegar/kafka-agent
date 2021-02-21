import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_pmCalibrationExactTools', ['pkfCalibrationExactTools'], {
  unique: true,
})
@Entity('pmCalibrationExactTools', { schema: 'dbo' })
export class PmCalibrationExactTools {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCalibrationExactTools' })
  pkfCalibrationExactTools: number;

  @Column('int', { name: 'FkfActivityRecord' })
  fkfActivityRecord: number;

  @Column('nvarchar', {
    name: 'allowedErrorA',
    length: 100,
    default: () => "''",
  })
  allowedErrorA: string;

  @Column('nvarchar', { name: 'errorA', length: 100, default: () => "''" })
  errorA: string;

  @Column('nvarchar', { name: 'readingA', length: 100, default: () => "''" })
  readingA: string;

  @Column('nvarchar', {
    name: 'standardCompressA',
    length: 100,
    default: () => "''",
  })
  standardCompressA: string;

  @Column('nvarchar', { name: 'memo', length: 100, default: () => "''" })
  memo: string;
}
