import { PAppointments } from "@/app/core/application/ports/appointments.port";
import { HttpClient } from "../utils";
import { IAppointment, IAppointmentRequest, IAppointmentResponse } from "@/app/core/application/dto";


export class AppointmentsServices implements PAppointments {

private clientHttp: HttpClient;
private basePath: string = "employees";

    constructor(){
        this.clientHttp = new HttpClient();
    }
    async getAppointments(page:number, size: number): Promise<IAppointmentResponse> {
        return this.clientHttp.get<IAppointmentResponse>(`${this.basePath}?page=${page}&size=${size}`)
    }
    async getAppointmentById(id: number) {
        return this.clientHttp.getById<IAppointment>(this.basePath, id)
    }
    async createAppointment(service: IAppointmentRequest) {
        return this.clientHttp.post<IAppointment, IAppointmentRequest>(this.basePath, service)
    }
    async updateAppointment(id: number, service: IAppointment): Promise<IAppointment> {
        return this.clientHttp.put<IAppointment, IAppointment>(this.basePath, id, service)
    }
    async deleteAppointment(id: number) {
        return this.clientHttp.delete(this.basePath, id)
    }
}