import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  PaymentHistoryForm,
  PaymentHistoryList,
  PaymentHistoryMonth,
} from "../../components/HomePage";
import { DefaultLayout, Flex } from "../../components/ui";

const HomePage = () => {
  const [list, setList] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(5);

  const addList = (value) => {
    const formattedItem = JSON.stringify([...list, value]);
    localStorage.setItem("payItem", formattedItem);
    setList([...list, value]);
  };

  useEffect(() => {
    const localItem = JSON.parse(localStorage.getItem("payItem"));
    setList(localItem ?? []);
  }, []);

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
  padding-bottom: 32px;
  flex-direction: column;
  gap: 32px;
`;
