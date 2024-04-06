import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Device } from './schema/device.schema';
import * as mongoose from "mongoose";
@Injectable()
export class DeviceService {
  constructor(@InjectModel(Device.name) private deviceModel:mongoose.Model<Device>){}
  create(createDeviceDto: CreateDeviceDto) {
    return 'This action adds a new device';
  }

  findAll() {
    return `This action returns all device`;
  }

  findOne(id: number) {
    return `This action returns a #${id} device`;
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return `This action updates a #${id} device`;
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}
