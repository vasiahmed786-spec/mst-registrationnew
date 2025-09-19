import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../FormContext";
import FormCard from "../components/FormCard";
import FormInput from "../components/FormInput";

export default function AadhaarPage() {
  const [aadhaar, setAadhaar] = useState("");
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const onOk = () => {
  if (!/^\d{12}$/.test(aadhaar)) {
    alert("Enter a valid 12-digit Aadhaar number");
    return;
  }
    // save to global formData
    setFormData({ ...formData, aadhaar });
    navigate("/profile");
  };

  return (
    <FormCard title="Enter Aadhaar Number">
      <FormInput
        label="Aadhaar Number"
        value={aadhaar}
        onChange={(e) => setAadhaar(e.target.value)}
        placeholder="XXXX-XXXX-XXXX"
         maxLength={12}
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