import { IEmployee } from "@/app/core/application/dto";
import { EmployeesServices } from "@/app/infraestructure";
import { NextResponse } from "next/server";

export const PUT = async (req: Request) => {
    try {
        const employees = new EmployeesServices();
        const data: IEmployee = await req.json();
        const { id } = data;
        if(!id){
            return new NextResponse(JSON.stringify({ message: "Service ID is required" }), { status: 400 });
        }
        console.log('Received service data:', data);
        const updatedService = await employees.updateEmployee(id, data);
        return NextResponse.json(updatedService, { status: 200 });
    } catch (error) {
        console.error('Error updating service:', error);
        return new NextResponse(JSON.stringify({ message: "Error updating service" }), { status: 500 });
    }
}