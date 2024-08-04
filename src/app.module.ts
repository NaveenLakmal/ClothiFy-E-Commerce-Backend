import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VendorModule } from './vendor/vendor.module';
import { ProductModule } from './product/product.module';
import { CustomerService } from './customer/customer.service';
import { CollectionService } from './collection/collection.service';
import { CollectionResolver } from './collection/collection.resolver';
import { CollectionModule } from './collection/collection.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [VendorModule, ProductModule, CollectionModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService, CustomerService, CollectionService, CollectionResolver],
})
export class AppModule {}
