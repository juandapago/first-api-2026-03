import { Injectable } from "@nestjs/common";
import { CalculatorServiceInterface } from "./calculator-service-interface";
import { CalculateInDto } from "./dto/calculate-in-dto";
import { CalculateOutDto } from "./dto/calculate-out-dto";
import { mathOperation } from "./operations/math-operation.interface";


@Injectable()
export class CalculatorService implements CalculatorServiceInterface{
    private operationsMap: Map<string, mathOperation> = new Map();

    constructor() {
        this.operationsMap.set('sum', new (require('./operations/sum.operation').AdditionOperation)());
        this.operationsMap.set('subtract', new (require('./operations/subtract.operation').SubtractionOperation)());
        this.operationsMap.set('multiply', new (require('./operations/multiply.operation').MultiplyOperation)());
        this.operationsMap.set('divide', new (require('./operations/divide.operation').DivisionOperation)());
    }

    calculateOperation(calculateInDto: CalculateInDto): CalculateOutDto {
        const operation = this.operationsMap.get(calculateInDto.operation);
        if(calculateInDto.number1 == null || calculateInDto.number2 == null || operation == null){
            return{
                number: null,
                success: false,
                message: "Both numbers must be provided for the calculation or the operation is not supported."
            };
        }
        return operation.executeOperation(calculateInDto);
    }

}