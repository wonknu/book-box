import { useState } from 'react';

export const useHeader = (current: string) => {
  const [tabActive, setTabActive] = useState<string>(current);
  
  return {
		tabActive,
    setTabActive
  };
}
