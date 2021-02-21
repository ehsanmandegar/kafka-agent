import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AccSanadFloat } from './acc-sanad-float';

@Index('PK_accSendFrom', ['pkfSendFrom'], { unique: true })
@Entity('accSendFrom', { schema: 'dbo' })
export class AccSendFrom {
  @Column('int', { primary: true, name: 'pkfSendFrom' })
  pkfSendFrom: number;

  @Column('nvarchar', { name: 'sendFrom', length: 200 })
  sendFrom: string;

  @OneToMany(() => AccSanadFloat, (accSanadFloat) => accSanadFloat.fkfSendFrom)
  accSanadFloats: AccSanadFloat[];
}
