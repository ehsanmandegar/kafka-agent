import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_Part', ['partId'], { unique: true })
@Entity('genPart', { schema: 'dbo' })
export class GenPart {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PartID' })
  partId: number;

  @Column('nvarchar', { name: 'PartTitle', length: 50 })
  partTitle: string;
}
