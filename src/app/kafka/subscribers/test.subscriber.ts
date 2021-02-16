import { Controller } from '@nestjs/common';
import { TEST_TOPIC } from '../types/topics/consuming-topics.constant';
import { SubscribeTo } from '../decorator/kafka.decorator';

@Controller()
export class TestSubscriber {
  @SubscribeTo(TEST_TOPIC)
  async createTest(payload) {
    // eslint-disable-next-line no-console
    console.log(payload);
  }
}
