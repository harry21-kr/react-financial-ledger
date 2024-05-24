import { createContext, useEffect, useReducer } from "react";
import { paymentHistoryListReducer } from ".";
import { getInitialHistoryList } from "./helpers";

export const PaymentHistoryContext = createContext(null);
export const PaymentHistoryDispatchContext = createContext(null);

const PaymentHistoryProvider = ({ children }) => {
  const [paymentHistoryList, dispatch] = useReducer(
    paymentHistoryListReducer,
    [],
    getInitialHistoryList
  );

  useEffect(() => {
    localStorage.setItem("paymentHistory", JSON.stringify(paymentHistoryList));
  }, [paymentHistoryList]);

  return (
    <PaymentHistoryContext.Provider value={paymentHistoryList}>
      <PaymentHistoryDispatchContext.Provider value={dispatch}>
        {children}
      </PaymentHistoryDispatchContext.Provider>
    </PaymentHistoryContext.Provider>
  );
};

export default PaymentHistoryProvider;
