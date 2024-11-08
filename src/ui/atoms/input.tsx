interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  name?: string;
  error?: string;
}

export const Input = ({
  placeholder,
  type,
  name,
  error,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col mb-4">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`peer h-10 w-full border-b-2 border-slate-900 text-slate-900 bg-transparent placeholder:transparent focus:outline-none focus:border-amber-500 ${error ? "border-red-500" : "border-gray-300"}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
