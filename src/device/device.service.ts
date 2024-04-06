import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Device } from './schema/device.schema';
import * as mongoose from "mongoose";
@Injectable()
export class DeviceService {
  constructor(@InjectModel(Device.name) private deviceModel: mongoose.Model<Device>) { }
  async create(createDeviceDto: CreateDeviceDto) {
    try {
      return await this.deviceModel.findOneAndUpdate(createDeviceDto,createDeviceDto, { new: true, upsert: true })
    } catch (error) {
      throw new HttpException("Fail In Add / Check Phone Number", HttpStatus.CONFLICT)
    }
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
