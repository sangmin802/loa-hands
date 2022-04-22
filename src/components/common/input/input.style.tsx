import styled from 'styled-components';

const Input = styled.input`
  background: none;
  width: 100%;
  padding: 0.3rem;
  outline : none;
  border : 0;
  &:focus {
    outline: none;
    background: none;
  };

  color : #fff;
}
`;

export { Input };
