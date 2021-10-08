import styled from "styled-components";
import Button from "components/button";
import Image from "components/image";
import Text from "components/text";

const ErrorFallback = styled.section`
  padding: 2rem 0;
`;

const ErrorImage = styled(Image)`
  width: 40%;
  max-width: 300px;
  margin: 20px auto 40px;
  border-radius: 50%;
  overflow: hidden;
`;

const ErrorText = styled(Text)`
  text-align: center;
`;

const RetryButton = styled(Button)`
  display: block;
  width: fit-content;
  padding: 0.3rem 0.6rem;
  margin: 10px auto 0;
  ${({ theme }) => theme.contentBox}
`;

export { ErrorFallback, ErrorImage, ErrorText, RetryButton };
