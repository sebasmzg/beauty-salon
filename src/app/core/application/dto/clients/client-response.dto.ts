import { IAppointment } from "../appointments/appointment-response.dto";
import { Pageable, Sort } from "../common/pagination.dto";

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

export interface IClient {
    id:            number;
    firstName:     string;
    lastName:      string;
    phone:         string;
    email:         string;
    appointments?: IAppointment[];
    role?:         string;
}