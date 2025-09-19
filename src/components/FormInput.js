import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function FormInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  readOnly,
  name,
  maxLength,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = label.toLowerCase().includes("password");
  const inputType = isPasswordField ? (showPassword ? "text" : "password") : type;

  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", marginBottom: 6, fontWeight: "bold" }}>
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <input
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          maxLength={maxLength}
          style={{
            width: "100%",
            padding: isPasswordField ? "10px 40px 10px 10px" : "10px",
            border: "1px solid #ccc",
            borderRadius: 6,
          }}
        />
        {isPasswordField && (
          <FaEye
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: showPassword ? "#007bff" : "#666",
            }}
          />
        )}
      </div>
    </div>
  );
}