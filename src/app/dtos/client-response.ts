import { IPacketType } from "./ipackettype";
import { MajorResponse } from "./major-response";

export class ClientResponse {
    public id: number;
    public name: string;
    public contactPerson:string;
    public description:string;
    public contactMNo:string;
    public contactPhNo:string;
    public gSTNO:string;
    public createdOn:Date;
    public createdBy: string;
    public updatedBy?: string;
    public updatedOn?: Date;
    public isaAtive: string;
    public major_result: MajorResponse;
    public packet_result: IPacketType;
}
