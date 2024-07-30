import React, { createContext, useState, useContext } from 'react';

const OrganizationContext = createContext();

export const OrganizationProvider = ({ children }) => {
  const [isC3, setIsC3] = useState(true);

  const toggleOrganization = () => {
    setIsC3(prevState => !prevState);
  };

  return (
    <OrganizationContext.Provider value={{ isC3, toggleOrganization }}>
      {children}
    </OrganizationContext.Provider>
  );
};

export const useOrganization = () => useContext(OrganizationContext);