import { IService } from "@/app/core/application/dto";
import { ServicesController } from "@/app/infraestructure";
import { NextResponse } from "next/server";

export const PUT = async (req: Request) => {
    try {
        const service = new ServicesController();
        const serviceData: IService = await req.json();
        const { id } = serviceData;
        if(!id){
            return new NextResponse(JSON.stringify({ message: "Service ID is required" }), { status: 400 });
        }
        console.log('Received service data:', serviceData);
        const updatedService = await service.updateService(id, serviceData);
        return NextResponse.json(updatedService, { status: 200 });
    } catch (error) {
        console.error('Error updating service:', error);
        return new NextResponse(JSON.stringify({ message: "Error updating service" }), { status: 500 });
    }
}