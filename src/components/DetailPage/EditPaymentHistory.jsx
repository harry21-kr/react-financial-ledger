import styled from "styled-components";
import { Button, Flex, Input, Text } from "../ui";

export const EditPaymentHistory = ({
  item,
  setItem,
  handleConfirmEditItem,
  handleCancelEditItem,
}) => {
  return (
    <>
      <Flex $gap="10px">
        <Flex $flexDirection="column" $gap="4px">
          <Text fontSize="14px">날짜</Text>
          <Input
            type="date"
            value={item.date}
            onChange={(e) =>
              setItem((prevItem) => ({
                ...prevItem,
                date: e.target.value,
              }))
            }
          />
        </Flex>
        <Flex $flexDirection="column" $gap="4px">
          <Text fontSize="14px">항목</Text>
          <Input
            type="text"
            maxLength={10}
            value={item.item}
            onChange={(e) =>
              setItem((prevItem) => ({
                ...prevItem,
                item: e.target.value,
              }))
            }
          />
        </Flex>
        <Flex $flexDirection="column" $gap="4px">
          <Text fontSize="14px">금액</Text>
          <Input
            type="number"
            value={item.amount}
            onChange={(e) =>
              setItem((prevItem) => ({
                ...prevItem,
                amount: Number(e.target.value),
              }))
            }
          />
        </Flex>
        <Flex $flexDirection="column" $gap="4px">
          <Text fontSize="14px">내용</Text>
          <Input
            type="text"
            value={item.description}
            onChange={(e) =>
              setItem((prevItem) => ({
                ...prevItem,
                description: e.target.value,
              }))
            }
          />
        </Flex>
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
