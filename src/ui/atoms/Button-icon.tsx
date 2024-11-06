interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    onClick: () => void;
}
export const ButtonIcon = ({ icon, onClick}: ButtonIconProps) => {
    return (
        <button onClick={onClick} className="hover:scale-110 transition-all duration-500 delay-200">
            {icon}
        </button>
    );
}