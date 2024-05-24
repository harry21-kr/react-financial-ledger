import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  EditPaymentHistory,
  PaymentHistoryDetail,
} from "../../components/DetailPage";
import { Box, DefaultLayout, Flex } from "../../components/ui";

const DetailPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [paymentHistoryList, setPaymentHistoryList] = useState([]);
  const [item, setItem] = useState({
    id: itemId,
    date: "2024-05-30",
    title: "",
    amount: 0,
    description: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditItem = () => {
    if (!item.title.length) {
      alert("올바른 항목을 입력해주세요");
      return;
    } else if (!item.amount) {
      alert("올바른 금액을 입력해주세요");
      return;
    } else if (!item.description.length) {
      alert("올바른 내용을 입력해주세요");
      return;
    }
    const newPaymentHistoryList = paymentHistoryList.map((prevItem) =>
      prevItem.id === itemId ? item : prevItem
    );
    setPaymentHistoryList(newPaymentHistoryList);
    localStorage.setItem(
      "paymentHistory",
      JSON.stringify(newPaymentHistoryList)
    );
    alert("수정 완료");
    setIsEditMode(false);
  };

  const handleCancelEditItem = () => {
    setItem(paymentHistoryList.find((item) => item.id === itemId));
    setIsEditMode(false);
  };

  const handleDeleteItem = () => {
    const newPaymentHistoryList = paymentHistoryList.filter(
      (item) => item.id !== itemId
    );
    localStorage.setItem(
      "paymentHistory",
      JSON.stringify(newPaymentHistoryList)
    );
    alert("삭제 완료");
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem("paymentHistory")) || [];
    setPaymentHistoryList(localItems);
    setItem(localItems.find((item) => item.id === itemId));
  }, [itemId]);

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
                handleEditItem={handleEditItem}
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
