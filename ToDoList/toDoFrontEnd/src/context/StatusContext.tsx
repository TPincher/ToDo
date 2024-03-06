import { createContext, useEffect, useState, ReactNode } from "react";
import { getAllStatuses } from "../services/status-services";

interface StatusContextProps {
  children: ReactNode;
}

interface StatusContextValue {
  status: string[];
  setStatus: (status: string[]) => void;
}

export const StatusContext = createContext<StatusContextValue | null>(null);

const StatusContextProvider = ({ children }: StatusContextProps) => {
  const [status, setStatus] = useState<string[]>([]);

  useEffect(() => {
    getAllStatuses()
      .then((status) => setStatus(status))
      .catch(console.warn);
  }, []);

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusContextProvider;
