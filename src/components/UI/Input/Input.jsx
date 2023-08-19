import { useState } from "react";

import { ClearIcon } from "./../../icons/ClearIcon";
import { EyeIcon } from "./../../icons/EyeIcon";
import "./Input.scss";
import { EyeDefault } from "./../../icons/EyeDefault";

export const Input = ({ title, type, name, placeholder }) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleClearClick = () => {
    console.log("dellete email");
    setValue("");
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPasswors) => !prevShowPasswors);
  };

  return (
    <label className="forms">
      <span className="forms__title">{title}</span>
      <div className="forms__input-wrapper">
        <input
          autoComplete="Off"
          className="forms__input"
          type={showPassword ? "text" : type}
          name={name}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        <div className="forms__input-svg">
          {type !== "password" && (
            <span onClick={handleClearClick}>
              <ClearIcon />
            </span>
          )}

          {type === "password" && (
            <span onClick={handleTogglePassword}>
              {showPassword && <EyeIcon />}
              {!showPassword && <EyeDefault />}
            </span>
          )}
        </div>
      </div>
    </label>
  );
};
