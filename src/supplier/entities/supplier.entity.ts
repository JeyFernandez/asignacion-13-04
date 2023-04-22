import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Supplier {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'text'})
    name:string;

    @Column({type:'numeric'})
    phone:number;

    @Column({type:'text'})
    email:string;

    @Column({type:'text'})
    direction:string;

    @Column({type:'array',})
    products:number[]

    @Column({type:'numeric'})
    basePrice:number;
}
