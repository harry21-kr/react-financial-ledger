import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  Box,
  Button,
  DefaultLayout,
  Flex,
  Input,
  Text,
} from "../../components/ui";
import { numberWithCommas } from "../../utils";

const DetailPage = () => {
  const { listId } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({
    id: listId,
    date: "2024-05-30",
    item: "",
    amount: 0,
    description: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const localItems = useRef(null);

  const handleConfirmEditItem = () => {
    const newItems = localItems.current.map((prevItem) =>
      prevItem.id === listId ? item : prevItem
    );
    localStorage.setItem("payItem", JSON.stringify(newItems));
    alert("수정 완료");
    setIsEditMode(false);
  };

  const handleCancelEditItem = () => {
    setItem(localItems.current.find((item) => item.id === listId));
    setIsEditMode(false);
  };

  const handleDeleteItem = () => {
    const newItems = localItems.current.filter((item) => item.id !== listId);
    localStorage.setItem("payItem", JSON.stringify(newItems));
    alert("삭제 완료");
    navigate("/", { replace: true });
  };

  useEffect(() => {
    localItems.current = JSON.parse(localStorage.getItem("payItem"));
    setItem(localItems.current.find((item) => item.id === listId));
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
              <>
                <Flex $gap="10px">
                  <Flex $flexDirection="column" $gap="4px">
                    <Text fontSize="14px">날짜</Text>
                    <Input
                      type="date"
                      value={item.date}
                      onChange={(e) =>
                        setItem((prevItem) => ({
                          ...prevItem,
                          date: e.target.value,
                        }))
                      }
                    />
                  </Flex>
                  <Flex $flexDirection="column" $gap="4px">
                    <Text fontSize="14px">항목</Text>
                    <Input
                      type="text"
                      maxLength={10}
                      placeholder={item.item}
                      onChange={(e) =>
                        setItem((prevItem) => ({
                          ...prevItem,
                          item: e.target.value,
                        }))
                      }
                    />
                  </Flex>
                  <Flex $flexDirection="column" $gap="4px">
                    <Text fontSize="14px">금액</Text>
                    <Input
                      type="number"
                      placeholder={item.amount}
                      onChange={(e) =>
                        setItem((prevItem) => ({
                          ...prevItem,
                          amount: Number(e.target.value),
                        }))
                      }
                    />
                  </Flex>
                  <Flex $flexDirection="column" $gap="4px">
                    <Text fontSize="14px">내용</Text>
                    <Input
                      type="text"
                      placeholder={item.description}
                      onChange={(e) =>
                        setItem((prevItem) => ({
                          ...prevItem,
                          description: e.target.value,
                        }))
                      }
                    />
                  </Flex>
                </Flex>
                <Flex $justifyContent="center" $gap="12px">
                  <EditConfirmButton onClick={handleConfirmEditItem}>
                    완료
                  </EditConfirmButton>
                  <EditCancelButton onClick={handleCancelEditItem}>
                    취소
                  </EditCancelButton>
                </Flex>
              </>
            ) : (
              <>
                <Text $fontSize="14px">날짜: {item.date}</Text>
                <Text $fontSize="18px">분야: {item.item}</Text>
                <Text $fontSize="24px" $fontWeight="bold">
                  {item.description}에
                </Text>
                <Text $fontSize="24px" $fontWeight="bold" $color="#007bff">
                  {numberWithCommas(item.amount)}
                  {item.amount > 100000
                    ? "원이나 쓰셨네요! 참 대단해요!"
                    : "원을 썻어요!"}
                </Text>
                <Flex $justifyContent="center" $gap="12px">
                  <EditButton onClick={() => setIsEditMode(true)}>
                    수정
                  </EditButton>
                  <DeleteButton onClick={handleDeleteItem}>삭제</DeleteButton>
                  <BackButton onClick={() => navigate("/")}>
                    뒤로 가기
                  </BackButton>
                </Flex>
              </>
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

const EditButton = styled(Button)`
  background-color: #007bff;
`;

const EditConfirmButton = styled(Button)`
  background-color: #007bff;
`;

const EditCancelButton = styled(Button)`
  background-color: #ff4d4d;
`;

const DeleteButton = styled(Button)`
  background-color: #ff4d4d;
`;

const BackButton = styled(Button)`
  background-color: #6c757d;
`;
