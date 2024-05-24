import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { usePaymentHistoryListDispatch } from "../../contexts/PaymentHistory/hooks";
import InputField from "../common/InputField";
import { Box, Button, Flex } from "../ui";

const initialItem = {
  id: 0,
  date: "2024-05-21",
  title: "",
  amount: 0,
  description: "",
};

export const PaymentHistoryForm = () => {
  const [newItem, setNewItem] = useState(initialItem);

  const dispatch = usePaymentHistoryListDispatch();

  const handleSubmitHistory = () => {
    if (!newItem.title.length) {
      alert("지출 항목을 입력해주세요");
      return;
    } else if (!newItem.amount) {
      alert("금액을 입력해주세요");
      return;
    } else if (!newItem.description) {
      alert("지출 내용을 입력해주세요");
      return;
    }
    const newItemWithId = { ...newItem, id: uuidv4() };
    dispatch({ type: "addPaymentHistoryItem", ...newItemWithId });
    setNewItem({ ...initialItem, date: newItem.date });
  };

  return (
    <Box>
      <Flex $justifyContent="center" $alignItems="flex-end" $gap="10px">
        <InputField
          label="날짜"
          type="date"
          value={newItem.date}
          onChange={(e) =>
            setNewItem((prevItem) => ({ ...prevItem, date: e.target.value }))
          }
        />
        <InputField
          label="항목"
          type="text"
          value={newItem.title}
          placeholder="지출 항목"
          onChange={(e) =>
            setNewItem((prevItem) => ({ ...prevItem, title: e.target.value }))
          }
        />
        <InputField
          label="금액"
          type="number"
          value={newItem.amount}
          placeholder="지출 금액"
          onChange={(e) =>
            setNewItem((prevItem) => ({
              ...prevItem,
              amount: Number(e.target.value),
            }))
          }
        />
        <InputField
          label="내용"
          type="text"
          value={newItem.description}
          placeholder="지출 내용"
          onChange={(e) =>
            setNewItem((prevItem) => ({
              ...prevItem,
              description: e.target.value,
            }))
          }
        />
        <SubmitButton onClick={handleSubmitHistory}>저장</SubmitButton>
      </Flex>
    </Box>
  );
};

const SubmitButton = styled(Button)`
  height: 34px;
  background-color: #007bff;
`;
