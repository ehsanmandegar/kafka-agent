import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_pmEquipmentAttachment', ['pkfFile'], { unique: true })
@Entity('pmEquipmentAttachment', { schema: 'dbo' })
export class PmEquipmentAttachment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFile' })
  pkfFile: number;

  @Column('int', { name: 'FkfEquipment' })
  fkfEquipment: number;

  @Column('image', { name: 'attachmentFile' })
  attachmentFile: Buffer;

  @Column('nvarchar', { name: 'fileName', length: 255 })
  fileName: string;

  @Column('nvarchar', { name: 'description', length: 255 })
  description: string;
}
