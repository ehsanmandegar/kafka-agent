import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GenEmployee } from './gen-employee';

@Index('PK_genResponsibility', ['pkfResponsibility'], { unique: true })
@Entity('genResponsibility', { schema: 'dbo' })
export class GenResponsibility {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfResponsibility' })
  pkfResponsibility: number;

  @Column('nvarchar', { name: 'responsibility', length: 200 })
  responsibility: string;

  @OneToMany(() => GenEmployee, (genEmployee) => genEmployee.fkfResponsibility)
  genEmployees: GenEmployee[];
}
