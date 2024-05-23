import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { usePaymentListDispatch } from "../../contexts/PaymentHistory/hooks";
import InputField from "../common/InputField";
import { Box, Button, Flex } from "../ui";

const initialPayItem = {
  id: 0,
  date: "2024-05-21",
  item: "",
  amount: 0,
  description: "",
};

export const PaymentHistoryForm = () => {
  const [payItem, setPayItem] = useState(initialPayItem);

  const dispatch = usePaymentListDispatch();

  const handleSubmitHistory = () => {
    if (!payItem.item.length) {
      alert("지출 항목을 입력해주세요");
      return;
    } else if (!payItem.amount) {
      alert("금액을 입력해주세요");
      return;
    } else if (!payItem.description) {
      alert("지출 내용을 입력해주세요");
      return;
    }
    const newPayItem = { ...payItem, id: uuidv4() };
    dispatch({ type: "addItem", ...newPayItem });
    // addList(newPayItem);
    setPayItem({ ...initialPayItem, date: payItem.date });
  };

  return (
    <Box>
      <Flex $justifyContent="center" $alignItems="flex-end" $gap="10px">
        <InputField
          label="날짜"
          type="date"
          value={payItem.date}
          onChange={(e) =>
            setPayItem((prevItem) => ({ ...prevItem, date: e.target.value }))
          }
        />
        <InputField
          label="항목"
          type="text"
          value={payItem.item}
          placeholder="지출 항목"
          onChange={(e) =>
            setPayItem((prevItem) => ({ ...prevItem, item: e.target.value }))
          }
        />
        <InputField
          label="금액"
          type="number"
          value={payItem.amount}
          placeholder="지출 금액"
          onChange={(e) =>
            setPayItem((prevItem) => ({
              ...prevItem,
              amount: Number(e.target.value),
            }))
          }
        />
        <InputField
          label="내용"
          type="text"
          value={payItem.description}
          placeholder="지출 내용"
          onChange={(e) =>
            setPayItem((prevItem) => ({
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
