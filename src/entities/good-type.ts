import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_GoodType', ['goodTypeId'], { unique: true })
@Entity('GoodType', { schema: 'dbo' })
export class GoodType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'GoodTypeID' })
  goodTypeId: number;

  @Column('nvarchar', { name: 'GoodTypeTitle', length: 50 })
  goodTypeTitle: string;
}
