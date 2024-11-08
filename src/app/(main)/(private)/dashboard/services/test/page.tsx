import { ServicesController } from "@/app/infraestructure/services/services.service";
import { CreateServiceTemplate } from "@/ui/template/services/Form-CreateService";

const service = new ServicesController();
export default async function Page() {

  const getservices = async () => {
    try {
      const result = await service.getServices(); ;
      console.log("services",result);
    } catch (error) {
      console.log("Error in getServices", error);
    }
  }

  /* const getServiceById = async () => {
    try {
      const result = await service.getServiceById(5); ;
      console.log("service by id",result);
    } catch (error) {
      console.log("Error in getServiceById", error);
    }
  } */

  /* const createService = async () => {
    const newService = {
      name: "Solo las puntitas",
      description: "no será solo las puntitas",
      price: 100
    }
    try {
      const result = await service.createService(newService);
      console.log("service created",result);
    } catch (error) {
      console.log("Error in createService", error);
    }
  }
 */
  /* const updateService = async () => {
    const updatedService = {
      name: "Solo las puntitas",
      description: "solo las puntitas",
      price: 100
    }
    try {
      const result = await service.updateService(5, updatedService);
      console.log("service updated",result);
    } catch (error) {
      console.log("Error in updateService", error);
    }
  }
 */
  /* const deleteService = async () => {
    try {
      const result = await service.deleteService(4);
      console.log("service deleted",result);
    } catch (error) {
      console.log("Error in deleteService", error);
    }
  } */

  getservices();

  return <>
    <h1>Services</h1>
    <CreateServiceTemplate />
  </>
}