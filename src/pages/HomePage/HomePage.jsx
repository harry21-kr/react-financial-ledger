import styled from "styled-components";
import PaymentHistoryForm from "../../components/HomePage/PaymentHistoryForm";
import PaymentHistoryMonth from "../../components/HomePage/PaymentHistoryMonth";
import { DefaultLayout, Flex } from "../../components/ui";

const HomePage = () => {
  return (
    <DefaultLayout>
      <Wrap>
        <PaymentHistoryForm />
        <PaymentHistoryMonth />
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
