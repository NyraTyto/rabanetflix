import styled from 'styled-components';

const Table = styled.table`
  box-sizing: border-box;
  width: 100%;
  margin: 40px 0 60px 0;
  border-spacing: 0;

  & th,
  & td {
    padding: 10px;
  }
  & th {
    letter-spacing: 1px;
    background-color: var(--primary);
  }
  & tr:nth-child(even) {
    background-color: #333;
  }
  & button {
    width: 100%;
    text-align: center;
    background: none;
    border: none;
    color: var(--white);
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 1px;
  }
  & button:hover {
    text-decoration: underline;
  }
`;

export default Table;
