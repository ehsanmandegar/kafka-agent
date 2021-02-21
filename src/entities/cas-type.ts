import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CasGetPayDeclarationDetail } from './cas-get-pay-declaration-detail';
import { CasGetPayDetail } from './cas-get-pay-detail';
import { CasGetPayDetailDelete } from './cas-get-pay-detail-delete';

@Index('PK_casType', ['pkfType'], { unique: true })
@Entity('casType', { schema: 'dbo' })
export class CasType {
  @Column('int', { primary: true, name: 'pkfType' })
  pkfType: number;

  @Column('nvarchar', { name: 'type', length: 50 })
  type: string;

  @OneToMany(
    () => CasGetPayDeclarationDetail,
    (casGetPayDeclarationDetail) => casGetPayDeclarationDetail.fkfType,
  )
  casGetPayDeclarationDetails: CasGetPayDeclarationDetail[];

  @OneToMany(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.fkfType,
  )
  casGetPayDetails: CasGetPayDetail[];

  @OneToMany(
    () => CasGetPayDetailDelete,
    (casGetPayDetailDelete) => casGetPayDetailDelete.fkfType,
  )
  casGetPayDetailDeletes: CasGetPayDetailDelete[];
}
