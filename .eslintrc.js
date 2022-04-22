module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	plugins: [
		'@typescript-eslint',
		'simple-import-sort',
		'prettier',
		'react-hooks',
	],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'react/react-in-jsx-scope': 'off',
		'jsx-a11y/accessible-emoji': 'off',
		'react/prop-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton'],
			},
		],
		'jsx-a11y/aria-role': [
			2,
			{
				allowedInvalidRoles: ['text'],
				ignoreNonDOM: true,
			},
		],
	},
};
