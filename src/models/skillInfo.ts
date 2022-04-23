import { URL } from '@/constants/env';
import { getOnlyText } from '@/utils/parse-string';

interface TripodSkillCustom {
	name: string;
	desc: string[];
	grade: string;
	src: string | null;
}

interface BattleSkill {
	usePoint: number;
	getPoint: number;
	skills: {
		backSrc: string;
		divideType: string;
		type: string;
		detail: {
			subTitle: string[];
			title: string;
			tripodSkillCustom: TripodSkillCustom[];
			rune: {
				runeImg: string;
				runeGrade: string;
			} | null;
		};
	}[];
}
interface LifeSkill {
	type: string;
	divideType: string;
	backSrc: string;
	detail: {
		title: string;
		subTitle: string[];
	};
}

export default class SkillInfos {
	battleSkill: BattleSkill = {
		usePoint: 0,
		getPoint: 0,
		skills: [],
	};
	lifeSkill: LifeSkill[] = [];

	constructor(profileObj: any, raw: Element) {
		const battleSkill = raw.getElementsByClassName('profile-skill-battle')[1];
		const lifeSkill = raw.getElementsByClassName('profile-skill-life')[0];

		// 전투스킬 정보가 있는경우만
		if (profileObj) this.setBattleSkill(profileObj.Skill, battleSkill);

		// 생활스킬
		this.setLifeSkill(lifeSkill);
	}

	setBattleSkill(skill: any, battleSkill: any) {
		const children = battleSkill.children;
		const use = children[0].children[1].textContent;
		const get = children[0].children[3].textContent;
		const useSkillList = [...children[1].children]
			.map((el) => el.children[0])
			.filter((el) => {
				const check = el.children[2].children[0].textContent;
				if (check === '각성기' || check !== '1') {
					return el;
				}
				return null;
			});

		const skillArr = Object.values(skill);
		const half = Math.ceil(useSkillList.length / 2);
		const skills = useSkillList.map((el, index) => {
			const children = el.children;
			const skillImg = children[0].children[0].attributes[0].value;
			const skillType = children[1].children[0].textContent;
			const skillName = children[1].children[1].textContent;
			const matchSkillArr = skillArr.find(
				(res: any) => res['Element_000'].value === skillName,
			);
			const skillLv = children[2].children[0].textContent;
			const type = 'battleSkill';
			const divideType = index < half ? 'leftSkill' : 'rightSkill';
			const tripodSkillCustom: any[] = [];
			let rune = null;

			if (skillLv !== '각성기') {
				const TripodSkillCustom = Object.values(
					matchSkillArr as Record<string, any>,
				).filter((res) => res.type === 'TripodSkillCustom');
				TripodSkillCustom?.forEach((res) => {
					const els = Object.values(res.value);
					els.forEach(({ name, desc, slotData }: any) => {
						tripodSkillCustom.push({
							title: getOnlyText(name),
							desc: [getOnlyText(desc)],
							grade: slotData?.iconGrade,
							src: slotData?.iconPath
								? '//cdn-lostark.game.onstove.com/' + slotData?.iconPath
								: null,
						});
					});
				});
			}
			if (children[1].children[3].attributes['data-runetooltip']) {
				const runeJSON = JSON.parse(
					children[1].children[3].attributes['data-runetooltip'].value,
				);
				const ItemPartBox = Object.values(runeJSON).find(
					(res: any) => res['type'] === 'ItemPartBox',
				) as any;
				const vals = Object.values(ItemPartBox.value);
				const runeGrade = getOnlyText(
					runeJSON.Element_001.value.leftStr0,
				) as string;

				rune = {
					runeInfo: [getOnlyText(vals[1] as string)] as string[],
					runeImg: children[1].children[3].children[0].attributes['src'].value,
					runeGradeNo: this.calcRuneGrade(runeGrade),
					runeGrade,
				};
			}

			return {
				type,
				divideType,
				backSrc: skillImg,
				detail: {
					title: `Lv${skillLv} ${skillName} `,
					subTitle: [skillType],
					hover: true,
					tripodSkillCustom,
					rune,
				},
			};
		});

		this.battleSkill = {
			usePoint: use,
			getPoint: get,
			skills,
		};
	}

	setLifeSkill(lifeSkill: Element) {
		const li = lifeSkill.children[1].children;
		const half = Math.ceil(li.length / 2);
		this.lifeSkill = [...li].map((li, index) => {
			const divideType = index < half ? 'leftSkill' : 'rightSkill';
			const type = 'lifeSkill';
			const backSrc = `${URL}src/assets/img/lifeskill/${index}.PNG`;

			return {
				type,
				divideType,
				backSrc,
				detail: {
					title: li.children[0].textContent as string,
					subTitle: [li.children[1].textContent] as string[],
				},
			};
		});
	}

	calcRuneGrade(str: string) {
		let grade = 0;
		if (str.includes('고급')) grade = 1;
		if (str.includes('희귀')) grade = 2;
		if (str.includes('영웅')) grade = 3;
		if (str.includes('전설')) grade = 4;
		if (str.includes('유물')) grade = 5;
		return grade;
	}
}
