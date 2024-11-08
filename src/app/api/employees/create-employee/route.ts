import { IEmployeesRequest } from "@/app/core/application/dto";
import { EmployeesServices } from "@/app/infraestructure";
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
    const employees = new EmployeesServices();
    try {
        const data: IEmployeesRequest = await req.json();
        console.log('Received service data:', data);
        const result = await employees.createEmployee(data);
        console.log('Service to create', result);
        return NextResponse.json(data, { status: 201 });
    } catch (error) {
        console.error('Error creating service:', error);
        return new NextResponse(JSON.stringify({ message: "Error creating service" }), { status: 500 });
    }
} 