import { IAppointment, IAppointmentRequest, IAppointmentResponse } from "../dto";

export interface PAppointments {
    /**
     * Fetches the list of services.
     * @param page The page number to fetch.
     * @param size The number of elements to fetch.
     * @returns A promise that resolves to the services response.
     */
    getAppointments(page: number, size: number): Promise<IAppointmentResponse>

    /**
     * Fetches a service by its id.
     * @param id The id of the service to fetch.
     * @returns A promise that resolves to the service response.
     */
    getAppointmentById(id: number): Promise<IAppointment>

    /**
     * Creates a new service.
     * @param service The service to create.
     * @returns A promise that resolves to the created service.
     */
    createAppointment(service: IAppointmentRequest): Promise<IAppointment>

    /**
     * Updates a service.
     * @param id The id of the service to update.
     * @param service The service to update.
     * @returns A promise that resolves to the updated service.
     */
    updateAppointment(id: number, service: IAppointment): Promise<IAppointment>

    /**
     * Deletes a service.
     * @param id The id of the service to delete.
     * @returns A promise that resolves to the deleted service.
     */
    deleteAppointment(id: number): Promise<IAppointment>
}