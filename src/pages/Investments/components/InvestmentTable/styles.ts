import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;

  @media screen and (max-width: 750px) {
    overflow-x: scroll;
  }
`;

export const Table = styled.table`
  font-weight: 600;
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    border: 1px solid #ddd;
  }
`;

export const TitleRow = styled.tr`
  background-color: #b6bdc2;
`;

export const TitleColumn = styled.th`
  color: #343a40;
`;

export const ContentRow = styled.tr`
  background-color: #fff;
`;

export const ContentColumn = styled.td`
  color: #2c3e50;
  text-align: center;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
