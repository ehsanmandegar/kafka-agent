import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AccSanadFloat } from './acc-sanad-float';

@Index('PK_accSanadStatus', ['pkfSanadStatus'], { unique: true })
@Entity('accSanadStatus', { schema: 'dbo' })
export class AccSanadStatus {
  @Column('tinyint', { primary: true, name: 'pkfSanadStatus' })
  pkfSanadStatus: number;

  @Column('nvarchar', { name: 'sanadStatus', length: 50 })
  sanadStatus: string;

  @OneToMany(
    () => AccSanadFloat,
    (accSanadFloat) => accSanadFloat.fkfSanadStatus,
  )
  accSanadFloats: AccSanadFloat[];
}
