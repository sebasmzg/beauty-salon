import { CiCalendarDate, CiEdit, CiTrash } from "react-icons/ci";
import { ButtonIcon } from "./Button-icon";
import { ButtonIconWrapper } from "./Button-icon-wrapper";
import { useModalContext } from "@/app/infraestructure";
import { EditServiceFrom } from "../template";
import { IService } from "@/app/core/application/dto";
import { EndPointService } from "@/app/core/application/model";
import Swal from "sweetalert2";

interface ButtonsWrapperProps {
  itemData: IService;
}

export const ButtonsWrapper = ({ itemData }: ButtonsWrapperProps) => {
  const { openModal, setModalContent } = useModalContext();

  const handleEdit = () => {
    console.log("edit", itemData);
    setModalContent(<EditServiceFrom itemData={itemData} />);
    openModal();
  };

  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás deshacer esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      try {
        const response = await fetch(
          `${EndPointService.DELETE_SERVICE}${itemData.id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          Swal.fire("Eliminado", "El servicio ha sido eliminado.", "success");
        } else {
            Swal.fire("Error", "Error al eliminar el servicio.", "error");
        }
      } catch (error) {
        console.error("Error al eliminar el servicio:", error);
        Swal.fire("Error", "Error al eliminar el servicio.", "error");
      }
    }
  };

  const handleAppoiment = () => {
    console.log("appoiment");
  };

  return (
    <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
      <ButtonIconWrapper>
        <ButtonIcon icon={<CiCalendarDate />} onClick={handleAppoiment} />
      </ButtonIconWrapper>
      <ButtonIconWrapper>
        <ButtonIcon icon={<CiEdit />} onClick={handleEdit} />
        <ButtonIcon icon={<CiTrash />} onClick={handleDelete} />
      </ButtonIconWrapper>
    </div>
  );
};
