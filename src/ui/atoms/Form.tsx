interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}  

export const Form = ({children,onSubmit, ...props}:FormProps) => {
    return (
        <form className="w-full max-w-sm mx-auto p-4 space-y-4" onSubmit={onSubmit}>
            {children}
        </form>
    )
}