"use client";

import { useServices } from "@/app/infraestructure/hooks/useServices";
import { CardList, CreateServiceTemplate } from "../template";
import { useModalContext } from "@/app/infraestructure";
import { ButtonAdd } from "../atoms";

export const Services = () => {
    const { data, currentPage, totalPages, setCurrentPage } = useServices();
    const { openModal, setModalContent } = useModalContext();

    const handleModal = () => {
      console.log('trying to open modal');
      setModalContent(
        <CreateServiceTemplate />
      )
      openModal();
    }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Services</h1>
      <ButtonAdd onClick={handleModal} />
      <CardList data={data} currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};
