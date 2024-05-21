import styled from "styled-components";

const Text = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default Text;
