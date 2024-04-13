import { createContext, useContext, useState } from "react";

const FormContext = createContext(undefined);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const value = {
    formData,
    updateFormData: (data) => setFormData(data),
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = () => useContext(FormContext);
