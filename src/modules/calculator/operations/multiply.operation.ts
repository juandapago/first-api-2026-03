import { CalculateInDto } from "../dto/calculate-in-dto";
import { CalculateOutDto } from "../dto/calculate-out-dto";
import { mathOperation } from "./math-operation.interface";


export class MultiplyOperation implements mathOperation {
    executeOperation(calculateInDto: CalculateInDto): CalculateOutDto {
        return{
            number: calculateInDto.number1 * calculateInDto.number2,
            success: true,
            message: "Multiplication operation executed successfully."
        }
    }
}