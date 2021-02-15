import { put, takeLatest } from 'redux-saga/effects';

import { actionTypes, failure, fetchShowSuccess, searchDataSuccess } from './actions';
import omdb from './api/omdb';

function* searchData({ term }) {
  try {
    const res = yield omdb.get('', { params: { s: term } });
    console.log(res.data.Search);
    if (res.data.Error) yield put(failure(res.data.Error));
    else yield put(searchDataSuccess(res.data.Search));
  } catch (err) {
    yield put(failure(err));
  }
}

function* fetchShow({ imdbId }) {
  try {
    const res = yield omdb.get('', { params: { i: imdbId } });
    console.log(res.data);
    if (res.data.Error) yield put(failure(res.data.Error));
    else yield put(fetchShowSuccess(res.data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield takeLatest(actionTypes.FETCH_SHOW, fetchShow);
  yield takeLatest(actionTypes.SEARCH_DATA, searchData);
}

export default rootSaga;
