import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './entities/supplier.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplirRepoitory:Repository<Supplier>
  ){}

  async create(createSupplierDto: CreateSupplierDto) {
    const createSupplier = await this.create(createSupplierDto)
    await this.supplirRepoitory.save(createSupplier)
    return createSupplier;
  }

  findAll() {
    return this.supplirRepoitory.find();
  }

  findOne(id: string) {
    return this.supplirRepoitory.findOneBy({id});
  }

  async update(id: string, updateSupplierDto: UpdateSupplierDto) {
    const findSupplier = await this.findOne(id);
    const updateSupplier = await this.supplirRepoitory.merge(findSupplier, updateSupplierDto)
    return this.supplirRepoitory.save(updateSupplier);
  }

  async remove(id: string) {
    const findSupplier = await this.findOne(id)
    await this.supplirRepoitory.remove(findSupplier);
    return "supplier removed successfully";
  }
}
