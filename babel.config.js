module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
		/*
      react is undefined 해결
    */
		['@babel/preset-react', { runtime: 'automatic' }],
		'@babel/preset-typescript',
	],
};
