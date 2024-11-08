export const ButtonIconWrapper = ({ children }:{children: React.ReactNode}) => {
    return (
        <div className="flex gap-3 text-2xl bg-slate-900 text-white p-1 hover:p-2 transition-all duration-300 rounded-full">
            {children}
        </div>
    );
}