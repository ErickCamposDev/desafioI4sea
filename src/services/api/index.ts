const axios = require('axios').default;

const BASE_URL = 'https://api.github.com';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getUserByName = async (userName: string) => {
  return api.get(`/users/${userName}`);
};

export const getUserRepositories = async (userName: string) => {
  return api.get(`/users/${userName}/repos`);
};
