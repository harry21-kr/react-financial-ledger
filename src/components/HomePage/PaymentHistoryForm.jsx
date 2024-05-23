import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addHistoryItem } from "../../store/paymentHistory/paymentHistorySlice";
import InputField from "../common/InputField";
import { Box, Button, Flex } from "../ui";

const initialPaymentHistoryItem = {
  id: 0,
  date: "2024-05-21",
  item: "",
  amount: 0,
  description: "",
};

export const PaymentHistoryForm = () => {
  const [paymentHistoryItem, setPaymentHistoryItem] = useState(
    initialPaymentHistoryItem
  );

  const dispatch = useDispatch();

  const handleSubmitHistory = () => {
    if (!paymentHistoryItem.item.length) {
      alert("지출 항목을 입력해주세요");
      return;
    } else if (!paymentHistoryItem.amount) {
      alert("금액을 입력해주세요");
      return;
    } else if (!paymentHistoryItem.description) {
      alert("지출 내용을 입력해주세요");
      return;
    }
    const newPaymentHistoryItem = { ...paymentHistoryItem, id: uuidv4() };
    dispatch(addHistoryItem(newPaymentHistoryItem));
    setPaymentHistoryItem({
      ...initialPaymentHistoryItem,
      date: paymentHistoryItem.date,
    });
  };

  return (
    <Box>
      <Flex $justifyContent="center" $alignItems="flex-end" $gap="10px">
        <InputField
          label="날짜"
          type="date"
          value={paymentHistoryItem.date}
          onChange={(e) =>
            setPaymentHistoryItem((prevItem) => ({
              ...prevItem,
              date: e.target.value,
            }))
          }
        />
        <InputField
          label="항목"
          type="text"
          value={paymentHistoryItem.item}
          placeholder="지출 항목"
          onChange={(e) =>
            setPaymentHistoryItem((prevItem) => ({
              ...prevItem,
              item: e.target.value,
            }))
          }
        />
        <InputField
          label="금액"
          type="number"
          value={paymentHistoryItem.amount}
          placeholder="지출 금액"
          onChange={(e) =>
            setPaymentHistoryItem((prevItem) => ({
              ...prevItem,
              amount: Number(e.target.value),
            }))
          }
        />
        <InputField
          label="내용"
          type="text"
          value={paymentHistoryItem.description}
          placeholder="지출 내용"
          onChange={(e) =>
            setPaymentHistoryItem((prevItem) => ({
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
