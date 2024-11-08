import { Pageable, Sort } from "../common/pagination.dto";

export interface IEmployeesResponse {
    totalPages:       number;
    totalElements:    number;
    pageable:         Pageable;
    numberOfElements: number;
    size:             number;
    content:          IEmployee[];
    number:           number;
    sort:             Sort[];
    first:            boolean;
    last:             boolean;
    empty:            boolean;
}

export interface IEmployee {
    id:        number;
    firstName: string;
    lastName:  string;
    email:     string;
    phone:     string;
    role:      string;
}