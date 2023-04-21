import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({type: 'text',})
    details: string;

    @Column()
    price: number;

    @Column()
    brand: string;

    @Column()
    stock: number;

    @Column()
    color: string;
    
    @Column()
    size: number;//las dimeciones del computador en pulgadas
}
