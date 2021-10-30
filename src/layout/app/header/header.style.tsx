import styled from "styled-components";
import { BACKGROUND } from "constants/index";
import Input from "components/input/input";
import Button from "components/button/button";

const Container = styled.header`
  max-width: 600px;
  margin: 0 auto;
  padding: 0.5rem;
`;

const Background = styled.div`
  background-image: url("${BACKGROUND}");
  background-position: 403px 3.5px;
  width: 160px;
  margin: 0 auto 10px;
  height: 50px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  margin: 0 auto;
  width: 60%;
  height: fit-content;
`;

const Logo = styled(Button)`
  width: 100%;
  height: 100%;
`;

const InputText = styled(Input)`
  width: 80%;
  padding: 0.3rem;
  border-bottom: 1px solid #f0f4f5;
  font-size: 1rem;
  pointer-events: false;
`;

const InputSubmit = styled(Button)`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.contentBox}
  border-radius: 3px 3px 3px 0;
`;

export { Container, Background, Form, InputText, InputSubmit, Logo };
