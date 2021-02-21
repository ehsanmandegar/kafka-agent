import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GenTell } from './gen-tell';

@Index('PK_genTellType', ['pkfTellType'], { unique: true })
@Entity('genTellType', { schema: 'dbo' })
export class GenTellType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTellType' })
  pkfTellType: number;

  @Column('nvarchar', { name: 'tellType', length: 50 })
  tellType: string;

  @OneToMany(() => GenTell, (genTell) => genTell.fkfTellType)
  genTells: GenTell[];
}
