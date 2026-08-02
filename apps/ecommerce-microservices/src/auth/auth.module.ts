import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RabbitmqModule } from '@app/rabbitmq';
import { Services } from '@app/common/services.enums';

@Module({
  imports: [
    RabbitmqModule.register({
      clients: [
        {
          name: Services.AUTH,
          queue: 'auth_queue',
        },
      ],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
