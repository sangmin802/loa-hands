import React from "react";
import * as Styled from "./index.style";

interface IData {
  server: string;
  charList: any[];
}

interface IServer<T> {
  data: T;
}

const Server = ({ data }: IServer<IData>) => (
  <Styled.Server title={<Styled.ServerName>{data.server}</Styled.ServerName>}>
    <Styled.CharList data={data.charList} item={Styled.CharItem} />
  </Styled.Server>
);

export default Server;
