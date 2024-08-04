import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Collection {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @OneToMany(() => Product, (product) => product.collection)
    products:Product[];

}
