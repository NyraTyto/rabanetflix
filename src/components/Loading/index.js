import styled from 'styled-components';

const Loading = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  
  & .spinner {
    width: 25px;
    height: 25px;
    border: 3.4px solid rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    border-left-color: var(--primary);
    animation: spin 1s linear infinite;
    margin-right: 8px;
  }

  @keyframes spin {
    to { transform: rotate(360deg) }
  }
`;

export default Loading;
