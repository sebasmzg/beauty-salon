"use client";

import { useModalContext } from "@/app/infraestructure";
import { ButtonAdd } from "../atoms";
import { CreateClientTemplate } from "../template/Clients/Form-CreateClient";
import { useClients } from "@/app/infraestructure/hooks/useClients";
import { TableClients } from "../template/Clients/Table-clients";

export const Clients = () => {
  const { data, currentPage, totalPages, setCurrentPage } = useClients();
  const { openModal, setModalContent } = useModalContext();

  const handleModal = () => {
    console.log("trying to open modal");
    setModalContent(<CreateClientTemplate />);
    openModal();
  };

  console.log(data);
  return (
    <div className="flex flex-col items-center w-full p-4 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Clients</h1>
          <ButtonAdd onClick={handleModal} />
        </div>
        <TableClients
          data={data}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};
