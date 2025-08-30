import { base_url } from '../ApiRoutes';
import {
  getConfigs,
  getMessage,
  performNetworkRequest,
} from './helperFunctions';

export const get = async endpoint => {
  const url = base_url + endpoint;

  const configs = getConfigs(url, 'get');

  try {
    const networkResult = await performNetworkRequest(configs);

    return Promise.resolve(networkResult);
  } catch (e) {
    return Promise.reject(getMessage(e));
  }
};
