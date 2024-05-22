import { useState } from "react";
import styled from "styled-components";
import PaymentHistoryForm from "../../components/HomePage/PaymentHistoryForm";
import PaymentHistoryList from "../../components/HomePage/PaymentHistoryList";
import PaymentHistoryMonth from "../../components/HomePage/PaymentHistoryMonth";
import { DefaultLayout, Flex } from "../../components/ui";
import useLocalStorage from "../../hooks/useLocalStorage";

const HomePage = () => {
  const { item: list, addItem: addList } = useLocalStorage("payItem");
  const [selectedMonth, setSelectedMonth] = useState(5);

  return (
    <DefaultLayout>
      <Wrap>
        <PaymentHistoryForm addList={addList} />
        <PaymentHistoryMonth
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <PaymentHistoryList selectedMonth={selectedMonth} list={list} />
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
