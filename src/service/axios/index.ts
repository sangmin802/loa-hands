import axios, { AxiosResponse } from 'axios';

import { API_URL } from '@/constants/env';

const BASE_API_URL = API_URL;

const defaultConfig = {
	baseURL: BASE_API_URL,
};

const createAxios = function () {
	// 신기하게 url은 axios인스턴스를 생성할 때 지정해주면 그것만 누락됨. 이유를 모르겠음
	const customAxios = axios.create(defaultConfig);

	customAxios.interceptors.request.use(
		(config) => {
			return config;
		},
		(error) => {
			console.log(`occur error ${error} before request`);
			return;
		},
	);

	customAxios.interceptors.response.use((response: AxiosResponse) => {
		return response;
	});

	return customAxios;
};

const customAxios = createAxios();

export { customAxios };
