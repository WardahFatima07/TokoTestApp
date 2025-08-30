import axios from 'axios';

axios.interceptors.response.use(
  function (response) {
    // console.log('response from interceptor', response);
    return Promise.resolve(response);
  },
  function (error) {
    // console.log('error from interceptor', error);

    switch (error?.response?.status) {
      case 400: {
        return Promise.reject(error?.response?.data);
      }
    }
  },
);

export const getConfigs = (url, method) => {
  var headers = {};

  headers['token'] = `token ${process.env.GITHUB_TOKEN}`;

  var configs = {
    url: url,
    method: method,
    headers: headers,
  };

  return configs;
};

export const performNetworkRequest = async configs => {
  try {
    const response = await axios(configs);
    return Promise.resolve(response);
  } catch (e) {
    return Promise.reject(e);
  }
};
