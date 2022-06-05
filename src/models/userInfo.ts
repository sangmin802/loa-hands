import AbilityInfo from '@/models/abilityInfo';
import BasicInfo from '@/models/basicInfo';
import ExpeditionInfo from '@/models/expeditionInfo';
import SkillInfo from '@/models/skillInfo';
import { returnBody } from '@/utils/parse-string';

export default class UserInfo {
	basicInfo: BasicInfo;
	expeditionInfo: ExpeditionInfo;
	abilityInfo: AbilityInfo;
	skillInfo: SkillInfo;
	memberArr: string[];

	// 생성자
	constructor(data: string) {
		const body: Element = returnBody(data);
		const expedition: Element = body.getElementsByClassName(
			'myinfo__character--wrapper2',
		)[0];
		const script = body.getElementsByTagName('script');

		// 스킬정보와 장비정보를 갖고있는 객체 반환
		const profileObj = this.getProfileObj(script) ?? null;

		// 유저 기본정보 설정
		this.basicInfo = new BasicInfo(body);

		// 모험단 유저
		this.expeditionInfo = new ExpeditionInfo(body, expedition);

		// 유저 능력치 탭
		this.abilityInfo = new AbilityInfo(profileObj, body);

		// 유저 스킬 탭
		this.skillInfo = new SkillInfo(profileObj, body);

		this.memberArr = this.member(script);
	}

	member(script: any) {
		const [, memberNo, , pcId, , worldNo] =
			script[10]?.textContent?.split("'") ?? null;

		return [memberNo, pcId, worldNo];
	}

	getProfileObj(script: any) {
		const script0 = script[0];

		if (script0.childNodes[0].textContent.length !== 1) {
			const profileObj = JSON.parse(
				script0.childNodes[0].textContent
					.replace('$.Profile = {', '{')
					.replace('};', '}'),
			);
			return profileObj;
		}
	}
}
