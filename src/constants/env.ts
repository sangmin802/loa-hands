/*
  esm으로 import.meta를 하는 방식은 아직 jest에 내재되어있지 않아 에러를 반환함.
*/

export const API_URL = 'https://loa-hands-server.herokuapp.com/loa-hands';
export const URL = '/loa-hands';
// export const API_URL = import.meta.env.VITE_API_URL as string;
// export const URL = import.meta.env.VITE_URL as string;
