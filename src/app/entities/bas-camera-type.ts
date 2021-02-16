import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_basCameraType', ['pkfCameraType'], { unique: true })
@Entity('basCameraType', { schema: 'dbo' })
export class BasCameraType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCameraType' })
  pkfCameraType: number;

  @Column('nvarchar', { name: 'cameraType', length: 50, default: () => "''" })
  cameraType: string;

  @Column('nvarchar', {
    name: 'cameraTypeCode',
    length: 50,
    default: () => "''",
  })
  cameraTypeCode: string;

  @Column('nvarchar', { name: 'memo', default: () => "''" })
  memo: string;
}
