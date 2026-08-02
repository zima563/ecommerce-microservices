import { Injectable } from '@nestjs/common';
import { RabbitmqService } from '@app/rabbitmq';
import { Services } from '@app/common/services.enums';

@Injectable()
export class AuthService {
  constructor(private readonly rabbitmqService: RabbitmqService) {}

  async register(dto: any) {
    return this.rabbitmqService.send(Services.AUTH, 'auth.register', dto);
  }
}
