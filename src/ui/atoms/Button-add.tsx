interface ButtonAddProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

export const ButtonAdd = ({onClick}: ButtonAddProps) => {
  return (
    <button onClick={onClick} className="rounded-full relative w-36 h-10 cursor-pointer flex items-center border border-slate-900 bg-slate-900 group hover:bg-slate-900 active:bg-slate-900 active:border-slate-900">
      <span className="text-white font-semibold ml-8 transform group-hover:hidden transition-all duration-300">
        Add New
      </span>
      <span className="absolute right-0 h-full w-10 rounded-full bg-slate-900 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
        <svg
          className="svg w-8 text-white"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke-width={2}
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
