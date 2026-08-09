// Kontekst i hook demo — poza plikiem komponentu (react-refresh).
import { createContext, useContext } from "react";

export const DemoContext = createContext<{ openDemo: () => void }>({ openDemo: () => {} });

export const useDemo = () => useContext(DemoContext);
