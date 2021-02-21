import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_tblUnit', ['pkfUnit'], { unique: true })
@Entity('pmUnit', { schema: 'dbo' })
export class PmUnit {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfUnit' })
  pkfUnit: number;

  @Column('nvarchar', { name: 'unitName', length: 200 })
  unitName: string;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;
}
