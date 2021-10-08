import React from "react";
import Char from "../char/index";
import * as Styled from "./index.style";

interface IData {
  server: string;
  charList: any[];
}

interface IServer<T> {
  data?: T;
}

const Server = ({ data }: IServer<IData>) => (
  <Styled.Server>
    <Styled.ServerName>{data.server}</Styled.ServerName>
    <Styled.CharList data={data.charList}>
      <Char />
    </Styled.CharList>
  </Styled.Server>
);

export default Server;
