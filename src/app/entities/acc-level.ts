import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_accLevel', ['pkfLevel'], { unique: true })
@Entity('accLevel', { schema: 'dbo' })
export class AccLevel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfLevel' })
  pkfLevel: number;

  @Column('nvarchar', { name: 'level', length: 50 })
  level: string;
}
