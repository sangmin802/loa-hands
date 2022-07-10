import { returnBody } from '@/utils/parse-string';

interface Attr extends NamedNodeMap {
	href: {
		value: string;
	};
	src: {
		value: string;
	};
}

export default class EventData {
	events: {
		img: string;
		name: string;
		date: string;
		href: string;
	}[] = [];

	constructor(events: string[]) {
		// 이벤트리스트

		events.forEach((event) => this.setEvents(returnBody(event)));
	}

	setEvents(raw: Element) {
		const eventList =
			raw.getElementsByClassName('list list--event')[0].children[0].children;

		this.events = [
			...this.events,
			...[...eventList].map((li) => {
				const href = (li.children[0].attributes as Attr)['href'].value;
				const children = li.children[0].children;
				const img = (children[0].children[0].attributes as Attr)['src'].value;
				const name = children[1].children[0].textContent as string;
				const date = (
					children[2].children[0].childNodes[1].textContent as string
				)
					.trim()
					.replace(': ', '');

				return {
					img,
					name,
					date,
					href,
				};
			}),
		];
	}
}
