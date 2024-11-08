import { IService } from "@/app/core/application/dto";
import { useModalContext } from "@/app/infraestructure";

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    onClick: () => void;
}
export const ButtonIcon = ({ icon, onClick}: ButtonIconProps) => {

    return (
        <button onClick={onClick} className="hover:scale-125 transition-all duration-300 delay-200">
            {icon}
        </button>
    );
}