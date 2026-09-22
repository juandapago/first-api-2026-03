import { Module } from '@nestjs/common';
import { GreetingsController } from './greetings.controller';
import { GreetServiceService } from './greet-service.service';
import { GREET_SERVICE } from './tokens';

@Module({
  controllers: [GreetingsController],
  providers: [
    {
      provide: GREET_SERVICE,
      useClass: GreetServiceService
    }
  ]
})
export class GreetingsModule {}
