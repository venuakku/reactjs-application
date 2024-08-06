import { useNavigate } from "react-router-dom";

function EmployeeList({ employees }) {
  const navigate = useNavigate();

  return (
    <div>
      {employees.map((employee) => (
        <div
          key={employee.id}
          className="m-2 border-t grid grid-cols-6 lg:grid-cols-12"
        >
          <p className="p-3">{employee.id}</p>
          <img
            onClick={() => navigate(`/employee/${employee.id}`)}
            src={employee.avatar}
            alt="employee-image"
            className="h-12 w-12 ml-3 cursor-pointer my-auto border border-black/10 rounded-full hidden lg:block"
          />
          <p
            onClick={() => navigate(`/employee/${employee.id}`)}
            className="text-sky-500 col-span-3 py-3 cursor-pointer"
          >
            {employee.name}
          </p>
          <p className="col-span-3 py-3 hidden lg:block">{employee.emailId}</p>
          <p className="col-span-2 py-3 hidden lg:block">{employee.mobile}</p>
          <button
            onClick={() => navigate(`/edit-employee/${employee.id}`)}
            className="w-28 bg-sky-500 hover:bg-sky-600 text-white m-2 py-2 px-4 rounded-3xl"
          >
            Edit
          </button>
          <button
            onClick={() => navigate(`/delete-employee/${employee.id}`)}
            className="w-28 bg-sky-500 hover:bg-sky-600 text-white m-2 py-2 px-4 rounded-3xl"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
