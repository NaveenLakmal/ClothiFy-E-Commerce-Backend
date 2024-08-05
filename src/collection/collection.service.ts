import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Collection } from './entities/collection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CollectionService {

  constructor(
    @InjectRepository(Collection) private readonly collectionRepository: Repository<Collection>,
  ) { }

  create(createCollectionDto: CreateCollectionDto) {

    try {

      const collectionEntity = this.collectionRepository.create(createCollectionDto);
      return this.collectionRepository.save(collectionEntity);

    } catch (error) {
      if (error instanceof InternalServerErrorException) {
        console.error('InternalServerErrorException:', error.message);
        throw error;

      } else if (error instanceof BadRequestException) {
        console.error('BadRequestException:', error);
        throw error;
      } else {
        console.error('An error occurred:', error);
        throw error;

      }

    }
  }

  async findAll() {
    try {

      return await this.collectionRepository.find();

    } catch (error) {
      if (error instanceof InternalServerErrorException) {
        console.error('InternalServerErrorException:', error.message);
        throw error;

      } else if (error instanceof BadRequestException) {
        console.error('BadRequestException:', error);
        throw error;
      } else {
        const sanitizedError = new Error('An unexpected error occurred');
        console.error('An error occurred:', error);
        throw sanitizedError;

      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} collection`;
  }

  async update(id: number, updateCollectionDto: UpdateCollectionDto) {
    try {
      const collection = await this.collectionRepository.findOne({
        where: {
          id: id
        }
      })

      if (!collection) {
        throw new NotFoundException(`collection with  ID ${id} not found`);
      }

      Object.assign(collection, updateCollectionDto);
      return await this.collectionRepository.save(collection);

    } catch (error) {
      if (error instanceof NotFoundException) {
        console.error('NotFoundException', error);
        throw error;

      } else if (error instanceof InternalServerErrorException) {
        console.error('BadRequestException:', error);
        throw error;

      } else if (error instanceof BadRequestException) {
        console.error('InternalServerErrorException:', error.message);
        throw error;

      } else {
        const sanitizedError = new Error('An unexpected error occurred');
        console.error('An error occurred:', error);
        throw sanitizedError;

      }
    }

  }

  remove(id: number) {
    return `This action removes a #${id} collection`;
  }
}
