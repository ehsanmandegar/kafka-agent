import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GenTell } from './gen-tell';

@Index('PK_genContactDetail', ['pkfContactDetail'], { unique: true })
@Entity('genContactDetail', { schema: 'dbo' })
export class GenContactDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContactDetail' })
  pkfContactDetail: number;

  @Column('int', { name: 'FkfContact' })
  fkfContact: number;

  @Column('nvarchar', { name: 'name', length: 100 })
  name: string;

  @Column('nvarchar', { name: 'post', length: 100 })
  post: string;

  @Column('nvarchar', { name: 'innerNo', length: 50 })
  innerNo: string;

  @Column('nvarchar', { name: 'memo', length: 255 })
  memo: string;

  @OneToMany(() => GenTell, (genTell) => genTell.fkfContactDetail2)
  genTells: GenTell[];
}
