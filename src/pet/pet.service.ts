import { Injectable, NotFoundException } from "@nestjs/common";
import {PetEntity} from './pet.entity'
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdatePetDto } from "./dto/update-pet.dto";
import { PetDto } from "./dto/pet.dto";



@Injectable()
export class PetService{
    constructor(
        @InjectRepository(PetEntity)
        private PetRepository: Repository<PetEntity>,
    ){}
    async find(){
        const pets= await this.PetRepository.find();
        return pets
    }

    async findOne(id:number){
        const pet= await this.PetRepository.findOne({where:{id:id}});
        if(!pet){
            throw new NotFoundException({message:'Mascota inexistente', error:'No se ha encontrado'});
        }
        return pet
    }

    create(payload:PetDto){
        const newPet= this.PetRepository.create();
        newPet.breed = payload.breed;
        newPet.color = payload.color;
        newPet.name = payload.name;
        newPet.isHealthy = payload.isHealthy;
        newPet.weight = payload.weight;

        const response = this.PetRepository.save(newPet);

        return response
    }


    async update(id: number, payload: UpdatePetDto){
        const Pet= await this.findOne(id);
        Pet.name = payload.name;
        Pet.breed = payload.breed;
        Pet.color = payload.color;
        Pet.isHealthy = payload.isHealthy;
        Pet.weight = payload.weight;
        if(!Pet){
            throw new NotFoundException({message:'Mascota inexistente', error:'No encontrado'});
        }
        const response = await this.PetRepository.update(id, Pet);
        return response 
    }



    async delete(id: number){
        //const Book= await this.findOne(id)
        const Car= await this.findOne(id);
    if(!Car){
        throw new NotFoundException({message:'Mascota inexistente', error:'No encontrado'});
    }
        const response = await this.PetRepository.delete(id);
        
        return response
    }
}