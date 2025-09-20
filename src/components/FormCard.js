import React from "react";

export default function FormCard({ title, children }) {
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: 8,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        background: "#fff",
        display: "flex",
        flexDirection: "column",    // ✅ stack items vertically
        justifyContent: "flex-start", // ✅ align from top
        alignItems: "stretch",
      }}
    >
      {title && (
        <h2
          style={{
            marginBottom: 20,
            textAlign: "center",
            fontSize: "1.2em",
            color: "#333",
          }}
        >
          {title}
        </h2>
      )}
      {/* ✅ Ensure all children (inputs + buttons) display in order */}
      <div>{children}</div>
    </div>
  );
}
