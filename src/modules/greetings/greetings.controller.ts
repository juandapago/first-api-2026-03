import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import type { GreetServiceInterface } from './greet-service-interface';
import { GREET_SERVICE } from './tokens';
import { GreetGroupInDto } from './dto/greet-group-in-dto';

@Controller('greetings')
export class GreetingsController {
    constructor(
        @Inject(GREET_SERVICE)
        private readonly greetService:  GreetServiceInterface
    ){}
    
    @Get('')
    greetByName(@Query('name')name:string){
        return this.greetService.greetPerson(name);
    }
    @Get('')
    greetByNameV2(@Query('name')name:string){
        return this.greetService.greetPerson(name);
    }
    @Post('')
    greetGroup(@Body() dto: GreetGroupInDto){
        return this.greetService.greetPeople(dto);

    }
}