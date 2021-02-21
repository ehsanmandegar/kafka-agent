import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalInventoryProject } from './sal-inventory-project';

@Index('PK_salCountingLevel', ['pkfCountingLevel'], { unique: true })
@Entity('salCountingLevel', { schema: 'dbo' })
export class SalCountingLevel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCountingLevel' })
  pkfCountingLevel: number;

  @Column('nvarchar', { name: 'countingLevel', length: 100 })
  countingLevel: string;

  @OneToMany(
    () => SalInventoryProject,
    (salInventoryProject) => salInventoryProject.fkfCountingLevel,
  )
  salInventoryProjects: SalInventoryProject[];
}
