import styled from "styled-components";
import Text from "components/text";
import Image from "components/image";

const Rune = styled.article`
  display: flex;
  align-items: center;

  .img-container {
    width: 12%;
    min-width: 30px;
    margin-right: 0.5rem;

    img {
      ${({ theme }) => theme.contentBox}
    }
  }
`;

const Thumbnail = styled(Image)`
  width: 12%;
  min-width: 30px;
  margin-right: 0.5rem;
  ${({ theme }) => theme.contentBox}
`;

const Desc = styled.div`
  width: calc(88% - 0.5rem - 0.1px);
  min-width: calc(100% - 0.5rem - 30.1px);
`;

const RuneText = styled(Text)`
  text-overflow: initial;
  overflow: initial;
  white-space: initial;
`;

export { Rune, Desc, RuneText, Thumbnail };
