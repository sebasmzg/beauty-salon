import { PServices } from "@/app/core/application/ports/services.port";
import { HttpClient } from "../utils";
import { IService, IServicesResponse } from "@/app/core/application/dto";
import { IServicesRequest } from "@/app/core/application/dto/services/services-request.dto";

export class ServicesController implements PServices {

private clientHttp: HttpClient;
private basePath: string = "services";

    constructor(){
        this.clientHttp = new HttpClient();
    }
    async getServices(page=1, size=5): Promise<IServicesResponse> {
        return this.clientHttp.get<IServicesResponse>(`${this.basePath}?page=${page}&size=${size}`)
    }
    async getServiceById(id: number) {
        return this.clientHttp.getById<IService>(this.basePath, id)
    }
    async createService(service: IServicesRequest) {
        return this.clientHttp.post<IService, IServicesRequest>(this.basePath, service)
    }
    async updateService(id: number, service: IServicesRequest): Promise<IService> {
        return this.clientHttp.put<IService, IServicesRequest>(this.basePath, id, service)
    }
    async deleteService(id: number): Promise<IService> {
        return this.clientHttp.delete<IService>(this.basePath, id)
    }
}