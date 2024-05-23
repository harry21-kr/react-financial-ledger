import { useSelector } from "react-redux";

export const usePaymentHistory = () => {
  return useSelector((state) => state.paymentHistory.history);
};
