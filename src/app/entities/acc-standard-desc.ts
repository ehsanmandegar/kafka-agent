import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_accStandardDesc', ['pkfStandardDesc'], { unique: true })
@Entity('accStandardDesc', { schema: 'dbo' })
export class AccStandardDesc {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStandardDesc' })
  pkfStandardDesc: number;

  @Column('nvarchar', { name: 'standardDesc', length: 255 })
  standardDesc: string;

  @Column('int', { name: 'accYear' })
  accYear: number;
}
