export interface IPacketType {
    id: number;
    name: string;
    packetTypeShortCode: string;
    createdby: string;
    createdon: Date;
    updatedby?: string;
    updatedon?: Date;
    isactive: string
}
