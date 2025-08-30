const urls = {
  dev: 'https://api.github.com',
};

export const base_url = urls.dev;

export const endpoints = {
  home: {
    users: search => (search ? `/users/${search}` : '/users'),
  },
};

export default {
  endpoints: endpoints,
  base_url: base_url,
};
