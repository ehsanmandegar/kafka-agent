import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GenTreater } from './gen-treater';

@Index('PK_genCategory', ['pkfCategory'], { unique: true })
@Entity('genCategory', { schema: 'dbo' })
export class GenCategory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCategory' })
  pkfCategory: number;

  @Column('nvarchar', { name: 'category', length: 100 })
  category: string;

  @Column('nvarchar', { name: 'categoryCode', nullable: true, length: 100 })
  categoryCode: string | null;

  @Column('nvarchar', { name: 'categoryEn', length: 100, default: () => "''" })
  categoryEn: string;

  @OneToMany(() => GenTreater, (genTreater) => genTreater.fkfCategory)
  genTreaters: GenTreater[];
}
