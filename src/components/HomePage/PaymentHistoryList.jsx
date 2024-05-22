import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Box, Button, Flex, Text } from "../ui";

const PaymentHistoryList = ({ selectedMonth, list }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Wrap>
        {list
          ?.filter(({ date }) => {
            const formattedDate = new Date(date);
            return formattedDate.getMonth() === selectedMonth - 1;
          })
          .map(({ id, date, item, amount, description }) => (
            <ListButton key={id} onClick={() => navigate(`/detail/${id}`)}>
              <TextWrap>
                <Text $fontSize="14px">{date}</Text>
                <Flex>
                  <Text color="#007bff" $fontWeight="bold">
                    {item}&nbsp;-&nbsp;{description}
                  </Text>
                </Flex>
              </TextWrap>
              <Text color="#007bff" $fontWeight="bold">
                {amount} 원
              </Text>
            </ListButton>
          ))}
      </Wrap>
    </Box>
  );
};

export default PaymentHistoryList;

const Wrap = styled(Flex)`
  flex-direction: column;
  gap: 16px;
`;

const TextWrap = styled(Flex)`
  flex-direction: column;
  gap: 4px;
`;

const ListButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 64px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  color: black;
  padding: 15px 20px;

  &:hover {
    transform: scale(1.02);
  }
`;
