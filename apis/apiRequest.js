import superagent from 'superagent';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default function request({
  method = 'get',
  url,
  endpoint,
  payload,
  query,
  token,
  type = 'application/json',
}) {
  const { api } = publicRuntimeConfig;
  const _url = url || `${api.baseUrl}/${endpoint}`;
  const _token = token;

  return superagent(method, _url)
    .set('Authorization', _token)
    .set('Content-Type', type)
    .send(payload)
    .query(query);
}
