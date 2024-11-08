"use client";

import { useModalContext } from "@/app/infraestructure";
import { ButtonAdd } from "@/ui/atoms";
import { CreateServiceTemplate } from "@/ui/template";
import { CardList } from "@/ui/template/services/Card-list";
import Link from "next/link";

const ServicesPage = () => {
  const { openModal, setModalContent } = useModalContext();

  const handleModal = () => {
    console.log('trying to open modal');
    setModalContent(
      <CreateServiceTemplate />
    )
    openModal();
  }


  return (
    <div>
      <h1>Services Page</h1>
      <div>
      </div>
      <div>
        <button><Link href={"/dashboard/services/test"}>test</Link></button>
        <ButtonAdd onClick={handleModal}/>
      </div>
      <div>
        <CardList/>
      </div>
    </div>
  );
};
export default ServicesPage;
