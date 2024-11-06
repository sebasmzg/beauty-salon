import { IService } from "@/app/core/application/dto";
import { NextResponse } from "next/server";

export const PUT = async (req: Request) => {
    try {
        const url = new URL(req.url);
        console.log('Received service url:', url);
        const id = url.pathname.split('/').pop();
        console.log('Received service id:', id);
        const serviceData: IService = await req.json();
        console.log('Received service data:', serviceData);
        return NextResponse.json(serviceData, { status: 200 });
    } catch (error) {
        console.error('Error updating service:', error);
        return new NextResponse(JSON.stringify({ message: "Error creating service" }), { status: 500 });
    }
}