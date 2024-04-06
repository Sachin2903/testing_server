import { Injectable } from '@nestjs/common';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from './schema/response.schema';
import * as mongoose from "mongoose"
@Injectable()
export class ResponseService {
  constructor(@InjectModel(Response.name) private responseModel:mongoose.Model<Response> ){}

  create(createResponseDto: CreateResponseDto) {
    return 'This action adds a new response';
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
