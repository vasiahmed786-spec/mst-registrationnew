import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { import React, { useContext } from "react";
import { FormContext } from "../FormContext"; } from "../FormContext";
import FormCard from "../components/FormCard";
import FormInput from "../components/FormInput";

export default function ProfileFormPage() {
  const navigate = useNavigate();
  const { update } = import React, { useContext } from "react";
import { FormContext } from "../FormContext";();

  const [form, setForm] = useState({
    fullName: "",
    country: "",
    state: "",
    city: "",
    address1: "",
    address2: "",
    pincode: "",
    referral: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onRegister = () => {
    if (!form.fullName || !form.email || !form.password) {
      alert("Please fill required fields: Full Name, Email, Password");
      return;
    }
    update(form);
    navigate("/pan"); // ✅ goes directly to PAN page
  };

  const onCancel = () => {
    navigate("/"); // back to MobilePage
  };

  return (
    <FormCard title="Profile Information">
      <FormInput
        label="Full Name"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        placeholder="Your Name"
      />
      <FormInput
        label="Country"
        name="country"
        value={form.country}
        onChange={handleChange}
        placeholder="Country"
      />
      <FormInput
        label="State"
        name="state"
        value={form.state}
        onChange={handleChange}
        placeholder="State"
      />
      <FormInput
        label="City"
        name="city"
        value={form.city}
        onChange={handleChange}
        placeholder="City"
      />
      <FormInput
        label="Address Line 1"
        name="address1"
        value={form.address1}
        onChange={handleChange}
        placeholder="Address Line 1"
      />
      <FormInput
        label="Address Line 2"
        name="address2"
        value={form.address2}
        onChange={handleChange}
        placeholder="Address Line 2"
      />
      <FormInput
        label="Pin Code"
        name="pincode"
        value={form.pincode}
        onChange={handleChange}
        placeholder="123456"
      />
      <FormInput
        label="Referral Code"
        name="referral"
        value={form.referral}
        onChange={handleChange}
        placeholder="Optional"
      />

      {/* Masked Password */}
      <FormInput
        label="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="******"
      />
      <FormInput
        label="Email Address"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="you@example.com"
      />

      <div style={{ textAlign: "center", marginTop: 20 }}>
        <button
          onClick={onCancel}
          style={{
            padding: "10px 20px",
            marginRight: 10,
            background: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
        <button
          onClick={onRegister}
          style={{
            padding: "10px 20px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>
    </FormCard>
  );
}