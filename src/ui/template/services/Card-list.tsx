import { IService, IServicesResponse } from "@/app/core/application/dto";
import { EndPointService } from "@/app/core/application/model";
import Card from "@/ui/organisms/common/Card";
import useSWR from "swr";

interface CardListProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const CardList = ({
  currentPage,
  totalPages,
  onPageChange,
}: CardListProps) => {
  const { data, error } = useSWR(EndPointService.GET_SERVICE, fetcher);
  if (error) return <div>failed to load</div>;
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
      <div>pagination</div>
    </>
  );
};
