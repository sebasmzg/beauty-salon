import { IClientResponse } from "@/app/core/application/dto";
import { ClientsServices } from "@/app/infraestructure";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get('page') || '1');
    const size = Number(searchParams.get('size') || '6');
    const clients = new ClientsServices();
    try {
        const data: IClientResponse = await clients.getClients(page, size);
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Error getting service:', error);
        return new NextResponse(JSON.stringify({ message: "Error getting service" }), { status: 500 });
    }
}