export default class ExpeditionInfo {
	expeditionUserWrap: {
		server: string;
		charList: { name: string; lv: string }[];
	}[];
	name: string;
	Lv: string;
	server: string;
	[key: string]: any;

	constructor(raw: any, expedition: any) {
		const expeditionUserInfo: Element[] = [
			...raw.getElementsByClassName('myinfo__character')[0].children,
		];
		const [lvWithName, , searchUserServer]: Element[] = expeditionUserInfo;
		this.name = lvWithName.childNodes[1].textContent?.trim() as string;
		this.Lv = lvWithName.children[0].textContent as string;
		this.server = searchUserServer.children[0].children[1]
			.textContent as string;

		const serverWrap: string[] = this.getWantedTag(
			expedition,
			this.getWantedTag,
			'STRONG',
		)
			.filter((el: Element) => el.nodeName === 'STRONG')
			.map((str: Element) => str.textContent as string);

		this.expeditionUserWrap = this.getWantedTag(
			expedition,
			this.getWantedTag,
			'UL',
		)
			.filter((el: Element) => el.nodeName === 'UL')
			.map((ul: Element, index: number) => {
				return {
					server: serverWrap[index],
					charList: [...ul.children].map((li) => {
						return {
							name: (li.children[0].childNodes[1].textContent as string).trim(),
							lv: li.children[0].children[0].textContent as string,
						};
					}),
				};
			});
	}

	getWantedTag(
		el: Element,
		fun: typeof this.getWantedTag.arguments,
		name: string,
	) {
		const child = [...el.children];
		for (let i = 0; i < child.length; i++) {
			if (child[i].nodeName !== name) child[i] = fun(child[i], fun, name);
		}
		return child;
	}
}
