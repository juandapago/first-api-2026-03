import { Injectable } from '@nestjs/common';
import { GreetServiceInterface } from './greet-service-interface';
import { GreetGroupOutDto } from './dto/greet-group-out-dto.js';
import { GreetPersonOutDto } from './dto/greet-person-out-dto';
import { GreetGroupInDto } from './dto/greet-group-in-dto';

@Injectable()
export class GreetServiceService implements GreetServiceInterface {
    greetPerson(name: string): unknown {
        return this.greePerson(name);
    }
    
    greetPeople(greetGroupInDTO: GreetGroupInDto): GreetGroupOutDto {
        throw new Error('Method not implemented.');
    }

    greePerson(name: string): GreetPersonOutDto {
        if(name==''){
            return {
                greeting: '',
                success: false
            }
        }
        return{
            greeting: `Hello ${name}`,
            success: true
        }
    }
    greetGroup(greetGroupInDTO: GreetGroupInDto): GreetGroupOutDto {
        if(greetGroupInDTO == null || 
            greetGroupInDTO.people.length){
            return {
                greeting: '',
                success: false
            }
        }
        let out:string = "Hello ";
        GreetGroupInDto.people.forEach((person: any) => {
        out += `,${person}`;
        });
        return {
            greeting: out,
            success: true
        }
    }
}

