import { IEmployee, IEmployeesRequest, IEmployeesResponse } from "../dto"

export interface PEmployees {
    /**
     * Fetches the list of services.
     * @param page The page number to fetch.
     * @param size The number of elements to fetch.
     * @returns A promise that resolves to the services response.
     */
    getEmployees(page: number, size: number): Promise<IEmployeesResponse>

    /** 
     * Fetches a service by its id.
     * @param id The id of the service to fetch.
     * @returns A promise that resolves to the service response.
     */
    getEmployeeById(id: number): Promise<IEmployee>

    /**
     * Creates a new service.
     * @param service The service to create.
     * @returns A promise that resolves to the created service.
     */
    createEmployee(service: IEmployeesRequest): Promise<IEmployee>

    /**
     * Updates a service.
     * @param id The id of the service to update.
     * @param service The service to update.
     * @returns A promise that resolves to the updated service.
     */
    updateEmployee(id: number, service: IEmployeesRequest): Promise<IEmployee>

    /**
     * Deletes a service.
     * @param id The id of the service to delete.
     * @returns A promise that resolves to the deleted service.
     */
    deleteEmployee(id: number): Promise<IEmployee>
}