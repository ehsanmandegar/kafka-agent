import { Column, Entity } from 'typeorm';

@Entity('payJobType', { schema: 'dbo' })
export class PayJobType {
  @Column('int', { name: 'pkfJobType' })
  pkfJobType: number;

  @Column('nvarchar', { name: 'name', length: 50 })
  name: string;
}
