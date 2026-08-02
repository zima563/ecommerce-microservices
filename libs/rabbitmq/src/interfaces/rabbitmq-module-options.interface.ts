export interface RabbitMQClientOptions {
  name: string;
  queue: string;
}

export interface RabbitMQModuleOptions {
  clients: RabbitMQClientOptions[];
}
