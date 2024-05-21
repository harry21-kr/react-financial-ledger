import { useState } from "react";
import styled from "styled-components";
import { Box, Button, Flex } from "../ui";

const PaymentHistoryMonth = () => {
  const [selectedMonth, setSelectedMonth] = useState(1);
  return (
    <Box>
      <Wrap>
        {Array.from({ length: 12 }).map((_, idx) => (
          <SelectMonthButton
            key={idx}
            isSelected={selectedMonth === idx}
            onClick={() => setSelectedMonth(idx)}
          >
            {idx + 1}월
          </SelectMonthButton>
        ))}
      </Wrap>
    </Box>
  );
};

export default PaymentHistoryMonth;

const Wrap = styled(Flex)`
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const SelectMonthButton = styled(Button)`
  background-color: ${({ isSelected }) => (isSelected ? "#2ec4b6" : "#F6F7FA")};
  width: 104px;
  height: 60px;
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
