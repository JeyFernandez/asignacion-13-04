import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly prudctRpsitory:Repository<Product>
  ){}

  async create(createProductDto: CreateProductDto) {
    const product = await this.prudctRpsitory.create(createProductDto)
    await this.prudctRpsitory.save(product)
    return product;
  }

  findAll() {
    return this.prudctRpsitory.find();
  }

  findOne(id: string) {
    return this.prudctRpsitory.findOneBy({id});
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const Product = await this.findOne(id)
    const upadateProduct = await this.prudctRpsitory.merge(
      Product,
      updateProductDto
      )
      return this.prudctRpsitory.save(upadateProduct)
  }

  async remove(id: string) {
    const product = await this.findOne(id)
    await this.prudctRpsitory.remove(product)
    return "Produt is removed successfully";
  }
}
