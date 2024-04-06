import { Module } from '@nestjs/common';
import { WhatsappchatService } from './whatsappchat.service';
import { WhatsappchatController } from './whatsappchat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WhatsappchatSchema } from './schema/whatsappchat.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:"Whatsappchat",schema:WhatsappchatSchema}])],
  controllers: [WhatsappchatController],
  providers: [WhatsappchatService],
})
export class WhatsappchatModule {}
