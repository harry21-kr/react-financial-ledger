export const getInitialHistoryList = () => {
  const storedPaymentHistoryList = localStorage.getItem("paymentHistory");
  return storedPaymentHistoryList ? JSON.parse(storedPaymentHistoryList) : [];
};
