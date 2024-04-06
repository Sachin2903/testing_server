import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { RESPONSE_STATUS } from "src/entities/enum";

@Schema({timestamps:true})
export class Response{
    @Prop({type:String,default:""})
    request:string;

    @Prop({type:String,default:""})
    message:string;

    @Prop({type:String,enum:Object.keys(RESPONSE_STATUS)})
    status:string;

    @Prop({type:String,default:""})
    from:string;

    @Prop({type:String,default:""})
    for:string;

    @Prop({type:String,default:""})
    number:string;
}

export const ResponseSchema=SchemaFactory.createForClass(Response)