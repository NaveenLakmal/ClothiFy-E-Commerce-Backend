import { Category } from "src/category/entities/category.entity";
import { Collection } from "src/collection/entities/collection.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column()
    price:number;

    @Column()
    soldCount:number;

    @Column()
    imagePath:string;

    @Column()
    categoryId:number;

    @Column()
    collectionId:number;

    @ManyToOne(() => Collection, (collection) => collection.products)
    @JoinColumn({name:'collectionId'})
    collection:Collection

    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({name:'collectionId'})
    category:Category

}
