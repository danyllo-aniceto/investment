import styled from "styled-components";

export const StyledButton = styled.button<{ variant: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({ variant }) => (variant === "icon" ? "8px" : "12px 16px")};
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: 0.2s;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `background: #007bff; color: #fff; &:hover { background: #0056b3; }`;
      case "secondary":
        return `background: #28a745; color: #fff; &:hover { background: #1e7e34; }`;
      case "danger":
        return `background: #dc3545; color: #fff; &:hover { background: #b02a37; }`;
      case "icon":
        return `background: transparent; color: inherit; padding: 8px; &:hover { opacity: 0.7; }`;
      default:
        return "";
    }
  }}
`;