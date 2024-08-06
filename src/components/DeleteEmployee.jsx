import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${id}`
      );
      navigate("/");
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-5 text-gray-700">
        <h1 className="font-semibold text-3xl text-sky-500">Confirm Delete</h1>
        <p className="font-semibold text-lg">
          Are you sure you want to delete this employee?
        </p>
        <div className="flex justify-evenly">
          <button
            className="px-4 py-2 w-28 bg-sky-500 text-white rounded-3xl hover:bg-sky-600"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 w-28 bg-sky-500 text-white rounded-3xl hover:bg-sky-600"
            onClick={() => navigate("/")}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEmployee;
