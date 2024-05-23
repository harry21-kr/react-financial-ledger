import { createContext, useEffect, useReducer } from "react";
import { historyListReducer } from ".";
import { getInitialHistoryList } from "./helpers";

export const PaymentHistoryContext = createContext(null);
export const PaymentHistoryDispatchContext = createContext(null);

const PaymentHistoryProvider = ({ children }) => {
  const [historyList, dispatch] = useReducer(
    historyListReducer,
    [],
    getInitialHistoryList
  );

  useEffect(() => {
    localStorage.setItem("payItem", JSON.stringify(historyList));
  }, [historyList]);

  return (
    <PaymentHistoryContext.Provider value={historyList}>
      <PaymentHistoryDispatchContext.Provider value={dispatch}>
        {children}
      </PaymentHistoryDispatchContext.Provider>
    </PaymentHistoryContext.Provider>
  );
};

export default PaymentHistoryProvider;
