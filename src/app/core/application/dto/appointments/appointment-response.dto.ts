import { IClient } from "../clients/client-response.dto";
import { Pageable, Sort } from "../common/pagination.dto";
import { IEmployee } from "../employees/employees-response.dto";
import { IService } from "../services/services-response.dto";

export interface IAppointmentResponse {
    totalPages:       number;
    totalElements:    number;
    pageable:         Pageable;
    numberOfElements: number;
    size:             number;
    content:          IAppointment[];
    number:           number;
    sort:             Sort[];
    first:            boolean;
    last:             boolean;
    empty:            boolean;
}

export interface IAppointment {
    id:       number;
    dateTime: Date;
    duration: number;
    comments: string;
    client:   IClient;
    service:  IService;
    employee: IEmployee;
}