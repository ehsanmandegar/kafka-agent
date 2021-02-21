import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasWeight } from './bas-weight';
import { GenState } from './gen-state';

@Index('PK_genCountry', ['pkfCountry'], { unique: true })
@Entity('genCountry', { schema: 'dbo' })
export class GenCountry {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCountry' })
  pkfCountry: number;

  @Column('nvarchar', { name: 'codeCountry', length: 50 })
  codeCountry: string;

  @Column('nvarchar', { name: 'titleCountry', length: 50 })
  titleCountry: string;

  @Column('nvarchar', {
    name: 'titleCountryEN',
    length: 50,
    default: () => "''",
  })
  titleCountryEn: string;

  @OneToMany(() => BasWeight, (basWeight) => basWeight.fkfPlaqueCountry)
  basWeights: BasWeight[];

  @OneToMany(() => GenState, (genState) => genState.fkfCountry)
  genStates: GenState[];
}
