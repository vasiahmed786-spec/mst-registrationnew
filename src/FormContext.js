import React, { createContext, useContext, useState } from "react";

// Create context
const FormContext = createContext();

// Context provider
export function FormProvider({ children }) {
  const [data, setData] = useState({});

  // Function to update form data
  const update = (values) => {
    setData((prev) => ({ ...prev, ...values }));
  };

  return (
    <FormContext.Provider value={{ data, update }}>
      {children}
    </FormContext.Provider>
  );
}

// Hook to use form data
export function import React, { useContext } from "react";
import { FormContext } from "../FormContext";() {
  return import React, { useContext } from "react";
import { FormContext } from "../FormContext";;
}