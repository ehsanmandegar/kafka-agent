import { Column, Entity, Index, OneToMany } from 'typeorm';
import { SalTransferDetail } from './sal-transfer-detail';

@Index('PK_salContractDetailStatus', ['pkfStatus'], { unique: true })
@Entity('salContractDetailStatus', { schema: 'dbo' })
export class SalContractDetailStatus {
  @Column('int', { primary: true, name: 'pkfStatus' })
  pkfStatus: number;

  @Column('nvarchar', { name: 'status', length: 50 })
  status: string;

  @OneToMany(
    () => SalTransferDetail,
    (salTransferDetail) => salTransferDetail.fkfDetailStatusStart,
  )
  salTransferDetails: SalTransferDetail[];

  @OneToMany(
    () => SalTransferDetail,
    (salTransferDetail) => salTransferDetail.fkfDetailStatusEnd,
  )
  salTransferDetails2: SalTransferDetail[];
}
