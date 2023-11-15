import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsPositive, IsString, Matches, Max, MaxLength, Min, MinLength } from "class-validator";

export class PetDto {

    @MinLength(5, { message: 'El nombre debe tener mínimo 5 caracteres' })
    @MaxLength(30, { message: 'El nombre debe tener máximo 30 caracteres' })
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    name: string;

    @IsNotEmpty({ message: 'Este campo no puede ser nulo' })
    @IsString({ message: 'Este campo debe ser de tipo string' })
    breed: string;

    @IsNotEmpty({ message: 'Este campo no puede ser nulo' })
    @IsString({ message: 'Este campo debe ser de tipo string' })
    color: string;

    @IsNotEmpty({ message: 'Este campo no puede ser nulo' })
    @IsBoolean({ message: 'El campo isHealthy debe ser un valor booleano' })
    isHealthy: boolean;

    @IsNotEmpty({ message: 'Este campo no puede ser nulo' })
    @IsPositive({ message: 'El peso debe ser un número positivo' })
    weight: number;

}
