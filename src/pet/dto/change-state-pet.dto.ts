import {  } from "class-validator";
import { PickType } from "@nestjs/swagger";
import { PetDto } from "./pet.dto";


export class ChangStatePetDto extends PickType(PetDto, 
    [
        'name',
        'breed',
    ]
    )  {
   
}
