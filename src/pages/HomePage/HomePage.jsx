import styled from "styled-components";
import PaymentHistoryForm from "../../components/HomePage/PaymentHistoryForm";
import { DefaultLayout, Flex } from "../../components/ui";

const HomePage = () => {
  return (
    <DefaultLayout>
      <Wrap>
        <PaymentHistoryForm />
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
