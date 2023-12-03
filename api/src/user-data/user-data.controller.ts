import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserDataService } from './user-data.service';
import { CreateUserDatumDto } from './dto/create-user-datum.dto';
import { UpdateUserDatumDto } from './dto/update-user-datum.dto';
import { UserDatum } from './entities/user-datum.entity';

@Controller('user-data')
export class UserDataController {
  constructor(private readonly userDataService: UserDataService) {}

  @Post()
  create(@Body() createUserDatumDto: CreateUserDatumDto) {
    return this.userDataService.create(createUserDatumDto);
  }

  
  @Get()
  async findAll(): Promise<UserDatum[]>{
    return this.userDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userDataService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDatumDto: UpdateUserDatumDto) {
    return this.userDataService.update(id, updateUserDatumDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userDataService.remove(id);
  }
}
