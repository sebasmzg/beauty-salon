import { IService, IServicesResponse } from "@/app/core/application/dto";
import Pagination from "@/ui/molecules/Pagination";
import Card from "@/ui/organisms/common/Card";

interface CardListProps {
  data: IServicesResponse | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const CardList = ({
  data,
  currentPage,
  totalPages,
  onPageChange,
}: CardListProps) => {
  
  return (
    <>
      <div className="grid grid-cols-3 gap-4 py-4 px-4">
        {data && data.content && data.content.length > 0 ? (
          data.content.map((service: IService) => (
            <Card data={service} key={service.id} />
          ))
        ) : (
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-slate-900 animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-slate-900 animate-bounce [animation-delay:.7s]"></div>
          </div>
        )}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </>
  );
};
