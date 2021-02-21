import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_mesLogeMessenger', ['pkfLogeMessenger'], { unique: true })
@Entity('mesLogeMessenger', { schema: 'dbo' })
export class MesLogeMessenger {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfLogeMessenger' })
  pkfLogeMessenger: number;

  @Column('nvarchar', { name: 'logeText', default: () => "''" })
  logeText: string;

  @Column('datetime', {
    name: 'logeDate',
    nullable: true,
    default: () => 'getdate()',
  })
  logeDate: Date | null;
}
