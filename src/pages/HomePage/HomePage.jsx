import styled from "styled-components";
import PaymentForm from "../../components/HomePage/PayForm";
import DefaultLayout from "../../components/ui/DefaultLayout";
import Flex from "../../components/ui/Flex";

const HomePage = () => {
  return (
    <DefaultLayout>
      <Wrap>
        <PaymentForm />
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
