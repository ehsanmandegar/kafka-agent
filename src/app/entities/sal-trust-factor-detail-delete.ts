import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salTrustFactorDetailDelete', ['pkfTrustFactorDetail'], {
  unique: true,
})
@Entity('salTrustFactorDetailDelete', { schema: 'dbo' })
export class SalTrustFactorDetailDelete {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTrustFactorDetail' })
  pkfTrustFactorDetail: number;

  @Column('nvarchar', { name: 'FkfFactor', nullable: true, length: 255 })
  fkfFactor: string | null;

  @Column('bigint', { name: 'price', nullable: true })
  price: string | null;

  @Column('int', { name: 'FkfTrust', nullable: true })
  fkfTrust: number | null;

  @Column('int', { name: 'FkfTreater', nullable: true })
  fkfTreater: number | null;

  @Column('nvarchar', { name: 'deleteUser', nullable: true, length: 255 })
  deleteUser: string | null;

  @Column('nvarchar', { name: 'deleteDate', nullable: true, length: 10 })
  deleteDate: string | null;

  @Column('nvarchar', { name: 'deleteTime', nullable: true, length: 5 })
  deleteTime: string | null;

  @Column('nvarchar', { name: 'memo', nullable: true, length: 255 })
  memo: string | null;
}
