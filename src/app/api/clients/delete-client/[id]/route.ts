import { ClientsServices } from "@/app/infraestructure";
import { NextResponse } from "next/server";

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id; 
    if (!id) {
      return NextResponse.json(
        { message: "Service ID is required" },
        { status: 400 }
      );
    }
    const client = new ClientsServices();
    const deletedClient = await client.deleteClient(Number(id));
    return new NextResponse(JSON.stringify({ message: "Service deleted" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting service:", error);
    return new NextResponse(
      JSON.stringify({ message: "Error deleting service" }),
      { status: 500 }
    );
  }
};
