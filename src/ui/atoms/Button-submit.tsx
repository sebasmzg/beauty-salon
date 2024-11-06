export const ButtonSubmit = ({ title, ...props }:{title: string}) => {
    return (
        <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 "
        >
            {title}
        </button>
    )
}