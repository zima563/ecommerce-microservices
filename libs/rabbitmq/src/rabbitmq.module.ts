import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

import { RabbitmqService } from './rabbitmq.service';
import { RabbitMQModuleOptions } from './interfaces/rabbitmq-module-options.interface';
import {
  RABBITMQ_CLIENT,
  RABBITMQ_OPTIONS,
} from './constants/rabbitmq.constants';

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
          ) => {
            const clients = new Map<string, ClientProxy>();
            const rabbitmqUrl =
              configService.getOrThrow<string>('RABBITMQ_URL');

            for (const client of rabbitmqOptions.clients) {
              clients.set(
                client.name,
                ClientProxyFactory.create({
                  transport: Transport.RMQ,
                  options: {
                    urls: [rabbitmqUrl],
                    queue: client.queue,
                    queueOptions: {
                      durable: true,
                    },
                  },
                }),
              );
            }

            return clients;
          },
        },
        RabbitmqService,
      ],
      exports: [RabbitmqService],
    };
  }
}
