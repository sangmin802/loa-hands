import React, { cloneElement, ReactElement } from "react";

interface IMapContainer {
  data: any[];
  dataKey?: string;
  children: ReactElement;
}

const MapContainer = ({
  data = [],
  dataKey = "data",
  children,
  ...props
}: IMapContainer) => (
  <section {...props}>
    {data.map((data, i) =>
      cloneElement(children, { [dataKey]: data, key: i, i })
    )}
  </section>
);

export default React.memo(MapContainer);
