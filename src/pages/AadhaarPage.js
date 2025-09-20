import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { import React, { useContext } from "react";
import { FormContext } from "../FormContext"; } from "../FormContext";
import FormCard from "../components/FormCard";
import FormInput from "../components/FormInput";

export default function AadhaarPage() {
  const [aadhaar, setAadhaar] = useState("");
  const navigate = useNavigate();
  const { update } = import React, { useContext } from "react";
import { FormContext } from "../FormContext";();

  const onOk = () => {
    if (!aadhaar) {
      alert("Enter Aadhaar number");
      return;
    }
    update({ aadhaar });
    navigate("/profile");
  };

  return (
    <FormCard title="Enter Aadhaar Number">
      <FormInput
        label="Aadhaar Number"
        value={aadhaar}
        onChange={(e) => setAadhaar(e.target.value)}
        placeholder="XXXX-XXXX-XXXX"
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
