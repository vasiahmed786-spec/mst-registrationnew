import React from "react";

export default function FormCard({ title, children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fa",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px 40px",
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: 400,
        }}
      >
        {title && (
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>{title}</h2>
        )}
        {/* 👇 This ensures content inside actually renders */}
        <div>{children}</div>
      </div>
    </div>
  );
}