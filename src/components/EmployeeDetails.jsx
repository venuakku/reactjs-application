import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployeeById();
  }, [id]);

  const fetchEmployeeById = async () => {
    setError(null);
    try {
      setLoading(true);
      const response = await axios.get(
        `https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${id}`
      );
      setEmployee(response.data);
    } catch (error) {
      setError(
        error.response ? error.response.data : "Error fetching employee"
      );
    } finally {
      setLoading(false);
    }
  };

  if (error) return <div>Error: {error}</div>;

  if (!employee || loading)
    return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-2 text-gray-700 text-xl">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center text-center">
            <img
              className="h-28 w-28 ml-3 my-auto border border-black/10 rounded-full"
              src={employee.avatar}
              alt="employee-photo"
            />
            <p>
              <span className="font-semibold text-sky-500">
                {employee.name}
              </span>
            </p>
          </div>
        </div>
        <p>
          <span className="font-semibold">Id:</span> {employee.id}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {employee.emailId}
        </p>
        <p>
          <span className="font-semibold">Mobile:</span> {employee.mobile}
        </p>
        <p>
          <span className="font-semibold">District:</span> {employee.district}
        </p>
        <p>
          <span className="font-semibold">State:</span> {employee.state}
        </p>
        <p>
          <span className="font-semibold">Country:</span> {employee.country}
        </p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => navigate("/")}
          className="w-28 bg-sky-500 hover:bg-sky-600 text-white mt-4 py-2 px-4 rounded-3xl"
        >
          Back
        </button>
        <button
          onClick={() => navigate(`/edit-employee/${employee.id}`)}
          className="w-28 bg-sky-500 hover:bg-sky-600 text-white mt-4 py-2 px-4 rounded-3xl"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default EmployeeDetails;
