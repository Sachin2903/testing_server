import { PartialType } from '@nestjs/mapped-types';
import { CreateWhatsappchatDto } from './create-whatsappchat.dto';

export class UpdateWhatsappchatDto extends PartialType(CreateWhatsappchatDto) {}
