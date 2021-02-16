import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StrCut } from './str-cut';

@Index('PK_strSheetType', ['pkfSheetType'], { unique: true })
@Entity('strSheetType', { schema: 'dbo' })
export class StrSheetType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSheetType' })
  pkfSheetType: number;

  @Column('nvarchar', { name: 'sheetType', length: 50 })
  sheetType: string;

  @OneToMany(() => StrCut, (strCut) => strCut.fkfSheetType)
  strCuts: StrCut[];
}
