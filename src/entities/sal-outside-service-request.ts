import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salOutsideServiceRequest', ['pkfOutsideServiceRequest'], {
  unique: true,
})
@Entity('salOutsideServiceRequest', { schema: 'dbo' })
export class SalOutsideServiceRequest {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfOutsideServiceRequest' })
  pkfOutsideServiceRequest: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('nvarchar', { name: 'requestDate', length: 10 })
  requestDate: string;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'createTime', length: 50 })
  createTime: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', nullable: true, length: 10 })
  editDate: string | null;

  @Column('nvarchar', { name: 'memo', length: 500 })
  memo: string;

  @Column('nvarchar', { name: 'sendDate', length: 10 })
  sendDate: string;

  @Column('nvarchar', { name: 'returnDateForcast', length: 10 })
  returnDateForcast: string;

  @Column('nvarchar', { name: 'returnDate', length: 10 })
  returnDate: string;

  @Column('int', { name: 'FkfAttemptTraeter' })
  fkfAttemptTraeter: number;

  @Column('int', { name: 'FkfResponsible' })
  fkfResponsible: number;

  @Column('int', { name: 'accYear' })
  accYear: number;
}
