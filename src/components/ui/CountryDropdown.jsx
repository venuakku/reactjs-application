import axios from "axios";
import { useEffect, useState } from "react";

function CountryDropdown({ employee, onChange }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        "https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/country"
      );
      setCountries(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  return (
    <div className="flex justify-between">
      <label className="font-semibold w-2/12" htmlFor="country">
        Country:{" "}
      </label>
      <select
        name="country"
        value={employee.country}
        onChange={onChange}
        className="w-10/12 h-10 px-4 outline-sky-500 border border-black/25 rounded"
      >
        <option />
        {countries.map((country) => {
          return (
            <option key={country.id} value={country.country}>
              {country.country}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CountryDropdown;
