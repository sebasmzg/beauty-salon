import { ButtonLogout } from "@/ui/atoms/Button-logout";
import AuthGuard from "./guard/AuthGuard";
import { SideBar } from "@/ui/molecules/common/SideBar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex h-[100vh]">
        <div className="h-[100vh]">
          <SideBar />
        </div>
        <div className="flex flex-col h-full w-3/5">
          <div>table content</div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </AuthGuard>
  );
}
