"use client";

import { useModalContext } from "@/app/infraestructure";
import { ButtonAdd } from "@/ui/atoms";
import Card from "@/ui/organisms/common/Card";
import { CreateServiceTemplate } from "@/ui/template";
import { signOut } from "next-auth/react";
import Link from "next/link";

const ServicesPage = () => {
  const { openModal, setModalContent, closeModal } = useModalContext();

  const handleLogout = () => {
    console.log('log out');
    signOut({callbackUrl: '/'});
  }

  const handleModal = () => {
    console.log('trying to open modal');
    setModalContent(
      <CreateServiceTemplate/>
    )
    openModal();
  }


  return (
    <div>
      <h1>Services Page</h1>
      <div>
      <button onClick={handleLogout}>
        log out
      </button>
      </div>
      <div>
        <button><Link href={"/dashboard/services/test"}>test</Link></button>
        <ButtonAdd onClick={handleModal}/>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};
export default ServicesPage;
