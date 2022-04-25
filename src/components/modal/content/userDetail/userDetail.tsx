import React from 'react';

import Text from '@/components/common/text/text';
import HTMLItem from '@/pages/userInfo/htmlItem/htmlItem';
import { IUserDetail as IData } from '@/types/modal';
import { getQualityColor } from '@/utils/util';

import * as Styled from './userDetail.style';

export interface IUserDetail {
	data: IData;
}

const UserDetail = ({ data }: IUserDetail) => {
	const { backSrc, detail } = data;
	const {
		src,
		grade,
		title,
		subTitle,
		itemPartBox,
		indentStringGroup,
		tripodSkillCustom,
		rune,
		quality,
	} = detail;

	return (
		<>
			<Styled.Top>
				<Styled.Container>
					<Styled.ItemThumbnail
						color={`gradient${grade}`}
						src={src ?? backSrc}
					/>
					<Styled.TitleBox>
						{subTitle.map((subTitle, i) => (
							<Text
								size="0.9"
								key={i}
							>
								{subTitle}
							</Text>
						))}
						<Text
							size="1.2"
							color={grade ? `color${grade}` : 'white'}
						>
							{title}
						</Text>
					</Styled.TitleBox>
				</Styled.Container>
			</Styled.Top>
			{rune && (
				<Styled.Rune
					role="rune-grade"
					data-grade={rune.runeGradeNo}
				>
					<Styled.RuneThumbnail
						color={`gradient${rune.runeGradeNo}`}
						src={rune.runeImg}
					/>
					<Styled.RuneDescBox>
						<Text color={`color${rune.runeGradeNo}`}>{rune.runeGrade}</Text>
						<Styled.RuneInfo>{rune.runeInfo}</Styled.RuneInfo>
					</Styled.RuneDescBox>
				</Styled.Rune>
			)}
			{quality && (
				<Styled.Quality>
					<Text size="0.8">품질 {quality}%</Text>
					<Styled.QualityBar
						role="quality-background"
						color={`gradient${getQualityColor(quality)}`}
						width={String(quality)}
					/>
				</Styled.Quality>
			)}
			{itemPartBox && (
				<Styled.SectionList
					data={itemPartBox}
					item={HTMLItem}
				/>
			)}
			{indentStringGroup && (
				<Styled.SectionList
					data={indentStringGroup}
					item={HTMLItem}
				/>
			)}
			{tripodSkillCustom && (
				<Styled.SectionList
					data={tripodSkillCustom}
					item={HTMLItem}
				/>
			)}
		</>
	);
};

export default React.memo(UserDetail);
