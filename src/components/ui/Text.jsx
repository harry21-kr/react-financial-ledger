import styled from "styled-components";

export const Text = styled.p.attrs((props) => ({
  $fontSize: props.$fontSize || "16px",
  $fontWeight: props.$fontWeight || "normal",
}))`
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  color: ${({ color }) => color};
`;

export default Text;
