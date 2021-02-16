import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CasCheckBatch } from './cas-check-batch';
import { CasGetPay } from './cas-get-pay';
import { CasGetPayDeclaration } from './cas-get-pay-declaration';
import { CasGetPayDelete } from './cas-get-pay-delete';

@Index('PK_casGetPayType', ['pkfGetPayType'], { unique: true })
@Entity('casGetPayType', { schema: 'dbo' })
export class CasGetPayType {
  @Column('int', { primary: true, name: 'pkfGetPayType' })
  pkfGetPayType: number;

  @Column('nvarchar', { name: 'getPayType', length: 100 })
  getPayType: string;

  @OneToMany(
    () => CasCheckBatch,
    (casCheckBatch) => casCheckBatch.fkfGetPayType,
  )
  casCheckBatches: CasCheckBatch[];

  @OneToMany(() => CasGetPay, (casGetPay) => casGetPay.fkfGetPayType2)
  casGetPays: CasGetPay[];

  @OneToMany(
    () => CasGetPayDeclaration,
    (casGetPayDeclaration) => casGetPayDeclaration.fkfGetPayDeclarationType,
  )
  casGetPayDeclarations: CasGetPayDeclaration[];

  @OneToMany(
    () => CasGetPayDelete,
    (casGetPayDelete) => casGetPayDelete.fkfGetPayType,
  )
  casGetPayDeletes: CasGetPayDelete[];
}
