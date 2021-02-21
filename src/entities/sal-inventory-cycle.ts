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
import { SalInventoryProject } from './sal-inventory-project';
import { SalStore } from './sal-store';
import { GenTreater } from './gen-treater';
import { SalTag } from './sal-tag';

@Index('IX_salInventoryCycle', ['fkfStore', 'accYear'], { unique: true })
@Index('PK_salInventoryCycle', ['pkfInventoryCycle'], { unique: true })
@Entity('salInventoryCycle', { schema: 'dbo' })
export class SalInventoryCycle {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfInventoryCycle' })
  pkfInventoryCycle: number;

  @Column('nvarchar', { name: 'inventoryCycleTitle', length: 150 })
  inventoryCycleTitle: string;

  @Column('nvarchar', { name: 'startDate', length: 10 })
  startDate: string;

  @Column('nvarchar', { name: 'endDate', length: 10 })
  endDate: string;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;

  @Column('bit', { name: 'goodWithOValue' })
  goodWithOValue: boolean;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @ManyToOne(
    () => SalInventoryProject,
    (salInventoryProject) => salInventoryProject.salInventoryCycles,
  )
  @JoinColumn([
    {
      name: 'FkfInventoryProject',
      referencedColumnName: 'pkfInventoryProject',
    },
  ])
  fkfInventoryProject: SalInventoryProject;

  @ManyToOne(() => SalStore, (salStore) => salStore.salInventoryCycles)
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore2: SalStore;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salInventoryCycles)
  @JoinColumn([{ name: 'FkfOperator', referencedColumnName: 'pkfTreater' }])
  fkfOperator: GenTreater;

  @OneToMany(() => SalTag, (salTag) => salTag.fkfproject)
  salTags: SalTag[];

  @RelationId(
    (salInventoryCycle: SalInventoryCycle) =>
      salInventoryCycle.fkfInventoryProject,
  )
  fkfInventoryProject2: number;

  @RelationId(
    (salInventoryCycle: SalInventoryCycle) => salInventoryCycle.fkfStore2,
  )
  fkfStore3: number;

  @RelationId(
    (salInventoryCycle: SalInventoryCycle) => salInventoryCycle.fkfOperator,
  )
  fkfOperator2: number;
}
