import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_payResponsibility', ['pkfResponsibility'], { unique: true })
@Entity('payResponsibility', { schema: 'dbo' })
export class PayResponsibility {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfResponsibility' })
  pkfResponsibility: number;

  @Column('nvarchar', { name: 'responsibility', length: 200 })
  responsibility: string;
}
