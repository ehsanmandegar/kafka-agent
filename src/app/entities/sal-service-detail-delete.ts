import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salServiceDetailDelete', ['pkfServiceDetaildel'], { unique: true })
@Entity('salServiceDetailDelete', { schema: 'dbo' })
export class SalServiceDetailDelete {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfServiceDetaildel' })
  pkfServiceDetaildel: number;

  @Column('int', { name: 'FkfService' })
  fkfService: number;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 10 })
  deleteTime: string;

  @Column('nvarchar', { name: 'memo', length: 250 })
  memo: string;
}
