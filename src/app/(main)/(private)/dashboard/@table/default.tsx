import Link from "next/link";

const DefaultTable = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-5 text-center">
        <h1 className="text-gray-800">Table</h1>
        <p className="text-gray-500">Please choose a table view.</p>
        <div className="mt-4">
          <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">
            <Link href={"/dashboard/clients"}>Clients</Link>
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            <Link href={"/dashboard/employees"}>Employees</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultTable;
