const validate = (employee) => {
  const errors = {};
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!employee.name) errors.name = "Name is required";
  if (!employee.emailId) {
    errors.emailId = "Email is required";
  } else if (!regex.test(String(employee.emailId).toLowerCase())) {
    errors.emailId = "Email is invalid";
  }
  if (!employee.mobile) errors.mobile = "Mobile number is required";
  if (!employee.country) errors.country = "Country is required";
  if (!employee.state) errors.state = "State is required";
  if (!employee.district) errors.district = "District is required";
  return errors;
};

export default validate;
