"use client";

import { IService } from "@/app/core/application/dto";
import { EndPointService } from "@/app/core/application/model";
import useSWR from "swr";
import { CiCalendarDate, CiEdit, CiTrash } from "react-icons/ci";
import { ButtonIcon } from "@/ui/atoms/Button-icon";
import { ButtonIconWrapper } from "@/ui/atoms/Button-icon-wrapper";
import { ButtonsWrapper } from "@/ui/atoms/Card-buttons-wrapper";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Card = () => {
  const { data, error } = useSWR(EndPointService.GET_SERVICE, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
    );

  const handleEdit = () => {
    console.log("edit");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  const handleAppoiment = () => {
    console.log("appoiment");
  };

  return (
    <div className="grid grid-cols-3 gap-4 py-4 px-4">
      {data.map((service: IService) => (
        <div
          key={service.id}
          className="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl cursor-pointer"
        >
          <div className="text-gray-700">
            <h1 className="text-center font-bold text-xl text-gray-800 pb-2">
              {service.name}
            </h1>
          </div>
          <div className="group-hover:pb-10 transition-all duration-500 delay-200">
            <p className="font-semibold text-gray-700">${service.price}</p>
            <p className="text-gray-500 text-sm">{service.description}</p>
          </div>
          <ButtonsWrapper>
            <ButtonIconWrapper>
              <ButtonIcon icon={<CiCalendarDate />} onClick={handleAppoiment} />
            </ButtonIconWrapper>
            <ButtonIconWrapper>
              <ButtonIcon icon={<CiEdit />} onClick={handleEdit} />
              <ButtonIcon icon={<CiTrash />} onClick={handleDelete} />
            </ButtonIconWrapper>
          </ButtonsWrapper>
        </div>
      ))}
    </div>
  );
};

export default Card;
