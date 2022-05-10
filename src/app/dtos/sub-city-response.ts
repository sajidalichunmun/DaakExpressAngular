import { CityResponse } from "./city-response";

export class SubCityResponse {
    public id: number;
    public name: string;
    public createdOn:Date;
    public createdBy: string;
    public updatedBy?: string;
    public updatedOn?: Date;
    public isaAtive: string;
    public city: CityResponse;
}
