import { put, takeLatest } from 'redux-saga/effects';

import { actionTypes, failure, fetchPlaylistSuccess, fetchShowSuccess, searchDataSuccess } from './actions';
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

function* fetchTitle(imdbId) {
  console.log(imdbId);
  const res = yield omdb.get('', { params: { i: imdbId } });
  console.log(res.data);
  if (res.data.Error) yield put(failure(res.data.Error));
  return res;
}

function* fetchShow({ imdbId }) {
  try {
    const res = yield fetchTitle(imdbId);
    console.log(res.data);
    yield put(fetchShowSuccess(res.data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* fetchPlaylist({ playlist }) {
  try {
    const fetchedPlaylist = [];
    for (let i = 0; i < playlist.shows.length; i++) {
      let res = yield fetchTitle(playlist.shows[i]);
      yield fetchedPlaylist.push(res.data);
    }
    console.log(fetchedPlaylist);
    yield put(
      fetchPlaylistSuccess({
        name: playlist.name,
        id: playlist.id,
        shows: fetchedPlaylist,
      }),
    );
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield takeLatest(actionTypes.FETCH_SHOW, fetchShow);
  yield takeLatest(actionTypes.SEARCH_DATA, searchData);
  yield takeLatest(actionTypes.FETCH_PLAYLIST, fetchPlaylist);
}

export default rootSaga;
