import styled from "styled-components";

const Box = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-width: 375px;
  max-width: 800px;
  padding: 20px;
  background-color: white;
  border-radius: 16px;
`;

export default Box;
