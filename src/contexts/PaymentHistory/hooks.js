import { useContext } from "react";
import {
  PaymentHistoryContext,
  PaymentHistoryDispatchContext,
} from "./Provider";

export const usePaymentList = () => {
  return useContext(PaymentHistoryContext);
};

export const usePaymentListDispatch = () => {
  return useContext(PaymentHistoryDispatchContext);
};
