import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    religion: "",
    phone: "",
    email: "",
    occupation: "",
    residentialAddress: "",
    stateOfResidence: "",
    stateOfOrigin: "",
    localGovtOrigin: "",
    townOfOrigin: "",
    ward: "",
    nationalId: "",
    disability: "No",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerVoter(formData);
      navigate("/success", { state: { voterData: response.data } });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="registration-page">
      <h1>INEC REGISTRATION</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        {/* Form fields */}
        <div className="form-row">
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          {/* Add other form fields */}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
