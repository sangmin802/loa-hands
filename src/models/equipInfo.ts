import { getOnlyText } from '@/utils/parse-string';

interface ItemPartBox {
	title: string;
	desc: string[];
}
interface IndentStringGroup {
	title: string;
	desc: string[];
}
interface TripodSkillCustom {
	title: string;
	desc: string[];
	grade: string;
	src: string | null;
}

export default class EquipInfo {
	hover: boolean;
	title: string;
	subTitle: (string | null)[] = [];
	quality: number;
	src: string | null;
	grade: number;
	itemPartBox: ItemPartBox[] | null = null;
	indentStringGroup: IndentStringGroup[] | null = null;
	tripodSkillCustom: TripodSkillCustom[] | null = null;

	constructor(
		data: Record<string, any>,
		num: number,
		public setEngrave: (name: string, size: string) => void,
		type: string,
	) {
		const v: any[] = Object.values(data);
		const NameTagBox = this.findType(v, 'NameTagBox'); // 아이템 이름
		const ItemTitle = this.findType(v, 'ItemTitle'); // 아이템 세부 설명
		const ItemPartBox = this.filterType(v, 'ItemPartBox');
		const IndentStringGroup = this.filterType(v, 'IndentStringGroup');
		const TripodSkillCustom = this.filterType(v, 'TripodSkillCustom');

		this.title = getOnlyText(NameTagBox?.value) as string;
		const regex = new RegExp(/leftStr[0-9]/g);
		const subTitleArr = Object.keys(ItemTitle.value).filter((res) =>
			res.match(regex),
		);
		subTitleArr.forEach((res) => {
			let val = ItemTitle.value[res];
			if (val.includes('품질')) return;
			if (val === '') val = '아이템 레벨 -';
			this.subTitle.push(getOnlyText(val) as string);
		});
		this.quality =
			ItemTitle?.value.qualityValue < 0 ? null : ItemTitle.value.qualityValue;
		this.src = ItemTitle.value.slotData.iconPath
			? '//cdn-lostark.game.onstove.com/' + ItemTitle.value.slotData.iconPath
			: null;
		this.grade = ItemTitle.value.slotData.iconGrade ?? null;
		this.hover = true;

		// 텍스트 그룹 여러개의 구조
		this.itemPartBox = ItemPartBox ? [] : null;
		ItemPartBox?.forEach((res: any) => {
			const els: string[] = Object.values(res.value);

			this.itemPartBox?.push({
				title: els[0],
				desc: [num === 26 ? this.wristbandSrcReaplce(els[1]) : els[1]],
			});
		});

		if (type === 'acc' || type === 'stone') {
			this.engraveExtraction(
				Object.values(
					(ItemPartBox as any[])[(ItemPartBox as any[]).length - 1]
						.value as Record<string, any>,
				)[1],
			);
		}

		// 텍스트 그룹이 여러개 있고, 각각의 타이틀을 갖고있는 구조
		//  c?Active = 활성화 or 비활성화
		this.indentStringGroup = IndentStringGroup ? [] : null;
		IndentStringGroup?.forEach((res: any) => {
			Object.values(res.value).forEach(({ topStr, contentStr: c1 }: any) => {
				// 제목
				const title = topStr;
				const desc: any[] = [];
				// 값

				Object.values(c1).forEach(({ contentStr: c2 }: any) => {
					desc.push(c2);
				});

				this.indentStringGroup?.push({ title, desc });
			});
		});

		// 이미지와 등급 배경을 갖고있는 구조
		this.tripodSkillCustom = TripodSkillCustom ? [] : null;
		TripodSkillCustom?.forEach((res: any) => {
			const els = Object.values(res.value);
			els.forEach(({ name, desc, slotData }: any) => {
				this.tripodSkillCustom?.push({
					title: name,
					desc: [desc],
					grade: slotData?.iconGrade,
					src: slotData?.iconPath
						? '//cdn-lostark.game.onstove.com/' + slotData?.iconPath
						: null,
				});
			});
		});
	}

	filterType(arr: any[], type: string) {
		const filteredArr = arr.filter((res) => res.type === type);
		return filteredArr.length === 0 ? null : filteredArr;
	}

	findType(arr: any[], type: string) {
		return arr.find((res) => res.type === type);
	}

	wristbandSrcReaplce(str: string) {
		return str
			.replace(
				/emoticon_tooltip_bracelet_locked/gi,
				'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/game/ico_tooltip_locked.png',
			)
			.replace(
				/emoticon_tooltip_bracelet_changeable/gi,
				'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/game/ico_tooltip_changeable.png',
			);
	}

	engraveExtraction(str: string) {
		const engraves = str.split('<BR>');
		engraves.forEach((str: string) => {
			const regexp = new RegExp("(.*?'>)(.*?)(</FONT>] 활성도 \\+)(\\d*)");
			const [, , name, , size] = str.match(regexp) as RegExpMatchArray;
			this.setEngrave(name, size);
		});
	}
}
