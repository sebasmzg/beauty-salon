import { IService } from "@/app/core/application/dto";
import { ServicesForm } from "@/ui/organisms";

interface CreateServiceFromProps {
    itemData?: IService;
}

export const CreateServiceTemplate = ({itemData}: CreateServiceFromProps) => {
    return (
        <div className="h-full rounded-lg flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <ServicesForm itemData={itemData} method="POST" title="Create Service" submit="Add" />
            </div>
        </div>
    );
}