import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AppBar({ handleSearch }) {
  const [searchId, setSearchId] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <h1 className="m-2 mx-4 text-3xl text-sky-700 font-semibold">
        Employees
      </h1>
      <div className="flex justify-between mx-2">
        <div className="m-2">
          <input
            type="number"
            placeholder="Search by ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="h-10 mr-2 py-2 px-4 no-arrows bg-slate-100 outline-sky-500 border border-black/25 rounded-3xl"
          />
          <button
            onClick={() => {
              handleSearch(searchId);
              setSearchId("");
            }}
            className="w-28 h-10 bg-sky-500 hover:bg-sky-600 text-white my-2 py-2 px-4 rounded-3xl"
          >
            Search
          </button>
        </div>
        <button
          onClick={() => navigate("/add-employee")}
          className="h-10 bg-sky-500 hover:bg-sky-600 text-white mt-4 mr-7 py-2 px-4 rounded-3xl"
        >
          Add New Employee
        </button>
      </div>
      <div className="text-gray-700 font-semibold border-t px-4 py-2 grid grid-cols-4 lg:h-14 lg:grid-cols-12">
        <p>ID</p>
        <p className="hidden lg:block">Avatar</p>
        <p className="col-span-3">Name</p>
        <p className="col-span-3 hidden lg:block">Email</p>
        <p className="col-span-2 hidden lg:block">Phone</p>
      </div>
    </>
  );
}

export default AppBar;
