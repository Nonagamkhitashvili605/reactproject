import React, { useState } from "react";

function PasswordInputWithToggle() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type={showPassword ? "text" : "password"}
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordInputWithToggle;
