import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { Wish } from './entities/wish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class WishesService {
  constructor(
    @InjectRepository(Wish)
    private wishesRepository: Repository<Wish>,
  ) {}
 async create(createWishDto: CreateWishDto, user: User): Promise<Wish> {
    return 'This action adds a new wish';
  }

  findAll() {
    return `This action returns all wishes`;
  }

  async findOne(query: FindOneOptions<Wish>): Promise<Wish> {
    const wish = await this.wishesRepository.findOne(query);
    if (!wish) {
      throw new NotFoundException('Wish not found');
    }

    return wish;
  }

  update(id: number, updateWishDto: UpdateWishDto) {
    return `This action updates a #${id} wish`;
  }

  remove(id: number) {
    return `This action removes a #${id} wish`;
  }
}
