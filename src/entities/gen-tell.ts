import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenContact } from './gen-contact';
import { GenTellType } from './gen-tell-type';
import { GenContactDetail } from './gen-contact-detail';

@Index('IX_genTell', ['fkfContact'], {})
@Index('IX_genTell_1', ['fkfContactDetail'], {})
@Index('PK_genTell', ['pkfTell'], { unique: true })
@Entity('genTell', { schema: 'dbo' })
export class GenTell {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTell' })
  pkfTell: number;

  @Column('int', { name: 'FkfContact' })
  fkfContact: number;

  @Column('nvarchar', { name: 'tellTypeDesc', length: 100 })
  tellTypeDesc: string;

  @Column('nvarchar', { name: 'memo', length: 200 })
  memo: string;

  @Column('int', { name: 'FkfContactDetail', nullable: true })
  fkfContactDetail: number | null;

  @Column('bit', { name: 'defTel', default: () => '(0)' })
  defTel: boolean;

  @ManyToOne(() => GenContact, (genContact) => genContact.genTells, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfContact', referencedColumnName: 'pkfContact' }])
  fkfContact2: GenContact;

  @ManyToOne(() => GenTellType, (genTellType) => genTellType.genTells)
  @JoinColumn([{ name: 'FkfTellType', referencedColumnName: 'pkfTellType' }])
  fkfTellType: GenTellType;

  @ManyToOne(
    () => GenContactDetail,
    (genContactDetail) => genContactDetail.genTells,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfContactDetail', referencedColumnName: 'pkfContactDetail' },
  ])
  fkfContactDetail2: GenContactDetail;

  @RelationId((genTell: GenTell) => genTell.fkfContact2)
  fkfContact3: number;

  @RelationId((genTell: GenTell) => genTell.fkfTellType)
  fkfTellType2: number;

  @RelationId((genTell: GenTell) => genTell.fkfContactDetail2)
  fkfContactDetail3: number | null;
}
