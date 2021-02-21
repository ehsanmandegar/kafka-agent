import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genProjectType', ['pkfProjectType'], { unique: true })
@Entity('genProjectType', { schema: 'dbo' })
export class GenProjectType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProjectType' })
  pkfProjectType: number;

  @Column('nvarchar', { name: 'projectType', length: 255 })
  projectType: string;

  @Column('bigint', { name: 'performaPrice', default: () => '(0)' })
  performaPrice: string;
}
