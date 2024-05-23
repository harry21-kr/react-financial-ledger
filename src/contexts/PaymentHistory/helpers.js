export const getInitialHistoryList = () => {
  const storedHistory = localStorage.getItem("payItem");
  return storedHistory ? JSON.parse(storedHistory) : [];
};
