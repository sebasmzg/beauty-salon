export const ButtonsWrapper =({children}:{children:React.ReactNode})=>{
    return(
        <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
            {children}
        </div>
    );
}