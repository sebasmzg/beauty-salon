"use client";

import { useServices } from "@/app/infraestructure/hooks/useServices";
import { CardList, CreateServiceTemplate } from "../template";
import { useModalContext } from "@/app/infraestructure";
import { ButtonAdd } from "../atoms";

export const Services = () => {
  const { data, currentPage, totalPages, setCurrentPage } = useServices();
  const { openModal, setModalContent } = useModalContext();

  const handleModal = () => {
    console.log("trying to open modal");
    setModalContent(<CreateServiceTemplate />);
    openModal();
  };
  return (
    <div className="flex flex-col items-center w-full p-4 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Services</h1>
          <ButtonAdd onClick={handleModal} className="mb-4" />
        </div>

        <CardList
          data={data}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};
