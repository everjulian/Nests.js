import { IsNotEmpty, IsString, Length, IsEnum, IsArray, ArrayNotEmpty, IsAlphanumeric, IsDate, MinDate, MaxDate, Matches, IsOptional } from "class-validator";

enum Estado {
    ACTIVO = "ACTIVO",
    INACTIVO = "INACTIVO"
}

export class UpdateCategoriaDto {

    @IsOptional()
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @Length(3, 50, { message: 'El nombre de la categoría debe tener entre 3 y 50 caracteres' })
    nombre?: string;

    @IsOptional()
    @IsEnum(Estado, { message: 'El estado de la categoría debe ser ACTIVO o INACTIVO' })
    estado?: Estado;

    @IsOptional()
    @Matches(/^E\d{1,10}$/, { message: 'El código de la categoría debe empezar con "E" seguido de hasta 10 dígitos numéricos' })
    codigo?: string;

    @IsOptional()
    @IsArray({ message: 'Los productos de la categoría deben ser un arreglo' })
    @ArrayNotEmpty({ message: 'Los productos de la categoría no pueden estar vacíos' })
    productos?: number[]; // Suponiendo que los productos están representados por números de identificación única

    @IsOptional()
    @IsDate({ message: 'El campo de la fecha debe ser de tipo Date' })
    @MinDate(new Date(), { message: 'La fecha debe ser posterior a la fecha actual' })
    @MaxDate(() => new Date(), { message: 'La fecha debe ser anterior a la fecha actual' })
    fecha?: Date;
}
