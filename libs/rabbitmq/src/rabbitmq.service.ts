import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { RABBITMQ_CLIENT } from './constants/rabbitmq.constants';

@Injectable()
export class RabbitmqService {
  constructor(
    @Inject(RABBITMQ_CLIENT)
    private readonly clients: Map<string, ClientProxy>,
  ) {}

  private getClient(clientName: string): ClientProxy {
    const client = this.clients.get(clientName);

    if (!client) {
      throw new InternalServerErrorException(
        `RabbitMQ client '${clientName}' not found`,
      );
    }

    return client;
  }

  emit<TData>(clientName: string, pattern: string, data: TData) {
    return this.getClient(clientName).emit(pattern, data);
  }

  async send<TResult, TData>(
    clientName: string,
    pattern: string,
    data: TData,
  ): Promise<TResult> {
    return firstValueFrom(
      this.getClient(clientName).send<TResult, TData>(pattern, data),
    );
  }
}
