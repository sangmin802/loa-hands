import styled, { css } from "styled-components";
import { BACKGROUND } from "constants/index";
import Button from "components/button";
import Navigation from "components/navigation";
import MapContainer from "components/map-container";

const positionX = [
  "718px",
  "673px",
  "767px",
  "787px",
  "652px",
  "627px",
  "741px",
  "696px",
];

const UserInfo = styled.section`
  padding: 0.5rem;
`;

const Top = styled.section`
  position: relative;
  border-radius: 3px;
  padding: 1rem 0.5rem 1rem;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

const Bottom = styled.section`
  margin-top: 1rem;
`;

const ExpeditionButton = styled(Button)`
  float: right;
  padding: 0.3rem;

  ${({ theme }) => theme.contentBox}
  background: ${({ theme }) => theme.backgroundColor.darkLow};
`;

const Container = styled.section`
  padding: 0.5rem;
  border-radius: 0 0 5px 5px;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

const MainNavigation = styled(Navigation)`
  border-radius: 5px 5px 0 0;
`;

const SubNavigation = styled(Navigation)<{
  selectedNav: number;
  isShow: number;
}>`
  ${({ isShow }) =>
    css`
      display: none;
      width: 100%;
      border-radius: 0 5px 0 0;

      &:nth-of-type(${isShow + 1}) {
        display: ${isShow === 2 ? "flex" : "block"};
      }
    `}
  &:nth-of-type(3) {
    & > button {
      flex-grow: 1;
      margin-right: 0;
      border-radius: 3px;

      &:hover {
        background-color: #222;
      }

      ${({ selectedNav }) =>
        `&:nth-of-type(${selectedNav + 1}){background-color : #222;}`}

      & > div {
        width: 20px;
        height: 24px;
        margin: 0 auto;
        background: url("${BACKGROUND}");
        background-size: 1250px 1209px;
      }

      ${() => {
        let styles = "";
        positionX.forEach(
          (p, i) =>
            (styles += `&:nth-of-type(${
              i + 1
            })  > div {background-position: ${p} 50px;};`)
        );
        return css`
          ${styles}
        `;
      }}
    }
  }
`;

export {
  UserInfo,
  Top,
  Bottom,
  ExpeditionButton,
  Container,
  MainNavigation,
  SubNavigation,
};
