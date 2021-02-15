import { all, put, takeLatest } from 'redux-saga/effects';

import { actionTypes, failure, searchDataSuccess } from './actions';
import omdb from './api/omdb';

function* searchData({ term }) {
  console.log(term);
  try {
    const res = yield omdb.get('', { params: { t: term } });
    console.log(res.data);
    yield put(searchDataSuccess(res.data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.SEARCH_DATA, searchData)]);
}

export default rootSaga;
