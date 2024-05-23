import { useState } from "react";
import styled from "styled-components";
import {
  PaymentHistoryForm,
  PaymentHistoryList,
  PaymentHistoryMonth,
} from "../../components/HomePage";
import { DefaultLayout, Flex } from "../../components/ui";

const HomePage = () => {
  const [selectedMonth, setSelectedMonth] = useState(5);

  return (
    <DefaultLayout>
      <Wrap>
        <PaymentHistoryForm />
        <PaymentHistoryMonth
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <PaymentHistoryList selectedMonth={selectedMonth} />
      </Wrap>
    </DefaultLayout>
  );
};

export default HomePage;

const Wrap = styled(Flex)`
  padding-top: 32px;
  padding-bottom: 32px;
  flex-direction: column;
  gap: 32px;
`;
