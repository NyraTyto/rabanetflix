import styled from 'styled-components';

const LoadingHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  
  & img {
    width: 200px;
    margin-bottom: 20px;
  }

  & .loading {
    margin-left: 38px;
  }

  & .loading:after {
    content: ' .';
    animation: dots 1.2s steps(5, end) infinite;
  }

  @keyframes dots {
    0%, 20% {
      color: rgba(0,0,0,0);
      text-shadow:
        .25em 0 0 rgba(0,0,0,0),
        .5em 0 0 rgba(0,0,0,0);
    }
    40% {
      color: white;
      text-shadow:
        .25em 0 0 rgba(0,0,0,0),
        .5em 0 0 rgba(0,0,0,0);
    }
    60% {
      text-shadow:
        .25em 0 0 white,
        .5em 0 0 rgba(0,0,0,0);
    }
    80%, 100% {
      text-shadow:
        .25em 0 0 rgba(255, 255, 255, 0.7),
        .5em 0 0 rgba(255, 255, 255, 0.7);
    }
  }
`;

export default LoadingHome;
