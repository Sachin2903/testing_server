import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({ timestamps: true })
export class Whatsappchat {
    @Prop({ type: String })
    chat: string

    @Prop({ type: Types.ObjectId, required: true })
    device: Types.ObjectId

    @Prop({ type: String, default: "" })
    from: string;

    @Prop({ type: String, default: "" })
    for: string;
}

export const WhatsappchatSchema=SchemaFactory.createForClass(Whatsappchat)