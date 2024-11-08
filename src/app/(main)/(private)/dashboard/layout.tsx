import { ButtonLogout } from "@/ui/atoms/Button-logout";
import AuthGuard from "./guard/AuthGuard";

export default function PrivateLayout({children}:{children:React.ReactNode}){
  return (
    <AuthGuard><ButtonLogout/>{children}</AuthGuard>
  )
}