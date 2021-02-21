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
import { GenCity } from './gen-city';
import { GenCountry } from './gen-country';

@Index('PK_genState', ['pkfState'], { unique: true })
@Entity('genState', { schema: 'dbo' })
export class GenState {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfState' })
  pkfState: number;

  @Column('nvarchar', { name: 'stateCode', length: 50 })
  stateCode: string;

  @Column('nvarchar', { name: 'stateTitle', length: 50 })
  stateTitle: string;

  @Column('nvarchar', { name: 'stateTitleEN', length: 50, default: () => "''" })
  stateTitleEn: string;

  @OneToMany(() => GenCity, (genCity) => genCity.fkfState)
  genCities: GenCity[];

  @ManyToOne(() => GenCountry, (genCountry) => genCountry.genStates)
  @JoinColumn([{ name: 'FkfCountry', referencedColumnName: 'pkfCountry' }])
  fkfCountry: GenCountry;

  @RelationId((genState: GenState) => genState.fkfCountry)
  fkfCountry2: number;
}
