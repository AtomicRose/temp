const TIMEOUT = 15000;

const defaultOptions = {
  method: 'POST',
  timeout: TIMEOUT,
  headers: { 'Content-Type': 'application/json' },
}

export async function editGame(body, request, options) {
  const path = '/v1/game/edit';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function getGameList(body, request, options) {
  const path = '/v1/game/getList';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function createOrEditNews(body, request, options) {
  const path = '/v1/news/createOrEdit';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function getNewsList(body, request, options) {
  const path = '/v1/news/getList';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function getNewsDetail(body, request, options) {
  const path = '/v1/news/getDetail';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function changeNewsState(body, request, options) {
  const path = '/v1/news/changeState';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function checkNews(body, request, options) {
  const path = '/v1/news/check';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function setNewsTop(body, request, options) {
  const path = '/v1/news/setTop';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function getNewsTopList(body, request, options) {
  const path = '/v1/news/getTopList';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function setNewsShuffling(body, request, options) {
  const path = '/v1/news/setShuffling';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function getNewsShufflingList(body, request, options) {
  const path = '/v1/news/getShufflingList';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function getNewsLanguageList(body, request, options) {
  const path = '/v1/common/getLanguageList';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function createMsg(body, request, options) {
  const path = '/v1/msg/create';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function getMsgList(body, request, options) {
  const path = '/v1/msg/getList';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function getMsgDetail(body, request, options) {
  const path = '/v1/msg/getDetail';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function changeMsgState(body, request, options) {
  const path = '/v1/msg/changeState';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function createOrEditJob(body, request, options) {
  const path = '/v1/job/createOrEdit';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function getJobType(body, request, options) {
  const path = '/v1/job/getType';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function changeJobState(body, request, options) {
  const path = '/v1/job/changeState';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function getJobList(body, request, options) {
  const path = '/v1/job/getList';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function getJobDetail(body, request, options) {
  const path = '/v1/job/getDetail';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function login(body, request, options) {
  const path = '/v1/common/login';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function logout(body, request, options) {
  const path = '/v1/common/logout';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export async function getUploadingUrl(body, request, options) {
  const path = '/v1/common/getUploadingUrl';
  const requestOptions = Object.assign({}, defaultOptions, options, { body: JSON.stringify(body) });
  return await request(path, requestOptions);
}

export default {
  editGame,
  getGameList,
  createOrEditNews,
  getNewsList,
  getNewsDetail,
  changeNewsState,
  checkNews,
  setNewsTop,
  getNewsTopList,
  setNewsShuffling,
  getNewsShufflingList,
  getNewsLanguageList,
  createMsg,
  getMsgList,
  getMsgDetail,
  changeMsgState,
  createOrEditJob,
  getJobType,
  changeJobState,
  getJobList,
  getJobDetail,
  login,
  logout,
  getUploadingUrl,
}
