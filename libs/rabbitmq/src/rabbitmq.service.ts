import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { RABBITMQ_CLIENT } from './constants/rabbitmq.constants';

@Injectable()
export class RabbitmqService {
  constructor(
    @Inject(RABBITMQ_CLIENT)
    private readonly client: ClientProxy,
  ) {}

  emit<T>(pattern: string, data: T) {
    return this.client.emit(pattern, data);
  }

  async send<TResult, TData>(pattern: string, data: TData): Promise<TResult> {
    return firstValueFrom(this.client.send<TResult, TData>(pattern, data));
  }

  cdkfbkdjv;
}
