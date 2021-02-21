import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_casActionType', ['pkfActionType'], { unique: true })
@Entity('casActionType', { schema: 'dbo' })
export class CasActionType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActionType' })
  pkfActionType: number;

  @Column('nvarchar', { name: 'actionType', length: 100 })
  actionType: string;
}
