import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    name: string;

    @IsString()
    @IsNotEmpty()
    detalis: string;

    @IsNumber()
    @IsNotEmpty()
    price:number;

    @IsString()
    @IsNotEmpty()
    brand:string;

    @IsNumber()
    @IsNotEmpty()
    stock:number;

    @IsString()
    @IsOptional()
    color?:string;

    @IsNumber()
    @IsNotEmpty()
    size:number;
}

