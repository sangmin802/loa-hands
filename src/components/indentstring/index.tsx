import React from "react";
import DangerousHTML from "components/dangerous-html";
import MapContainer from "components/map-container";
import * as Styled from "./index.style";

interface IData {
  title: string;
  desc: string[];
}

interface IIndengString<T> {
  data?: T;
}

const IntentString = ({ data }: IIndengString<IData>) => {
  return (
    <Styled.IndengString>
      <DangerousHTML html={data.title} />
      <MapContainer data={data.desc} dataKey="html">
        <DangerousHTML />
      </MapContainer>
    </Styled.IndengString>
  );
};

export default React.memo(IntentString);
