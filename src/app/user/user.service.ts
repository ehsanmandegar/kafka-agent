import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GenTreater } from '../../entities/gen-treater';
import { BaseKafkaDto } from '../kafka/dto/base.kafka.dto';
import { KafkaService } from '../kafka/kafka.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(GenTreater)
    private genTreaterRepository: Repository<GenTreater>,
    private kafkaService: KafkaService,
  ) {}
  async createUserOnPortal(payload: BaseKafkaDto<GenTreater>) {}
  async updateUserOnPortal(payload: BaseKafkaDto<GenTreater>) {
    const asd = '';
    await this.kafkaService.sendMessage('portal-user', asd);
  }
}
