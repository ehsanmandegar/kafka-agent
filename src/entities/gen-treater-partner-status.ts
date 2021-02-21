import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genTreaterPartnerStatus', ['pkfTreaterPartnerStatus'], {
  unique: true,
})
@Entity('genTreaterPartnerStatus', { schema: 'dbo' })
export class GenTreaterPartnerStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTreaterPartnerStatus' })
  pkfTreaterPartnerStatus: number;

  @Column('nvarchar', { name: 'treaterPartnerStatus', length: 50 })
  treaterPartnerStatus: string;
}
