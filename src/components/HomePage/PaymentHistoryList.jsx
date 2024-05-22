import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button, Flex, Text } from "../ui";

const PaymentHistoryList = ({ selectedMonth, list }) => {
  return (
    <Box>
      <Wrap>
        {list
          ?.filter(({ date }) => {
            const formattedDate = new Date(date);
            return formattedDate.getMonth() === selectedMonth - 1;
          })
          .map(({ id, date, item, amount, description }) => (
            <ListButton key={id}>
              <Link to={`/detail/${id}`}>
                <Text>{date}</Text>
                <Text>{item}</Text>
                <Text>{amount}</Text>
                <Text>{description}</Text>
              </Link>
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

const ListButton = styled(Button)`
  width: 100%;
  min-height: 64px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  color: black;

  &:hover {
    transform: scale(1.02);
  }
`;
