import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AccSanadDetailFloat } from './acc-sanad-detail-float';

@Index('PK_accSendType', ['pkfSendType'], { unique: true })
@Entity('accSendType', { schema: 'dbo' })
export class AccSendType {
  @Column('int', { primary: true, name: 'pkfSendType' })
  pkfSendType: number;

  @Column('nvarchar', { name: 'sendType', length: 100 })
  sendType: string;

  @OneToMany(
    () => AccSanadDetailFloat,
    (accSanadDetailFloat) => accSanadDetailFloat.fkfSendtype,
  )
  accSanadDetailFloats: AccSanadDetailFloat[];
}
