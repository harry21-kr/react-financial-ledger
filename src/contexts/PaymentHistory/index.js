export const historyListReducer = (list, action) => {
  switch (action.type) {
    case "addItem":
      return [
        ...list,
        {
          id: action.id,
          item: action.item,
          date: action.date,
          amount: action.amount,
          description: action.description,
        },
      ];

    case "deleteItem":
      return list.filter((item) => item.id !== action.id);

    case "editItem":
      return list.map((prevItem) =>
        prevItem.id === action.id
          ? {
              id: prevItem.id,
              item: action.item,
              date: action.date,
              amount: action.amount,
              description: action.description,
            }
          : prevItem
      );
  }
};
