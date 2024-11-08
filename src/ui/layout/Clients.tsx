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
      console.log('trying to open modal');
      setModalContent(
        <CreateClientTemplate />
      )
      openModal();
    }

    console.log(data);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Clients</h1>
      <ButtonAdd  onClick={handleModal} />
      <TableClients data={data} currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
    </div>
  );
};
