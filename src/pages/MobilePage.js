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
    if (!mobile) {
      alert("Enter mobile number");
      return;
    }
    update({ mobile });
    navigate("/aadhaar");
  };

  return (
    <FormCard title="Enter Mobile Number">
      <FormInput
        label="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder=""
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