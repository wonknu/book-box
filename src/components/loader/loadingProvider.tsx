import React, { useState } from 'react';
import LoadingContext from './LoadingContext';

const LoadingProvider = ({ children }: {children: React.ReactNode}) => {

  const [loading, setLoading] = useState<boolean>(true);

  return (
    <LoadingContext.Provider value={{loading, setLoading}}>
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingProvider;
