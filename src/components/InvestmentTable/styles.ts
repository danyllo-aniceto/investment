import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
  }
`;

export const TitleRow = styled.tr`
  background-color: #E9ECEF;
`;

export const TitleColumn = styled.th`
  color: #343A40;
`;

export const ContentRow = styled.tr`
  background-color: #fff;
`;

export const ContentColumn = styled.td`
  color: #2C3E50;
`;