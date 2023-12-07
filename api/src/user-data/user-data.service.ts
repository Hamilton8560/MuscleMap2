import { Injectable } from '@nestjs/common';
import { CreateUserDatumDto } from './dto/create-user-datum.dto';
import { UpdateUserDatumDto } from './dto/update-user-datum.dto';
import { UserDatum } from './entities/user-datum.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserDataService {
  constructor(@InjectModel(UserDatum.name) private userDataModel: Model<UserDatum>) {
  }
  async create(createUserDatumDto: CreateUserDatumDto) {
    createUserDatumDto.date = new Date().toISOString();
    return this.userDataModel.create(createUserDatumDto);
  }

  async findAll(): Promise<UserDatum[]> {
    return this.userDataModel.find().exec();
  }

  async findOne(id: string): Promise<UserDatum> {
    return this.userDataModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateUserDataDto: UpdateUserDatumDto): Promise<UserDatum> {
    updateUserDataDto.date = new Date().toISOString();
    const updatedDocument = await this.userDataModel.findByIdAndUpdate(id, updateUserDataDto, { new: true }).exec();
    return updatedDocument;
  }

  async remove(id: string) {
    const deletedUserData = await this.userDataModel
    .findByIdAndDelete({ _id: id })
    .exec();
    return deletedUserData;
  }
}
