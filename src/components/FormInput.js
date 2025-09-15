import React from "react";

export default function FormInput({
  label,
  value,
  onChange,
  readOnly = false,
  placeholder = "",
  name,
}) {
  // 👇 if label is Password, use type="password"
  const inputType = label.toLowerCase() === "password" ? "password" : "text";

  return (
    <div style={{ marginBottom: 16 }}>
      <label
        style={{
          display: "block",
          marginBottom: 6,
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {label}
      </label>
      <input
        type={inputType}
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        style={{
          width: "100%",
          padding: "10px 12px",
          border: "1px solid #ccc",
          borderRadius: 8,
          fontSize: "1em",
          background: readOnly ? "#f1f1f1" : "#fff",
          color: "#333",
          outline: "none",
        }}
      />
    </div>
  );
}