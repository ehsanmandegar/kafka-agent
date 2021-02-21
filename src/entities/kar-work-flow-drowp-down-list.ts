import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_karWorkFlowDrowpDownList', ['pkfWorkFlowDrowpDownList'], {
  unique: true,
})
@Entity('karWorkFlowDrowpDownList', { schema: 'dbo' })
export class KarWorkFlowDrowpDownList {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWorkFlowDrowpDownList' })
  pkfWorkFlowDrowpDownList: number;

  @Column('int', { name: 'FkfWorkFlowDrowpDown', nullable: true })
  fkfWorkFlowDrowpDown: number | null;

  @Column('int', { name: 'comboType', nullable: true })
  comboType: number | null;

  @Column('nvarchar', { name: 'DataViewName', length: 50, default: () => "''" })
  dataViewName: string;

  @Column('nvarchar', {
    name: 'displayMember',
    length: 50,
    default: () => "''",
  })
  displayMember: string;

  @Column('nvarchar', { name: 'valueMember', length: 50, default: () => "''" })
  valueMember: string;

  @Column('nvarchar', { name: 'displayCode', length: 50, default: () => "''" })
  displayCode: string;

  @Column('nvarchar', {
    name: 'selectedValue',
    length: 50,
    default: () => "''",
  })
  selectedValue: string;

  @Column('nvarchar', { name: 'strWhere', default: () => "''" })
  strWhere: string;
}
