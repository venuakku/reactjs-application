import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/input.css";
import EmployeeList from "./EmployeeList";
import AppBar from "./AppBar";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    setError(null);
    try {
      setLoading(true);
      const response = await axios.get(
        "https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee"
      );
      setEmployees(response.data);
    } catch (error) {
      setError(
        error.response ? error.response.data : "Error fetching employees"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchId) => {
    if (searchId) {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${searchId}`
        );
        setEmployees([response.data]);
      } catch (error) {
        setError(error.response ? error.response.data : "Error fetching data");
      } finally {
        setLoading(false);
      }
    } else {
      fetchEmployees();
    }
  };

  return (
    <div>
      <AppBar handleSearch={handleSearch} />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <EmployeeList employees={employees} />
    </div>
  );
};

export default Home;
