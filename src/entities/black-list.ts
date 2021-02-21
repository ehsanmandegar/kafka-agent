import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_BlackList', ['blackListId'], { unique: true })
@Entity('BlackList', { schema: 'dbo' })
export class BlackList {
  @PrimaryGeneratedColumn({ type: 'int', name: 'BlackListID' })
  blackListId: number;

  @Column('int', { name: 'CustomerID' })
  customerId: number;

  @Column('datetime', { name: 'BlackListStartDate' })
  blackListStartDate: Date;

  @Column('datetime', { name: 'BlackListFinishDate' })
  blackListFinishDate: Date;

  @Column('nvarchar', { name: 'BlackComment', nullable: true })
  blackComment: string | null;
}
