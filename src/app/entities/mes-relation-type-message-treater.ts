import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_mesRelationTypeMessageTreater', ['pkfRelationTypeMessageTreater'], {
  unique: true,
})
@Entity('mesRelationTypeMessageTreater', { schema: 'dbo' })
export class MesRelationTypeMessageTreater {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'pkfRelationTypeMessageTreater',
  })
  pkfRelationTypeMessageTreater: number;

  @Column('int', { name: 'FkfTreater', nullable: true })
  fkfTreater: number | null;

  @Column('int', { name: 'FkfTypeMessage', nullable: true })
  fkfTypeMessage: number | null;

  @Column('bit', { name: 'active', default: () => '(0)' })
  active: boolean;
}
