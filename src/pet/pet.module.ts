import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PetEntity } from "./pet.entity";
import { PetService } from "./pet.service";
import { PetController } from "./pet.controller";


@Module({
    imports: [TypeOrmModule.forFeature([PetEntity])],
    controllers:[PetController],
    providers:[PetService]
})
export class PetModule{

}