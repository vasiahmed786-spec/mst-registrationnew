import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../FormContext";
import FormCard from "../components/FormCard";
import FormInput from "../components/FormInput";

export default function MobilePage() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  const { update } = useFormData();

  const onOk = () => {
    // Validate: must be 10 digits
    if (!/^\d{10}$/.test(mobile)) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }
    update({ mobile });
    navigate("/aadhaar"); // go to Aadhaar page
  };

  return (
    <FormCard title="Enter Mobile Number">
      <FormInput
        label="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="10-digit mobile number"
      />
      <p style={{ color: "red", textAlign: "center" }}>DEBUG: Buttons below</p>
      <div style={{ textAlign: "center", marginTop: 16 }}>
        {/* Normal user flow */}
        <button
          onClick={onOk}
          style={{
            padding: "10px 20px",
            marginRight: 10,
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          OK
        </button>

        {/* Admin flow */}
        <button
          onClick={() => navigate("/admin-login")}
          style={{
             display: "block",
            marginTop: "20px",
    padding: "20px 40px",
    background: "orange",
    color: "black",
    fontWeight: "bold",
    border: "2px solid red",
    borderRadius: 6,
    cursor: "pointer",
          }}
        >
          Go to Admin Login
        </button>
      </div>
    </FormCard>
  );
}