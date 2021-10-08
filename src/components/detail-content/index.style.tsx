import styled from "styled-components";
import Image from "components/image";

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Thumbnail = styled(Image)`
  width: 20%;
  min-width: 60px;
  margin-right: 0.5rem;

  ${({ theme }) => theme.contentBox}
`;

const Desc = styled.div`
  width: calc(80% - 0.5rem - 0.1px);
  min-width: calc(100% - 0.5rem - 60.1px);
`;

const Children = styled.div`
  margin-top: 0.5rem;
`;

export { Top, Container, Desc, Children, Thumbnail };
