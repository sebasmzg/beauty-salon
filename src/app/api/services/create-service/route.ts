import { IServicesRequest } from "@/app/core/application/dto";
import { ServicesController } from "@/app/infraestructure";
import { NextResponse } from "next/server";

const service = new ServicesController();

export const POST = async (req: Request) => {
    try {
        const serviceData: IServicesRequest = await req.json();
        console.log('Received service data:', serviceData);
        const result = await service.createService(serviceData);
        console.log('Service to create - apiroute:', result);
        return NextResponse.json(serviceData, { status: 201 });
    } catch (error) {
        console.error('Error creating service:', error);
        return new NextResponse(JSON.stringify({ message: "Error creating service" }), { status: 500 });
    }
}

