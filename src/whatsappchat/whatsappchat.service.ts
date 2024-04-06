import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateWhatsappchatDto } from './dto/create-whatsappchat.dto';
import { UpdateWhatsappchatDto } from './dto/update-whatsappchat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Whatsappchat } from './schema/whatsappchat.schema';
import * as  mongoose from "mongoose"
import { error } from 'console';
import { DeviceService } from 'src/device/device.service';
import { ResponseService } from 'src/response/response.service';
@Injectable()
export class WhatsappchatService {
  constructor(@InjectModel(Whatsappchat.name) private whatsappchatModel: mongoose.Model<Whatsappchat>,
    private deviceServices: DeviceService,
    private responseServices: ResponseService) { }


  async create(createWhatsappchatDto: any) {
    const stringChat = JSON.stringify(createWhatsappchatDto)
    try {
      const device = {
        number: createWhatsappchatDto.to.toString(),
      }
      const deviceResponse = await this.deviceServices.create(device)
      

      const whatsappchat = {
        chat: stringChat,
        device: deviceResponse._id,
        from: "",
        for: "",
      }
      const whatsappResponse = await this.whatsappchatModel.create(whatsappchat)
      const response = {
        request:stringChat,
        message:"Message Added Successfully",
        status:"SUCCES",
        from:"",
        for:"",
        number:createWhatsappchatDto.to.toString()
      }
      await this.responseServices.create(response)
      return {
        "messaging_product": "whatsapp",
        "contacts": [
          {
            "input": createWhatsappchatDto?.to,
            "wa_id": deviceResponse._id.toString()
          }
        ],
        "messages": [
          {
            "id": whatsappResponse._id.toString()
          }
        ]
      }
    } catch (error) {
      const response = {
        request:stringChat,
        message:error?.response.toString(),
        status:"FAIL",
        from:"",
        for:"",
        number:createWhatsappchatDto?.to.toString()
      }
      await this.responseServices.create(response)
      console.log(error.response, "cehck this")
    }
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
