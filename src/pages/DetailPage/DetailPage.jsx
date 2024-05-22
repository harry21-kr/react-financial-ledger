import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Box, DefaultLayout, Flex, Text } from "../../components/ui";
import useLocalStorage from "../../hooks/useLocalStorage";

const DetailPage = () => {
  const { listId } = useParams();

  const { getItemById } = useLocalStorage("payItem");
  const { date, item, amount, description } = getItemById(listId);

  return (
    <DetailPageDefaultLayout>
      <Box>
        <Flex $flexDirection="column" $justifyContent="center" $gap="12px">
          <Text $fontSize="14px">날짜: {date}</Text>
          <Text $fontSize="18px">분야: {item}</Text>
          <Text $fontSize="24px" $fontWeight="bold">
            {description}에
          </Text>
          <Text $fontSize="24px" $fontWeight="bold" color="#007bff">
            {amount}
            {amount > 100000 ? "원이나 쓰셨네요! 참 대단해요!" : "원을 썻어요!"}
          </Text>
        </Flex>
      </Box>
    </DetailPageDefaultLayout>
  );
};

export default DetailPage;

const DetailPageDefaultLayout = styled(DefaultLayout)`
  padding-top: 32px;
`;
