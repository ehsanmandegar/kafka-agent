import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salCustoms', ['pkfCustoms'], { unique: true })
@Entity('salCustoms', { schema: 'dbo' })
export class SalCustoms {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCustoms' })
  pkfCustoms: number;

  @Column('nvarchar', { name: 'codeCustoms', length: 50 })
  codeCustoms: string;

  @Column('nvarchar', { name: 'customs', length: 50 })
  customs: string;

  @Column('nvarchar', { name: 'memo', length: 500 })
  memo: string;
}
