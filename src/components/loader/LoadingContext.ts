import { createContext } from 'react'

const LoadingContext = createContext({
  loading: true,
  setLoading: (values: boolean) => {}
});

export default LoadingContext;
