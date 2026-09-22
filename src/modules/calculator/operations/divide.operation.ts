import { CalculateInDto } from "../dto/calculate-in-dto";
import { CalculateOutDto } from "../dto/calculate-out-dto";
import { mathOperation } from "./math-operation.interface";

export class DivisionOperation implements mathOperation {
    executeOperation(calculateInDto: CalculateInDto): CalculateOutDto {
        if(calculateInDto.number2 === 0){
            return {
                number: null,
                success: false,
                message: "Division by zero is not allowed."
            }
        }
        return{
            number: calculateInDto.number1 / calculateInDto.number2,
            success: true,
            message: "Division operation executed successfully."
        }
    }
}
