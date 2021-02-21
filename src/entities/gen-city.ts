import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenState } from './gen-state';

@Index('PK_genCity', ['pkfCity'], { unique: true })
@Entity('genCity', { schema: 'dbo' })
export class GenCity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCity' })
  pkfCity: number;

  @Column('nvarchar', { name: 'codeCity', length: 50 })
  codeCity: string;

  @Column('nvarchar', { name: 'titleCity', length: 100 })
  titleCity: string;

  @Column('nvarchar', { name: 'titleCityEN', length: 100, default: () => "''" })
  titleCityEn: string;

  @ManyToOne(() => GenState, (genState) => genState.genCities)
  @JoinColumn([{ name: 'FkfState', referencedColumnName: 'pkfState' }])
  fkfState: GenState;

  @RelationId((genCity: GenCity) => genCity.fkfState)
  fkfState2: number;
}
