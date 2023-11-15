import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Matches, Max, MaxLength, Min, MinLength } from "class-validator";

export class UpdatePetDto {

    @MinLength(5, { message: 'El nombre debe tener mínimo 5 caracteres' })
    @MaxLength(30, { message: 'El nombre debe tener máximo 30 caracteres' })
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    @IsOptional()
    name?: string;

    @IsNotEmpty({ message: 'Este campo no puede ser nulo' })
    @IsString({ message: 'Este campo debe ser de tipo string' })
    @IsOptional()
    breed?: string;

    @IsNotEmpty({ message: 'Este campo no puede ser nulo' })
    @IsString({ message: 'Este campo debe ser de tipo string' })
    @IsOptional()
    color?: string;

    @IsNotEmpty({ message: 'Este campo no puede ser nulo' })
    @IsBoolean({ message: 'El campo isHealthy debe ser un valor booleano' })
    @IsOptional()
    isHealthy?: boolean;

    @IsNotEmpty({ message: 'Este campo no puede ser nulo' })
    @IsPositive({ message: 'El peso debe ser un número positivo' })
    @IsOptional()
    weight?: number;

}
