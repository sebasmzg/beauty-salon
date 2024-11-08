import { IClient, IClientRequest, IClientResponse } from "../dto";

export interface PClients {
    /**
     * Fetches the list of services.
     * @param page The page number to fetch.
     * @param size The number of elements to fetch.
     * @returns A promise that resolves to the services response.
     */
    getClients(page: number, size: number): Promise<IClientResponse>

    /**
     * Fetches a service by its id.
     * @param id The id of the service to fetch.
     * @returns A promise that resolves to the service response.
     */
    getClientById(id: number): Promise<IClient>

    /**
     * Creates a new service.
     * @param service The service to create.
     * @returns A promise that resolves to the created service.
     */
    createClient(service: IClientRequest): Promise<IClient>

    /**
     * Updates a service.
     * @param id The id of the service to update.
     * @param service The service to update.
     * @returns A promise that resolves to the updated service.
     */
    updateClient(id: number, service: IClientRequest): Promise<IClient>

    /**
     * Deletes a service.
     * @param id The id of the service to delete.
     * @returns A promise that resolves to the deleted service.
     */
    deleteClient(id: number): Promise<IClient>
}