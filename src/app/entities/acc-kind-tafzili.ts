import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { AccCategoryTafzili } from './acc-category-tafzili';

@Index('IX_accKindTafzili', ['accYear', 'kindTafziliCode'], { unique: true })
@Index('IX_accKindTafzili_1', ['accYear', 'kindTafzili'], { unique: true })
@Index('IX_accKindTafzili_filtering1', ['accYear', 'oldPkf'], { unique: true })
@Index('PK_accKindTafzili', ['pkfKindTafzili'], { unique: true })
@Entity('accKindTafzili', { schema: 'dbo' })
export class AccKindTafzili {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfKindTafzili' })
  pkfKindTafzili: number;

  @Column('nvarchar', { name: 'kindTafzili', length: 150 })
  kindTafzili: string;

  @Column('nvarchar', { name: 'kindTafziliCode', length: 50 })
  kindTafziliCode: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('nvarchar', {
    name: 'kindTafziliEn',
    length: 150,
    default: () => "''",
  })
  kindTafziliEn: string;

  @OneToMany(
    () => AccCategoryTafzili,
    (accCategoryTafzili) => accCategoryTafzili.fkfKindTafzili,
  )
  accCategoryTafzilis: AccCategoryTafzili[];

  @ManyToOne(
    () => AccKindTafzili,
    (accKindTafzili) => accKindTafzili.accKindTafzilis,
  )
  @JoinColumn([{ name: 'oldPkf', referencedColumnName: 'pkfKindTafzili' }])
  oldPkf2: AccKindTafzili;

  @OneToMany(() => AccKindTafzili, (accKindTafzili) => accKindTafzili.oldPkf2)
  accKindTafzilis: AccKindTafzili[];

  @RelationId((accKindTafzili: AccKindTafzili) => accKindTafzili.oldPkf2)
  oldPkf3: number | null;
}
