import { ButtonLogout } from "@/ui/atoms/Button-logout";
import Link from "next/link";

export const SideBar = () => {
  return (
    <div className="flex flex-col h-screen w-60 bg-gray-100">

      <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
        <div className="text-lg font-semibold text-gray-800">Dashboard</div>
      </div>


      <div className="flex flex-col justify-evenly items-center p-4 space-y-4 flex-grow">
        <div className="group flex items-center text-white justify-center w-32 h-11 bg-slate-900 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg">
          <Link href={"/dashboard/clients"}>Clients</Link>
        </div>
        <div className="group flex items-center text-white justify-center w-32 h-11 bg-slate-900 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg">
          <Link href={"/dashboard/employees"}>Employees</Link>
        </div>
        <div className="group flex items-center text-white justify-center w-32 h-11 bg-slate-900 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg">
          <Link href={"/dashboard/appointment"}>Appointments</Link>
        </div>
      </div>


      <div className="flex items-center justify-center p-4 border-t border-gray-200">
        <ButtonLogout />
      </div>
    </div>
  );
};