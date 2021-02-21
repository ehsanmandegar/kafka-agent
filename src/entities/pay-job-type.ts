import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('payJobType', { schema: 'dbo' })
export class PayJobType {
  @PrimaryColumn()
  fakeId: number;

  @Column('int', { name: 'pkfJobType' })
  pkfJobType: number;

  @Column('nvarchar', { name: 'name', length: 50 })
  name: string;
}
