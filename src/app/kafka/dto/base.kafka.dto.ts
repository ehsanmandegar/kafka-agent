import { Operation } from '../enum/operation.enum';

export interface BaseKafkaDto<T> {
  before: T;
  after: T;
  op: Operation;
  ts_ms: number;
}
