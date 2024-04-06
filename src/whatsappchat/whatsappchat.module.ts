import { Module } from '@nestjs/common';
import { WhatsappchatService } from './whatsappchat.service';
import { WhatsappchatController } from './whatsappchat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WhatsappchatSchema } from './schema/whatsappchat.schema';
import { DeviceModule } from 'src/device/device.module';
import { ResponseModule } from 'src/response/response.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Whatsappchat", schema: WhatsappchatSchema }]),
    DeviceModule, ResponseModule],
  controllers: [WhatsappchatController],
  providers: [WhatsappchatService],

})
export class WhatsappchatModule { }
