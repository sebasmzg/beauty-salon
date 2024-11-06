export const ButtonIconWrapper = ({ children }:{children: React.ReactNode}) => {
    return (
        <div className="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
            {children}
        </div>
    );
}