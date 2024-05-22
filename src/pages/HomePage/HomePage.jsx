import { useState } from "react";
import styled from "styled-components";
import PaymentHistoryForm from "../../components/HomePage/PaymentHistoryForm";
import PaymentHistoryList from "../../components/HomePage/PaymentHistoryList";
import PaymentHistoryMonth from "../../components/HomePage/PaymentHistoryMonth";
import { DefaultLayout, Flex } from "../../components/ui";

const HomePage = () => {
  const [selectedMonth, setSelectedMonth] = useState(1);
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
  flex-direction: column;
  gap: 32px;
`;
