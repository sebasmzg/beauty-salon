import { PServices } from "@/app/core/application/ports";
import { HttpClient } from "../utils";
import { IService, IServicesResponse } from "@/app/core/application/dto";
import { IServicesRequest } from "@/app/core/application/dto";

export class ServicesController implements PServices {

private clientHttp: HttpClient;
private basePath: string = "services";

    constructor(){
        this.clientHttp = new HttpClient();
    }
    async getServices(page=1, size=35): Promise<IServicesResponse> {
        return this.clientHttp.get<IServicesResponse>(`${this.basePath}?page=${page}&size=${size}`)
    }
    async getServiceById(id: number) {
        return this.clientHttp.getById<IService>(this.basePath, id)
    }
    async createService(service: IServicesRequest) {
        return this.clientHttp.post<IService, IServicesRequest>(this.basePath, service)
    }
    async updateService(id: number, service: IService): Promise<IService> {
        return this.clientHttp.put<IService, IService>(this.basePath, id, service)
    }
    async deleteService(id: number) {
        return this.clientHttp.delete(this.basePath, id)
    }
}