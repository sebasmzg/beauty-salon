export interface IAppointmentRequest {
    dateTime:   Date;
    duration:   number;
    comments:   string;
    clientId:   number;
    serviceId:  number;
    employeeId: number;
}
