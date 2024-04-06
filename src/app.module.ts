import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceModule } from './device/device.module';
import { WhatsappchatModule } from './whatsappchat/whatsappchat.module';
import { ResponseModule } from './response/response.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule,DeviceModule, WhatsappchatModule, ResponseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
