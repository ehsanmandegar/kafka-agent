export interface BaseKafkaConnectDto<TableDto> {
  properties: BaseKafkaConnectPropertiesDto<TableDto>;
  title: string;
  type: any;
}

interface BaseKafkaConnectPropertiesDto<TableDto> {
  after: TableDto;
  before: TableDto;
  op: string;
  source: any;
}
