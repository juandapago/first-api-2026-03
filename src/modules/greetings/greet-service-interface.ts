import { GreetGroupOutDto } from "./dto/greet-group-out-dto.js";
import { GreetGroupInDto } from "./dto/greet-group-in-dto.js";
import { GreetPersonOutDto } from "./dto/greet-person-out-dto";

export interface GreetServiceInterface {
    greetPerson(name: string): unknown;
    greePerson(name:string):GreetPersonOutDto
    greetPeople(greetGroupInDTO: GreetGroupInDto): GreetGroupOutDto;
}
