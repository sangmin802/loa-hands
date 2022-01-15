import styled, { css } from "styled-components";
import Image from "components/common/image/image";

const InfoItemType = {
  normal: css`
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
    overflow: hidden;
    ${({ theme }) => theme.contentBox}
  `,
  collection: css`
    display: none;
  `,
};

const InfoItem = styled.article<{ hover: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.3rem;
  border-radius: 3px;

  cursor: ${({ hover }) => (hover ? "pointer" : "")};
  background: ${({ theme }) => theme.backgroundColor.darkLow};
`;

const Thumbnail = styled(Image)<{ type: string; color: string }>`
  ${({ type }) => {
    const index = type === "collection" ? type : "normal";
    return InfoItemType[index];
  }}
  background : ${({ theme, color }) => theme.gradientColor[color]};
`;

const descType = {
  normal: css`
    width: calc(100% - 0.5rem - 40.1px);
  `,
  collection: `
    display: flex;
    div:first-child {
      margin-right: 0.3rem;
    }
  `,
};

const Desc = styled.div<{ type: string }>`
  ${({ type }) => {
    const index = type === "collection" ? type : "normal";
    return descType[index];
  }}
`;

export { InfoItem, Desc, Thumbnail };
