import { CalculateInDto } from "./dto/calculate-in-dto";
import { CalculateOutDto } from "./dto/calculate-out-dto";

export interface CalculatorServiceInterface {
    calculateOperation(calculateInDto: CalculateInDto): CalculateOutDto;
}