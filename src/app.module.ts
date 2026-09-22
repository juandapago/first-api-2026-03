import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { GreetingsModule } from './modules/greetings/greetings.module';
import { PeopleModule } from './modules/people/people.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { PurchasesModule } from './modules/purchases/purchases.module';
import { MysqlModule } from './modules/shared/infrastructure/mysql/mysql.module';
import { CalculatorModule } from './modules/calculator/calculator.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'primera-api',
    }),
    GreetingsModule,
    PeopleModule,
    AccountsModule,
    PurchasesModule,
    MysqlModule,
    CalculatorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
