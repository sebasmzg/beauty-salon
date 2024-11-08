import {  IService } from "@/app/core/application/dto";
import { CiCalendarDate, CiEdit, CiTrash } from "react-icons/ci";
import { ButtonIcon } from "@/ui/atoms/Button-icon";
import { ButtonIconWrapper } from "@/ui/atoms/Button-icon-wrapper";
import { ButtonsWrapper } from "@/ui/atoms/Card-buttons-wrapper";

interface CardProps {
  data: IService;
}

const Card = ({data}:CardProps) => {

  return (
    <>
      {data && (
        <div
          key={data.id}
          className="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl cursor-pointer"
        >
          <div className="text-gray-700">
            <h1 className="text-center font-bold text-xl text-gray-800 pb-2">
              {data.name}
            </h1>
          </div>
          <div className="group-hover:pb-10 transition-all duration-500 delay-200">
            <p className="font-semibold text-gray-700">${data.price}</p>
            <p className="text-gray-500 text-sm">{data.description}</p>
          </div>
          <ButtonsWrapper itemData={data}/> 
        </div>
      )}
    </>
  );
};

export default Card;
