import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  EditPaymentHistory,
  PaymentHistoryDetail,
} from "../../components/DetailPage";
import { Box, DefaultLayout, Flex } from "../../components/ui";

const DetailPage = () => {
  const { listId } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({
    id: listId,
    date: "2024-05-30",
    item: "",
    amount: 0,
    description: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const handleConfirmEditItem = () => {
    if (!item.item.length) {
      alert("올바른 항목을 입력해주세요");
      return;
    } else if (!item.amount) {
      alert("올바른 금액을 입력해주세요");
      return;
    } else if (!item.description.length) {
      alert("올바른 내용을 입력해주세요");
      return;
    }
    const newItems = items.map((prevItem) =>
      prevItem.id === listId ? item : prevItem
    );
    localStorage.setItem("payItem", JSON.stringify(newItems));
    alert("수정 완료");
    setIsEditMode(false);
  };

  const handleCancelEditItem = () => {
    setItem(items.find((item) => item.id === listId));
    setIsEditMode(false);
  };

  const handleDeleteItem = () => {
    const newItems = items.filter((item) => item.id !== listId);
    localStorage.setItem("payItem", JSON.stringify(newItems));
    alert("삭제 완료");
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem("payItem")) || [];
    setItems(localItems);
    setItem(localItems.find((item) => item.id === listId));
  }, [listId]);

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
              <EditPaymentHistory
                item={item}
                setItem={setItem}
                handleCancelEditItem={handleCancelEditItem}
                handleConfirmEditItem={handleConfirmEditItem}
              />
            ) : (
              <PaymentHistoryDetail
                item={item}
                setIsEditMode={setIsEditMode}
                handleDeleteItem={handleDeleteItem}
              />
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
