import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly OffersService: OffersService) {}

  @Post()
  create(@Body() offer: CreateOfferDto) {
    return this.OffersService.create(offer);
  }

  @Get()
  findAll() {
    return this.OffersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.OffersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateOfferDto) {
    return this.OffersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.OffersService.remove(+id);
  }
}
