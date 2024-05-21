import styled from "styled-components";
import DefaultLayout from "../../components/ui/DefaultLayout";
import Flex from "../../components/ui/Flex";

const HomePage = () => {
  return (
    <DefaultLayout>
      <Wrap></Wrap>
    </DefaultLayout>
  );
};

export default HomePage;

const Wrap = styled(Flex)`
  padding-top: 40px;
  flex-direction: column;
  gap: 40px;
`;
