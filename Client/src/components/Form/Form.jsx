import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validations } from "./validations";

const Form = ({ login }) => {
  const navigate = useNavigate();

  const [user, setUserData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = event => {
    const { value, name } = event.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));

    setErrors(validations({ ...user, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(user);
    console.log("Submit clicked");
    navigate("/home"); // Navegar a la página de inicio después del inicio de sesión exitoso
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Email(pabloganin@gmail.com)</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={handleInputChange}
        />
        {errors.email &&
          <p>
            {errors.email}
          </p>}
        <label>Password(123456)</label>
        <input
          name="password"
          type="text"
          placeholder="Ingrese tu password"
          value={user.password}
          onChange={handleInputChange}
        />
        {errors.password &&
          <p>
            {errors.password}
          </p>}
        <button type="submit" className="ingresar">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Form;
