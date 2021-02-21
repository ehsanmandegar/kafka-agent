import { Controller } from '@nestjs/common';
import { SubscribeTo } from '../kafka/decorator/kafka.decorator';
import { USER_TOPIC } from '../kafka/types/topics/ahan-afzar.topics';
import { BaseKafkaDto } from '../kafka/dto/base.kafka.dto';
import { GenTreater } from '../../entities/gen-treater';
import { Operation } from '../kafka/enum/operation.enum';
import { UserService } from './user.service';

@Controller()
export class UserSubscriber {
  constructor(private userService: UserService) {}
  @SubscribeTo(USER_TOPIC)
  async ahanAfzarToPortal(payload: BaseKafkaDto<GenTreater>) {
    switch (payload.op) {
      case Operation.CREATE:
        await this.userService.createUserOnPortal(payload);
        break;
      case Operation.UPDATE:
        await this.userService.updateUserOnPortal(payload);
        break;
    }
  }
}
