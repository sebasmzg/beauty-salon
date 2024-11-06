interface ButtonAddProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

export const ButtonAdd = ({onClick}: ButtonAddProps) => {
  return (
    <button onClick={onClick} className="rounded-full relative w-36 h-10 cursor-pointer flex items-center border border-gray-700 bg-gray-700 group hover:bg-gray-700 active:bg-gray-700 active:border-gray-700">
      <span className="text-white font-semibold ml-8 transform group-hover:hidden transition-all duration-300">
        Add Item
      </span>
      <span className="absolute right-0 h-full w-10 rounded-full bg-gray-700 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
        <svg
          className="svg w-8 text-white"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" x2="12" y1="5" y2="19"></line>
          <line x1="5" x2="19" y1="12" y2="12"></line>
        </svg>
      </span>
    </button>
  );
};
