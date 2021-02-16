import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_ReplacePerson', ['replacePersonId'], { unique: true })
@Entity('ReplacePerson', { schema: 'dbo' })
export class ReplacePerson {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ReplacePersonID' })
  replacePersonId: number;

  @Column('int', { name: 'UserIDsource' })
  userIDsource: number;

  @Column('int', { name: 'UserIDestination' })
  userIDestination: number;

  @Column('datetime', { name: 'DateStart' })
  dateStart: Date;

  @Column('datetime', { name: 'DateFinish' })
  dateFinish: Date;

  @Column('int', { name: 'FkfWorkFlowStepType', nullable: true })
  fkfWorkFlowStepType: number | null;
}
