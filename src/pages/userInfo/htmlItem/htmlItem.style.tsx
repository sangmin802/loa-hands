import styled from 'styled-components';

const HTMLItem = styled.section`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;

const Thumbnail = styled.div`
	flex-basis: 10%;
	min-width: 30px;
	flex-shrink: 0;
	position: relative;
	border-radius: 50%;
	overflow: hidden;
	&:after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: url('//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_equipment_slot_engrave_over.png?dfa049c7fe18a5887b24c846db7b2dcc')
			no-repeat center;
		background-size: 138% 138%;
	}
`;

export { HTMLItem, Thumbnail };
