import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../FormContext";
import FormCard from "../components/FormCard";
import FormInput from "../components/FormInput";

export default function MobilePage() {
  const [mobile, setMobile] = useState("");
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const onOk = () => {
  if (!/^\d{10}$/.test(mobile)) {
    alert("Enter a valid 10-digit mobile number");
    return;
  }
    // Save into global formData
    setFormData({ ...formData, mobile });
    navigate("/aadhaar");
  };

  return (
    <FormCard title="Enter Mobile Number">
      <FormInput
        label="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter your 10-digit number"
         maxLength={10}
      />
      <div style={{ textAlign: "center" }}>
        <button
          onClick={onOk}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          OK
        </button>
      </div>
    </FormCard>
  );
}

