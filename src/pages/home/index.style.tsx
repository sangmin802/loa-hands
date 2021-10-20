import styled from "styled-components";
import SectionContainer from "components/section-container";
import MapContainer from "components/map-container";
import Button from "components/button";
import Event from "components/event";

const Home = styled.section`
  padding: 0.5rem;
`;

const Section = styled(SectionContainer)`
  margin-top: 0.7rem;
`;

const EventSection = styled(MapContainer)`
  display: flex;
  flex-wrap: wrap;
`;

const StyledEvent = styled(Event)`
  width: calc((100% - 0.5rem) / 2 - 0.1px);
  margin-right: 0.5rem;
  margin-top: 0.5rem;

  &:nth-child(2n) {
    margin-right: 0;
  }
`;

const Notification = styled(Button)`
  width: fit-content;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.4rem;

  ${({ theme }) => theme.contentBox};
  background: ${({ theme }) => theme.backgroundColor.darkDeep};
  border-radius: 3px 3px 3px 0;
`;

export { Home, Section, EventSection, Notification, StyledEvent as Event };
