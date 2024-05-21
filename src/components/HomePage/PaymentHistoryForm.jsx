import styled from "styled-components";
import Box from "../ui/Box";
import Button from "../ui/Button";
import Flex from "../ui/Flex";
import Input from "../ui/Input";
import Text from "../ui/Text";

const PaymentHistoryForm = () => {
  return (
    <Box>
      <Wrap>
        <InputWrap>
          <Text fontSize="14px">날짜</Text>
          <Input type="date" />
        </InputWrap>
        <InputWrap>
          <Text fontSize="14px">항목</Text>
          <Input type="text" maxLength={10} placeholder="지출 항목" />
        </InputWrap>
        <InputWrap>
          <Text fontSize="14px">금액</Text>
          <Input type="number" placeholder="지출 금액" />
        </InputWrap>
        <InputWrap>
          <Text fontSize="14px">내용</Text>
          <Input type="text" placeholder="지출 내용" />
        </InputWrap>
        <SubmitButton>저장</SubmitButton>
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
