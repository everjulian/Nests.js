import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { PetDto } from "./pet.dto";

export class CreatePetDto extends PetDto{

}