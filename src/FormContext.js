import React, { createContext, useState } from "react";

// Create the context
export const FormContext = createContext();

// Provider component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    mobile: "",
    aadhaar: "",
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
    pan: "",
    walletAddress: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};