import { Pageable, Sort } from "../common/pagination.dt";

export interface IServicesResponse {
    totalPages:       number;
    totalElements:    number;
    pageable:         Pageable;
    numberOfElements: number;
    size:             number;
    content:          IService[];
    number:           number;
    sort:             Sort[];
    first:            boolean;
    last:             boolean;
    empty:            boolean;
}

export interface IService {
    id:          number;
    name:        string;
    description: string;
    price:       number;
}