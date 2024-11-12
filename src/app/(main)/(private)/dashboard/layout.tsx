import AuthGuard from "./guard/AuthGuard";
import { SideBar } from "@/ui/molecules/common/SideBar";

export default function PrivateLayout({
  table,
  services,
}: {
  table: React.ReactNode;
  services: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex h-screen">
        <SideBar/>
        <div className="flex flex-1">
          <div className="w-1/2 h-screen">
            {table}
          </div>
          <div className="w-1/2 h-screen">
            {services}
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
