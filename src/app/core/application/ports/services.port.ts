import { IServicesRequest } from "../dto/services/services-request.dto";
import { IService, IServicesResponse } from "../dto/services/services-response.dto";

export interface PServices  {
    /**
     * Fetches the list of services.
     * @param page The page number to fetch.
     * @param size The number of elements to fetch.
     * @returns A promise that resolves to the services response.
     */
    getServices(page: number, size: number): Promise<IServicesResponse>

    /**
     * Fetches a service by its id.
     * @param id The id of the service to fetch.
     * @returns A promise that resolves to the service response.
     */
    getServiceById(id: number): Promise<IService>

    /**
     * Creates a new service.
     * @param service The service to create.
     * @returns A promise that resolves to the created service.
     */
    createService(service: IServicesRequest): Promise<IService>

    /**
     * Updates a service.
     * @param id The id of the service to update.
     * @param service The service to update.
     * @returns A promise that resolves to the updated service.
     */
    updateService(id: number, service: IServicesRequest): Promise<IService>

    /**
     * Deletes a service.
     * @param id The id of the service to delete.
     * @returns A promise that resolves to the deleted service.
     */
    deleteService(id: number): Promise<IService>
}