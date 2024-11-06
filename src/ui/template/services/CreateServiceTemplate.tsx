import { ServicesForm } from "@/ui/organisms";

export const CreateServiceTemplate = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <ServicesForm title="Create Service" submit="Create Service" />
            </div>
        </div>
    );
}