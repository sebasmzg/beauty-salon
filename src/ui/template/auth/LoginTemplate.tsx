import { LoginForm } from "@/ui/organisms"

export const LoginTemplate = () => {
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <LoginForm />
            </div>
        </div>
    )
}