import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CollectionService } from './collection/collection.service';
import { CollectionModule } from './collection/collection.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [ 
      ConfigModule.forRoot({
      envFilePath:['.env', '.env.local', '.env.dev'],
      validationSchema:  Joi.object({
        DATABASE_HOST: Joi.required(),
        DATABASE_PORT: Joi.required(),
        DATABASE_USER: Joi.required(),
        DATABASE_PASSWORD: Joi.required(),
        DATABASE_NAME: Joi.required(),
        DATABSE_AUTO_LOAD_ENTITIES: Joi.required().default(false),
        DATABSE_SYNCHRONIZE: Joi.required().default(false),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities:process.env.DATABSE_AUTO_LOAD_ENTITIES == 'true' ? true : false,
      synchronize: process.env.DATABSE_SYNCHRONIZE == 'true' ? true : false,
    }),
    ProductModule, CollectionModule, CategoryModule],
    
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
