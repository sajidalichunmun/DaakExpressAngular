import { StateResponse } from "./state-response";

export class CityResponse {
    public id: number;
    public name: string;
    public createdOn:Date;
    public createdBy: string;
    public updatedBy?: string;
    public updatedOn?: Date;
    public isaAtive: string;
    public state: StateResponse;
}
