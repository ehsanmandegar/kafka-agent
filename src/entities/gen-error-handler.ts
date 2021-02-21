import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genErrorHandler', ['pkfErrorHandler'], { unique: true })
@Entity('genErrorHandler', { schema: 'dbo' })
export class GenErrorHandler {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfErrorHandler' })
  pkfErrorHandler: number;

  @Column('nvarchar', { name: 'message', length: 2000 })
  message: string;

  @Column('nvarchar', {
    name: 'customMessage',
    length: 2000,
    default: () => "''",
  })
  customMessage: string;

  @Column('nvarchar', { name: 'messageDate', length: 10 })
  messageDate: string;

  @Column('int', { name: 'messageCount' })
  messageCount: number;

  @Column('nvarchar', { name: 'stackTrace', default: () => "''" })
  stackTrace: string;
}
