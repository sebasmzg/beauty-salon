"use client";

import { useState } from "react";
import { ButtonLogout } from "@/ui/atoms/Button-logout";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col h-screen ${isOpen ? "w-40" : "w-16"} transition-width duration-300`}>
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <div className="text-lg font-semibold text-gray-800">
          {isOpen ? "Dashboard" : <FiMenu onClick={toggleSidebar} className="cursor-pointer" />}
        </div>
        {isOpen && <FiX onClick={toggleSidebar} className="cursor-pointer" />}
      </div>

      {isOpen && (
        <div className="flex flex-col justify-evenly items-center p-4 space-y-4 flex-grow">
          <div className="group flex items-center text-white justify-center w-32 h-11 bg-slate-900 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg">
            <Link href={"/dashboard/clients"}>Clients</Link>
          </div>
          <div className="group flex items-center text-white justify-center w-32 h-11 bg-slate-900 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg">
            <Link href={"/dashboard/employees"}>Employees</Link>
          </div>
          <div className="group flex items-center text-white justify-center w-32 h-11 bg-slate-900 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg">
            <Link href={"#"}>Appointments</Link>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center p-4 border-t border-gray-200">
        {isOpen && <ButtonLogout />}
      </div>
    </div>
  );
};