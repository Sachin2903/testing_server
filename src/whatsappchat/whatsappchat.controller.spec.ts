import { Test, TestingModule } from '@nestjs/testing';
import { WhatsappchatController } from './whatsappchat.controller';
import { WhatsappchatService } from './whatsappchat.service';

describe('WhatsappchatController', () => {
  let controller: WhatsappchatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhatsappchatController],
      providers: [WhatsappchatService],
    }).compile();

    controller = module.get<WhatsappchatController>(WhatsappchatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
