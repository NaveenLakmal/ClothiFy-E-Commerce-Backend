import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Collection } from './entities/collection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CollectionService {

    constructor(
      @InjectRepository(Collection) private readonly collectionRepository:Repository<Collection>,
    ){}

  create(createCollectionDto: CreateCollectionDto) {
    const  collectionEntity= this.collectionRepository.create(createCollectionDto);
    return this.collectionRepository.save(collectionEntity);
  }

  findAll() {
    return `This action returns all collection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collection`;
  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return `This action updates a #${id} collection`;
  }

  remove(id: number) {
    return `This action removes a #${id} collection`;
  }
}
