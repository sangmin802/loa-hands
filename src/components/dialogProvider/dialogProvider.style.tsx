import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
  left: 0;
  top: 0;
`;

const Container = styled.div`
  padding: 0.5rem;
  position: fixed;
  width: 30%;
  min-width: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.85);
  max-height: 400px;
  z-index: 3;
  border-radius: 3px;
  border: 1px solid #f0f4f5;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export { Background, Container };
