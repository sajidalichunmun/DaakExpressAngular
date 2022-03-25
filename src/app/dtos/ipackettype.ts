export interface IPacketType {
    id: number;
    name: string;
    packettypeshortcode: string;
    createdby: string;
    createdon: Date;
    updatedby?: string;
    updatedon?: Date;
    isactive: string
}
