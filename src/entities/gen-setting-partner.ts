import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genSettingPartner', ['pkfSettingPartner'], { unique: true })
@Entity('genSettingPartner', { schema: 'dbo' })
export class GenSettingPartner {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSettingPartner' })
  pkfSettingPartner: number;

  @Column('nvarchar', { name: 'voteDate', length: 10 })
  voteDate: string;

  @Column('nvarchar', { name: 'voteRound', length: 50 })
  voteRound: string;

  @Column('bit', { name: 'printStuff' })
  printStuff: boolean;

  @Column('bit', { name: 'printInspector' })
  printInspector: boolean;

  @Column('nvarchar', { name: 'voteType', nullable: true, length: 100 })
  voteType: string | null;
}
