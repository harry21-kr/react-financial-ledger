import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  EditPaymentHistory,
  PaymentHistoryDetail,
} from "../../components/DetailPage";
import { Box, DefaultLayout, Flex } from "../../components/ui";
import { usePaymentList } from "../../contexts/PaymentHistory/hooks";

const DetailPage = () => {
  const { listId } = useParams();

  const [isEditMode, setIsEditMode] = useState(false);

  const items = usePaymentList();
  const item = items.find((item) => item.id === listId);

  return (
    <DetailPageDefaultLayout>
      <Box>
        <Flex $flexDirection="column" $gap="12px">
          <Flex
            $flexDirection="column"
            $justifyContent="center"
            $alignItems="center"
            $gap="12px"
          >
            {isEditMode ? (
              <EditPaymentHistory item={item} setIsEditMode={setIsEditMode} />
            ) : (
              <PaymentHistoryDetail item={item} setIsEditMode={setIsEditMode} />
            )}
          </Flex>
        </Flex>
      </Box>
    </DetailPageDefaultLayout>
  );
};

export default DetailPage;

const DetailPageDefaultLayout = styled(DefaultLayout)`
  padding-top: 32px;
`;
