import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CategoriaDto } from "./dto/category/category";
import { UpdateCategoriaDto } from "./dto/category/categoryupdate";

@ApiTags('categories')
@Controller('categories')
export class CategoryController{
  
    @ApiOperation({description:'Buscar categorías', summary:'Find Categories'})
    @Get()
    find(){
        return ['drinks', 'meats','sweets','fruits']
    }

    @ApiOperation({description:'Buscar una categoría', summary:'Find One Category'})
    @Get(':id')
    findOne(@Param('id') id:number){
        return id;
    }

    @ApiOperation({description:'Agregar Categoría', summary:'Add Category'})
    @Post()
    create(@Body() payload:CategoriaDto){
        return payload;
    }

    @ApiOperation({description:'Editar Categoría', summary:'Update Categories'})
    @Put(':id')
    update(@Param('id') id:number, @Body() payload:UpdateCategoriaDto){
        return {id, body:payload}
    }

    @ApiOperation({description:'Buscar Categorías', summary:'Change Categories'})
    @Patch(':id')
    patch(@Param('id') id:number){
        return id
    }

    @ApiOperation({description:'Eliminar Categorías', summary:'Delete Categories'})
    @Delete(':id')
    delete(@Param('id') id:number){
        return 'Categoría Eliminada ${id}';
    }
}