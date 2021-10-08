import React from "react";
import DangerousHTML from "components/dangerous-html";
import MapContainer from "components/map-container";
import * as Styled from "./index.style";

interface IContent {
  title: string[];
  desc: string;
}

interface IData {
  title: string;
  content: IContent[];
}

interface ICharacteristic<T> {
  data?: T;
}

const Chararteristic = <T extends IData>({ data }: ICharacteristic<T>) => {
  return (
    <Styled.Container key={data.title}>
      <Styled.TitleText type="title">{data.title}</Styled.TitleText>
      <MapContainer data={data.content}>
        <Item />
      </MapContainer>
    </Styled.Container>
  );
};

interface IItem<T> {
  data?: T;
}

const Item = <T extends IContent>({ data }: IItem<T>) => {
  return (
    <Styled.Item key={data.title[0]}>
      <Styled.TitleText isItem={true}>
        {data.title[0]} {data.title[1]}
      </Styled.TitleText>
      <DangerousHTML html={data.desc} />
    </Styled.Item>
  );
};

export default React.memo(Chararteristic);
