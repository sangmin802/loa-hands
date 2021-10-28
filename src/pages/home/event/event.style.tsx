import styled from "styled-components";
import List from "components/list/list";
import Item from "./eventItem/eventItem";

const EventList = styled(List)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const EventItem = styled(Item)`
  flex-basis: calc((100% / 2) - 2.6px);
  overflow: hidden;
`;

export { EventList, EventItem };
