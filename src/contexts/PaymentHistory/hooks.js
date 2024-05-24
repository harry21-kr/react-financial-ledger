import { useContext } from "react";
import {
  PaymentHistoryContext,
  PaymentHistoryDispatchContext,
} from "./Provider";

export const usePaymentHistoryList = () => {
  return useContext(PaymentHistoryContext);
};

export const usePaymentHistoryListDispatch = () => {
  return useContext(PaymentHistoryDispatchContext);
};
