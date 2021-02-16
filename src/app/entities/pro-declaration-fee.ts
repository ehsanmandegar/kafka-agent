import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_proDeclarationFee', ['fkfGoods', 'accYear'], {})
@Index('PK_proDeclarationFee', ['pkfDeclarationFee'], { unique: true })
@Entity('proDeclarationFee', { schema: 'dbo' })
export class ProDeclarationFee {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDeclarationFee' })
  pkfDeclarationFee: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('decimal', {
    name: 'fee',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  fee: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;
}
