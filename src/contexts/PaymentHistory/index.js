export const paymentHistoryListReducer = (list, action) => {
  switch (action.type) {
    case "addPaymentHistoryItem":
      return [
        ...list,
        {
          id: action.id,
          title: action.title,
          date: action.date,
          amount: action.amount,
          description: action.description,
        },
      ];

    case "deletePaymentHistoryItem":
      return list.filter((item) => item.id !== action.id);

    case "editPaymentHistoryItem":
      return list.map((prevItem) =>
        prevItem.id === action.id
          ? {
              id: prevItem.id,
              title: action.title,
              date: action.date,
              amount: action.amount,
              description: action.description,
            }
          : prevItem
      );
  }
};
