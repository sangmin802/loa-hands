import DangerousHTML from "components/dangerous-html";
import Image from "components/image";
import styled, { css } from "styled-components";

const TripodSkillCustom = styled.article<{ src: string }>`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  * {
    font-size: ${({ theme }) => theme.fontSize["desc"]};
  }
`;

const htmlWrapperType = {
  title: css<{ src: string }>`
    ${({ src }) => (src ? "width: 19%; margin: 0 0.5rem;" : "")}
  `,
  desc: css<{ src: string }>`
    ${({ src }) =>
      src
        ? "width: calc(73% - 1rem - 0.1px); min-width: calc(100% - 1rem- 26.1px);"
        : ""}
  `,
};

const HTMLWrapper = styled(DangerousHTML)<{ type: string; src: string }>`
  ${({ type }) => htmlWrapperType[type]}
`;

const Thunbnail = styled(Image)`
  ${({ src }) => (src ? "width: 8%; min-width: 26px;" : "")}

  ${({ theme, src }) => (src ? theme.contentBox : "")}
`;

export { TripodSkillCustom, HTMLWrapper, Thunbnail };
