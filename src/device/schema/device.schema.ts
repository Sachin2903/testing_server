import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class Device{
    @Prop({type:String,default:""})
    name:string;

    @Prop({type:String,default:""})
    from:string;

    @Prop({type:String,default:""})
    for:string;

    @Prop({type:String,default:""})
    number:string;
}

export const DeviceSchema=SchemaFactory.createForClass(Device)