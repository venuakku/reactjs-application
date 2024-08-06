import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "./ui/InputField";
import CountryDropdown from "./ui/CountryDropdown";
import validate from "../utils/formValidations.js";

function AddEditEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    emailId: "",
    mobile: "",
    country: "",
    state: "",
    district: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchEmployee();
    }
  }, [id]);

  const fetchEmployee = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${id}`
      );
      setEmployee(response.data);
    } catch (error) {
      console.error("Error fetching employee:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setErrors((prev) => !prev);
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(employee);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      if (id) {
        await axios.put(
          `https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${id}`,
          employee
        );
      } else {
        await axios.post(
          "https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee",
          employee
        );
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-2 text-gray-700 text-xl">
        <h1 className="font-semibold text-3xl text-sky-500 my-5">
          {id ? "Edit Employee" : "Add New Employee"}
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <InputField
            label="Name"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-600 text-center text-sm">{errors.name}</p>
          )}
          <InputField
            label="Email"
            name="emailId"
            value={employee.emailId}
            onChange={handleChange}
          />
          {errors.emailId && (
            <p className="text-red-600 text-center text-sm">{errors.emailId}</p>
          )}
          <InputField
            label="Mobile"
            name="mobile"
            value={employee.mobile}
            onChange={handleChange}
          />
          {errors.mobile && (
            <p className="text-red-600 text-center text-sm">{errors.mobile}</p>
          )}
          <CountryDropdown employee={employee} onChange={handleChange} />
          {errors.country && (
            <p className="text-red-600 text-center text-sm">{errors.country}</p>
          )}
          <InputField
            label="State"
            name="state"
            value={employee.state}
            onChange={handleChange}
          />
          {errors.state && (
            <p className="text-red-600 text-center text-sm">{errors.state}</p>
          )}
          <InputField
            label="District"
            name="district"
            value={employee.district}
            onChange={handleChange}
          />
          {errors.district && (
            <p className="text-red-600 text-center text-sm">
              {errors.district}
            </p>
          )}
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600"
            type="submit"
          >
            {id ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEditEmployee;
