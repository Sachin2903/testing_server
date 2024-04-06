import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from './schema/response.schema';
import * as mongoose from "mongoose"
@Injectable()
export class ResponseService {
  constructor(@InjectModel(Response.name) private responseModel: mongoose.Model<Response>) { }

  async create(createResponseDto) {
    const type = createResponseDto.status.toString()
    const customer = createResponseDto.number.toString()
    try {
      await this.responseModel.create(createResponseDto)
    } catch (error) {
      const message=error._message?error._message:`Fail To Add ${type} Response for ${customer}`
      throw new HttpException(message, HttpStatus.CONFLICT)
    }
  }

  findAll() {
    return `This action returns all response`;
  }

  findOne(id: number) {
    return `This action returns a #${id} response`;
  }

  update(id: number, updateResponseDto: UpdateResponseDto) {
    return `This action updates a #${id} response`;
  }

  remove(id: number) {
    return `This action removes a #${id} response`;
  }

}
