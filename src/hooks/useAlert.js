import { useState } from 'react';

const useAlert = (options) => {
  const defaultOptions = {
    active: false,
    message: '',
    type: '',
    autoClose: true,
  };
  const [alert, setAlert] = useState({
    ...defaultOptions,
    ...options,
  });
  const togleAlert = () => {
    setAlert(!alert.active);
  };

  // ---
  return {
    alert,
    setAlert,
    togleAlert,
  };
};

export default useAlert;
