"use client";

import { useServices } from "@/app/infraestructure/hooks/useServices";
import { CardList } from "../template";

export const Services = () => {
    const { data, currentPage, totalPages, setCurrentPage } = useServices();
  return (
    <div>
      <h1>Services view</h1>
      <CardList data={data} currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};
