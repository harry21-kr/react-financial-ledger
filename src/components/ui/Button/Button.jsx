import styled from "styled-components";

const Button = ({
  width = "auto",
  height = "auto",
  value = "",
  onClick,
  disabled = false,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-width: 64px;
  min-height: 34px;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  transition: all 0.3s;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export default Button;
