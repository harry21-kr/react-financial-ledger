import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  PaymentHistoryForm,
  PaymentHistoryList,
  PaymentHistoryMonth,
} from "../../components/HomePage";
import { DefaultLayout, Flex } from "../../components/ui";

const HomePage = () => {
  const [paymentHistoryList, setPaymentHistoryList] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(5);

  const addPaymentHistoryList = (value) => {
    const formattedList = JSON.stringify([...paymentHistoryList, value]);
    localStorage.setItem("paymentHistory", formattedList);
    setPaymentHistoryList([...paymentHistoryList, value]);
  };

  useEffect(() => {
    const localItem = JSON.parse(localStorage.getItem("paymentHistory"));
    setPaymentHistoryList(localItem ?? []);
  }, []);

  return (
    <HomePageDefaultLayout>
      <Wrap>
        <PaymentHistoryForm addPaymentHistoryList={addPaymentHistoryList} />
        <PaymentHistoryMonth
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <PaymentHistoryList
          selectedMonth={selectedMonth}
          list={paymentHistoryList}
        />
      </Wrap>
    </HomePageDefaultLayout>
  );
};

export default HomePage;

const HomePageDefaultLayout = styled(DefaultLayout)`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const Wrap = styled(Flex)`
  flex-direction: column;
  gap: 32px;
`;
