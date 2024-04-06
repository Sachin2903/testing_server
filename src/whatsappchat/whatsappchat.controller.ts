import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhatsappchatService } from './whatsappchat.service';
import { CreateWhatsappchatDto } from './dto/create-whatsappchat.dto';
import { UpdateWhatsappchatDto } from './dto/update-whatsappchat.dto';

@Controller('whatsappchat')
export class WhatsappchatController {
  constructor(private readonly whatsappchatService: WhatsappchatService) {}

  @Post()
  create(@Body() createWhatsappchatDto: CreateWhatsappchatDto) {
    return this.whatsappchatService.create(createWhatsappchatDto);
  }

  @Get()
  findAll() {
    return this.whatsappchatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.whatsappchatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWhatsappchatDto: UpdateWhatsappchatDto) {
    return this.whatsappchatService.update(+id, updateWhatsappchatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whatsappchatService.remove(+id);
  }
}
