import { CityResponse } from "./city-response";

export class FranchiseeResponse {
    public id: number;
    public name: string;
    public gstNo: string;
    public panNo: string;
    public emailId: string;
    public contact1: string;
    public contact2: string;
    public address1:string;
    public address2:string;
    public pincode:string;
    public city:CityResponse;
    public createdOn:Date;
    public createdBy: string;
    public updatedBy?: string;
    public updatedOn?: Date;
    public isaAtive: string;
}
