import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

import { RabbitmqService } from './rabbitmq.service';
import { RabbitMQModuleOptions } from './interfaces/rabbitmq-module-options.interface';
import { RABBITMQ_CLIENT, RABBITMQ_OPTIONS } from './constants/rabbitmq.constants';

@Module({})
export class RabbitmqModule {
  static register(options: RabbitMQModuleOptions): DynamicModule {
    return {
      module: RabbitmqModule,
      imports: [ConfigModule],
      providers: [
        {
          provide: RABBITMQ_OPTIONS,
          useValue: options,
        },
        {
          provide: RABBITMQ_CLIENT,
          inject: [ConfigService, RABBITMQ_OPTIONS],
          useFactory: (
            configService: ConfigService,
            rabbitmqOptions: RabbitMQModuleOptions,
          ) =>
            ClientProxyFactory.create({
              transport: Transport.RMQ,
              options: {
                urls: [configService.getOrThrow<string>('RABBITMQ_URL')],
                queue: rabbitmqOptions.queue,
                queueOptions: { durable: true },
              },
            }),
        },
        RabbitmqService,
      ],
      exports: [RabbitmqService],
    };
  }
}
