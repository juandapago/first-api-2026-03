import {CALCULATOR_SERVICE} from "./tokens";  
import { Body, Controller, Inject, Post } from "@nestjs/common";
import type { CalculatorServiceInterface } from "./calculator-service-interface";
import { CalculateInDto } from "./dto/calculate-in-dto";

@Controller('calculator')
export class CalculatorController {
    constructor(
        @Inject(CALCULATOR_SERVICE)
        private readonly calculatorService: CalculatorServiceInterface
    ){}

    @Post('')
    calculate(@Body() calculateInDto: CalculateInDto){
        return this.calculatorService.calculateOperation(calculateInDto);
    }
}