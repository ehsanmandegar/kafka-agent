import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_Table_6', ['pkfCou'], { unique: true })
@Entity('salLogBuildKardex', { schema: 'dbo' })
export class SalLogBuildKardex {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCou' })
  pkfCou: number;

  @Column('int', { name: 'FkfGood' })
  fkfGood: number;

  @Column('int', { name: 'FkfProject' })
  fkfProject: number;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;
}
