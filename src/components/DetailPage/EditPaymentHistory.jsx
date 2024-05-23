import styled from "styled-components";
import InputField from "../InputField";
import { Button, Flex } from "../ui";

export const EditPaymentHistory = ({
  item,
  setItem,
  handleConfirmEditItem,
  handleCancelEditItem,
}) => {
  return (
    <>
      <Flex $gap="10px">
        <InputField
          label="날짜"
          type="date"
          value={item.date}
          onChange={(e) =>
            setItem((prevItem) => ({
              ...prevItem,
              date: e.target.value,
            }))
          }
        />
        <InputField
          label="항목"
          type="text"
          value={item.item}
          placeholder="지출 항목"
          maxLength={10}
          onChange={(e) =>
            setItem((prevItem) => ({
              ...prevItem,
              item: e.target.value,
            }))
          }
        />
        <InputField
          label="금액"
          type="number"
          value={item.amount}
          placeholder="지출 금액"
          onChange={(e) =>
            setItem((prevItem) => ({
              ...prevItem,
              amount: Number(e.target.value),
            }))
          }
        />
        <InputField
          label="내용"
          type="text"
          value={item.description}
          placeholder="지출 내용"
          onChange={(e) =>
            setItem((prevItem) => ({
              ...prevItem,
              description: e.target.value,
            }))
          }
        />
      </Flex>
      <Flex $justifyContent="center" $gap="12px">
        <EditConfirmButton onClick={handleConfirmEditItem}>
          완료
        </EditConfirmButton>
        <EditCancelButton onClick={handleCancelEditItem}>취소</EditCancelButton>
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
