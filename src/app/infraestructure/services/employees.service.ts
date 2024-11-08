import { PEmployees } from "@/app/core/application/ports";
import { HttpClient } from "../utils";
import { IEmployee, IEmployeesRequest, IEmployeesResponse } from "@/app/core/application/dto";


export class EmployeesServices implements PEmployees {

private clientHttp: HttpClient;
private basePath: string = "employees";

    constructor(){
        this.clientHttp = new HttpClient();
    }
    async getEmployees(page:number, size: number): Promise<IEmployeesResponse> {
        return this.clientHttp.get<IEmployeesResponse>(`${this.basePath}?page=${page}&size=${size}`)
    }
    async getEmployeeById(id: number) {
        return this.clientHttp.getById<IEmployee>(this.basePath, id)
    }
    async createEmployee(service: IEmployeesRequest) {
        return this.clientHttp.post<IEmployee, IEmployeesRequest>(this.basePath, service)
    }
    async updateEmployee(id: number, service: IEmployee): Promise<IEmployee> {
        return this.clientHttp.put<IEmployee, IEmployee>(this.basePath, id, service)
    }
    async deleteEmployee(id: number) {
        return this.clientHttp.delete(this.basePath, id)
    }
}