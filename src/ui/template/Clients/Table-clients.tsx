import { IClientResponse } from "@/app/core/application/dto";
import { ButtonIcon, ButtonIconWrapper } from "@/ui/atoms";
import Pagination from "@/ui/molecules/Pagination";
import { CiEdit, CiTrash } from "react-icons/ci";

interface TableClientsProps {
  data: IClientResponse | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const TableClients = ({
  data,
  currentPage,
  totalPages,
  onPageChange,
}: TableClientsProps) => {

    const handleEdit = () => {
        console.log("edit");
    }

    const handleDelete = () => {
        console.log("delete");
    }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Firstname
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lastname
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.content.map((client) => (
              <tr key={client.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {client.firstName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {client.lastName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{client.phone}</td>
                <td className="flex justify-evenly px-6 py-4 whitespace-nowrap">
                <ButtonIcon icon={<CiEdit />} onClick={handleEdit} />
                <ButtonIcon icon={<CiTrash />} onClick={handleDelete} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="justify-items-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};
