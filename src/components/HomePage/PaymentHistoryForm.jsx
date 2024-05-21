import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { Box, Button, Flex, Input, Text } from "../ui";

const PaymentHistoryForm = () => {
  const [payItem, setPayItem] = useState({
    id: 0,
    date: "2024-05-21",
    item: "",
    amount: 0,
    description: "",
  });

  const handleSubmitHistory = () => {
    const newPayItem = { ...payItem, id: uuidv4() };
    const prevItems = JSON.parse(localStorage.getItem("payItem"));
    localStorage.setItem(
      "payItem",
      prevItems
        ? JSON.stringify([...prevItems, newPayItem])
        : JSON.stringify([newPayItem])
    );
    setPayItem((prevItem) => ({
      id: 0,
      date: prevItem.date,
      item: "",
      amount: 0,
      description: "",
    }));
  };

  return (
    <Box>
      <Wrap>
        <InputWrap>
          <Text fontSize="14px">날짜</Text>
          <Input
            type="date"
            value={payItem.date}
            onChange={(e) =>
              setPayItem((prevItem) => ({ ...prevItem, date: e.target.value }))
            }
          />
        </InputWrap>
        <InputWrap>
          <Text fontSize="14px">항목</Text>
          <Input
            type="text"
            value={payItem.item}
            maxLength={10}
            placeholder="지출 항목"
            onChange={(e) =>
              setPayItem((prevItem) => ({ ...prevItem, item: e.target.value }))
            }
          />
        </InputWrap>
        <InputWrap>
          <Text fontSize="14px">금액</Text>
          <Input
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
        </InputWrap>
        <InputWrap>
          <Text fontSize="14px">내용</Text>
          <Input
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
        </InputWrap>
        <SubmitButton onClick={handleSubmitHistory}>저장</SubmitButton>
      </Wrap>
    </Box>
  );
};

export default PaymentHistoryForm;

const Wrap = styled(Flex)`
  gap: 10px;
  justify-content: center;
  align-items: flex-end;
`;

const InputWrap = styled(Flex)`
  flex-direction: column;
  gap: 5px;
`;

const SubmitButton = styled(Button)`
  height: 34px;
  background-color: #007bff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
