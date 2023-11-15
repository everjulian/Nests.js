import { Controller, Delete, Get, Post, Put, Param, Patch, Body, Query, ParseIntPipe,} from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { PetDto } from "./dto/pet.dto";
import { UpdatePetDto } from "./dto/update-pet.dto";
import { ChangStatePetDto } from "./dto/change-state-pet.dto";
import { PetService } from "./pet.service";
import { CreatePetDto } from "./dto/create-pet.dto";



@ApiTags('Pet Module')
@Controller('Pet')
export class PetController {

    constructor(private readonly petService:PetService){
    }

    @ApiOperation({description:'Buscar mascotas', summary:'Find a pets'})
    @Get()
    async find(@Query() query:any ){
        const response = await this.petService.find();
        return response
    }


    @ApiOperation({description:'Buscar una mascota', summary:'Find a pet'})
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id:number){
        const response = await this.petService.findOne(id);

        return response;
    }

    @ApiOperation({description:'Agregar una mascota', summary:'Add a pet'})
    @Post()
    async create(@Body() payload: CreatePetDto){
        const response = await this.petService.create(payload);
        return response;
    }

    @ApiOperation({description:'Editar una mascota', summary:'Update a pet'})
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id:number, @Body() payload:UpdatePetDto){
        const response = await this.petService.update(id, payload);
        return {id, body:payload}
    }

    @ApiOperation({description:'mascota', summary:'pet'})
    @Patch(':id')
    patch(@Param('id') id:ChangStatePetDto){
        return id
    }

    @ApiOperation({description:'Eliminar una mascota', summary:'Delete Pet'})
    @Delete(':id')
    async delete(@Param('id') id:number){
        const response = await this.petService.delete(id);

        return response;
    }

}

