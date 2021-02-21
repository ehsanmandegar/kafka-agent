import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GenRelationUserControl } from './gen-relation-user-control';

@Index('PK_genControl', ['pkfGenControl'], { unique: true })
@Index('UQ__genContr__61787229430D0951', ['serial'], { unique: true })
@Entity('genControl', { schema: 'dbo' })
export class GenControl {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGenControl' })
  pkfGenControl: number;

  @Column('int', { name: 'serial', unique: true })
  serial: number;

  @Column('nvarchar', { name: 'date', length: 10, default: () => "''" })
  date: string;

  @Column('nvarchar', { name: 'type', length: 255, default: () => "''" })
  type: string;

  @Column('nvarchar', { name: 'subSystem', length: 255, default: () => "''" })
  subSystem: string;

  @Column('nvarchar', { name: 'version', length: 255, default: () => "''" })
  version: string;

  @Column('nvarchar', { name: 'description', default: () => "''" })
  description: string;

  @OneToMany(
    () => GenRelationUserControl,
    (genRelationUserControl) => genRelationUserControl.fkfControl,
  )
  genRelationUserControls: GenRelationUserControl[];
}
