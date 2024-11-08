import { IClientRequest } from "@/app/core/application/dto";
import { ClientsServices } from "@/app/infraestructure";
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
    const clients = new ClientsServices();
    try {
        const data: IClientRequest = await req.json();
        console.log('Received service data:', data);
        const result = await clients.createClient(data);
        console.log('Service to create', result);
        return NextResponse.json(data, { status: 201 });
    } catch (error) {
        console.error('Error creating service:', error);
        return new NextResponse(JSON.stringify({ message: "Error creating service" }), { status: 500 });
    }
}