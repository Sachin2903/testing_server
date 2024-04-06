import { Injectable } from '@nestjs/common';
import { CreateWhatsappchatDto } from './dto/create-whatsappchat.dto';
import { UpdateWhatsappchatDto } from './dto/update-whatsappchat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Whatsappchat } from './schema/whatsappchat.schema';
import * as  mongoose from "mongoose" 
@Injectable()
export class WhatsappchatService {
  constructor(@InjectModel(Whatsappchat.name) private whatsappchatModel:mongoose.Model<Whatsappchat>){}
  create(createWhatsappchatDto: CreateWhatsappchatDto) {
    return 'This action adds a new whatsappchat';
  }

  findAll() {
    return `This action returns all whatsappchat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} whatsappchat`;
  }

  update(id: number, updateWhatsappchatDto: UpdateWhatsappchatDto) {
    return `This action updates a #${id} whatsappchat`;
  }

  remove(id: number) {
    return `This action removes a #${id} whatsappchat`;
  }
}
