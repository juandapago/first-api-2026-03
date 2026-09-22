import { Module } from "@nestjs/common";
import { CalculatorController } from "./calculator.controller";
import { CalculatorService } from "./calculator.service";
import { CALCULATOR_SERVICE } from "./tokens";

@Module({
    controllers: [CalculatorController],
    providers: [
        {
            provide: CALCULATOR_SERVICE,
            useClass: CalculatorService
        }
    ]
})
export class CalculatorModule {}