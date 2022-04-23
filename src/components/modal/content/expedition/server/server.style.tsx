import styled from 'styled-components';

import List from '@/components/common/list/list';
import SectionContainer from '@/components/common/sectionContainer/sectionContainer';
import Text from '@/components/common/text/text';
import Char from '@/components/modal/content/expedition/char/char';

const Server = styled(SectionContainer)`
	flex-direction: column;
`;

const ServerName = styled(Text)`
	margin-bottom: 0.3rem;
`;

const CharList = styled(List)`
	flex-wrap: wrap;
	flex-direction: row;
`;

const CharItem = styled(Char)`
	flex-basis: calc((100% / 2) - 2.5px);
	overflow: hidden;
`;

export { CharItem, CharList, Server, ServerName };
