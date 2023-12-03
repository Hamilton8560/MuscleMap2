import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDataDocument = HydratedDocument<UserData>;

@Schema()
export class UserData {
  @Prop()
  name: string;

  @Prop()
  date: string;

}

export const GamimgSchema = SchemaFactory.createForClass(UserData);