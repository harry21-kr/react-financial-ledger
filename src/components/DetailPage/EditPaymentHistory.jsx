import styled from "styled-components";

import { useState } from "react";
import { usePaymentHistoryListDispatch } from "../../contexts/PaymentHistory/hooks";
import InputField from "../common/InputField";
import { Button, Flex } from "../ui";

export const EditPaymentHistory = ({ item, setIsEditMode }) => {
  const [newItem, setNewItem] = useState(item);

  const dispatch = usePaymentHistoryListDispatch();

  const handleEditItem = () => {
    if (!newItem.title.length) {
      alert("올바른 항목을 입력해주세요");
      return;
    } else if (!newItem.amount) {
      alert("올바른 금액을 입력해주세요");
      return;
    } else if (!newItem.description.length) {
      alert("올바른 내용을 입력해주세요");
      return;
    }
    dispatch({ type: "editPaymentHistoryItem", ...newItem });
    alert("수정 완료");
    setIsEditMode(false);
  };

  return (
    <>
      <Flex $gap="10px">
        <InputField
          label="날짜"
          type="date"
          value={newItem.date}
          onChange={(e) =>
            setNewItem((prevItem) => ({
              ...prevItem,
              date: e.target.value,
            }))
          }
        />
        <InputField
          label="항목"
          type="text"
          value={newItem.title}
          placeholder="지출 항목"
          maxLength={10}
          onChange={(e) =>
            setNewItem((prevItem) => ({
              ...prevItem,
              title: e.target.value,
            }))
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
      </Flex>
      <Flex $justifyContent="center" $gap="12px">
        <EditConfirmButton onClick={handleEditItem}>완료</EditConfirmButton>
        <EditCancelButton onClick={() => setIsEditMode(false)}>
          취소
        </EditCancelButton>
      </Flex>
    </>
  );
};

const EditConfirmButton = styled(Button)`
  background-color: #007bff;
`;

const EditCancelButton = styled(Button)`
  background-color: #ff4d4d;
`;
