export function addZero(num: number) {
	if (num < 10) {
		return '0' + num;
	}
	return num;
}

export function reducePerType(data: any[], type: null | string = null) {
	return data.reduce(
		(prev, cur, i) => {
			const condition = type ? cur.divideType.includes(type) : i % 2 === 0;

			if (condition) {
				prev[0].push(cur);
			} else {
				prev[1].push(cur);
			}
			return prev;
		},
		[[], []],
	);
}

export function getQualityColor(quality: number) {
	if (quality === -1) return null;

	let qualityColor = -2;
	if (quality >= 0 && quality < 10) qualityColor = -1;
	if (quality >= 10 && quality < 70) qualityColor = 1;
	if (quality >= 70 && quality < 90) qualityColor = 2;
	if (quality >= 90) qualityColor = 3;
	if (quality === 100) qualityColor = 4;

	return qualityColor;
}
