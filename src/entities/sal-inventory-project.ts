import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalInventoryCycle } from './sal-inventory-cycle';
import { SalCountingLevel } from './sal-counting-level';

@Index('PK_salInventoryProject', ['pkfInventoryProject'], { unique: true })
@Entity('salInventoryProject', { schema: 'dbo' })
export class SalInventoryProject {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfInventoryProject' })
  pkfInventoryProject: number;

  @Column('int', { name: 'codeInventoryProject' })
  codeInventoryProject: number;

  @Column('nvarchar', { name: 'titleInventoryProject', length: 50 })
  titleInventoryProject: string;

  @Column('bit', { name: 'controlCode' })
  controlCode: boolean;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @OneToMany(
    () => SalInventoryCycle,
    (salInventoryCycle) => salInventoryCycle.fkfInventoryProject,
  )
  salInventoryCycles: SalInventoryCycle[];

  @ManyToOne(
    () => SalCountingLevel,
    (salCountingLevel) => salCountingLevel.salInventoryProjects,
  )
  @JoinColumn([
    { name: 'FkfCountingLevel', referencedColumnName: 'pkfCountingLevel' },
  ])
  fkfCountingLevel: SalCountingLevel;

  @RelationId(
    (salInventoryProject: SalInventoryProject) =>
      salInventoryProject.fkfCountingLevel,
  )
  fkfCountingLevel2: number;
}
