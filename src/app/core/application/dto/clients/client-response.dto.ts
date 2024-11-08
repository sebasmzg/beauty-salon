import { Pageable, Sort } from "../common/pagination.dto";
import { IService } from "../services/services-response.dto";

export interface IClientResponse {
    totalPages:       number;
    totalElements:    number;
    pageable:         Pageable;
    numberOfElements: number;
    size:             number;
    content:          IClient[];
    number:           number;
    sort:             Sort[];
    first:            boolean;
    last:             boolean;
    empty:            boolean;
}

export interface Appointment {
    id:       number;
    dateTime: Date;
    duration: number;
    comments: string;
    service:  IService;
    employee: IClient;
}

export interface IClient {
    id:            number;
    firstName:     string;
    lastName:      string;
    phone:         string;
    email:         string;
    appointments?: Appointment[];
    role?:         string;
}