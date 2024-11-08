import { PClients } from "@/app/core/application/ports";
import { HttpClient } from "../utils";
import { IClient, IClientResponse } from "@/app/core/application/dto/clients/client-response.dto";
import { IClientRequest } from "@/app/core/application/dto/clients/client-request.dto";


export class ClientsServices implements PClients {

private clientHttp: HttpClient;
private basePath: string = "services";

    constructor(){
        this.clientHttp = new HttpClient();
    }
    async getClients(page:number, size: number): Promise<IClientResponse> {
        return this.clientHttp.get<IClientResponse>(`${this.basePath}?page=${page}&size=${size}`)
    }
    async getClientById(id: number) {
        return this.clientHttp.getById<IClient>(this.basePath, id)
    }
    async createClient(service: IClientRequest) {
        return this.clientHttp.post<IClient, IClientRequest>(this.basePath, service)
    }
    async updateClient(id: number, service: IClient): Promise<IClient> {
        return this.clientHttp.put<IClient, IClient>(this.basePath, id, service)
    }
    async deleteClient(id: number) {
        return this.clientHttp.delete(this.basePath, id)
    }
}