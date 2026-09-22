import { CalculateInDto } from "../dto/calculate-in-dto";
import { CalculateOutDto } from "../dto/calculate-out-dto";

export interface mathOperation {
    executeOperation(calculateInDto: CalculateInDto): CalculateOutDto;
}