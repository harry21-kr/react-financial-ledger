import styled from "styled-components";

const FlexBox = ({
  width = "100%",
  height = "100%",
  flexDirection = "row",
  justifyContent = "center",
  alignItems = "center",
  children,
}) => {
  return (
    <StyledFlexBox
      width={width}
      height={height}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </StyledFlexBox>
  );
};

const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${(alignItems) => alignItems};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-width: 375px;
  max-width: 800px;
  padding: 20px;
  background-color: white;
  border-radius: 16px;
`;

export default FlexBox;
