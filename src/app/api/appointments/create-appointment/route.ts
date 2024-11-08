import { IAppointmentRequest } from "@/app/core/application/dto";
import { AppointmentsServices } from "@/app/infraestructure";
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
    const appointments = new AppointmentsServices();
    try {
        const data: IAppointmentRequest = await req.json();
        console.log('Received service data:', data);
        const result = await appointments.createAppointment(data);
        console.log('Service to create', result);
        return NextResponse.json(data, { status: 201 });
    } catch (error) {
        console.error('Error creating service:', error);
        return new NextResponse(JSON.stringify({ message: "Error creating service" }), { status: 500 });
    }
}