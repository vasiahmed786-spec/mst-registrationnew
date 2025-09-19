import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../FormContext";
import FormCard from "../components/FormCard";
import FormInput from "../components/FormInput";

export default function ProfileFormPage() {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext);

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
  if (!form.fullName) {
    alert("Full Name is required");
    return;
  }
  if (!/^\d{6}$/.test(form.pincode)) {
    alert("Enter a valid 6-digit Pin Code");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    alert("Enter a valid Email address");
    return;
  }
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(form.password)
  ) {
    alert("Password must be at least 8 characters, include upper/lowercase, number, and special character");
    return;
  }
    // Save into global formData
    setFormData({ ...formData, ...form });
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
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="******"
         maxLength={20}
      />
      <FormInput
        label="Email Address"
        name="email"
        type="email"
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
