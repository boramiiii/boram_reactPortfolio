/*
  takeLatest : 액션요청이 여러번 들어오면 제일 최근 요청 하나만 실행 (takeEvery: 들어오는 요청 모두처리)
  all : 여러개의 요청함수를 병렬식으로  동시에 처리
  call : 특정함수를 동기적으로 호출 (api요청시 주로 사용, 두번째 인수값으로 api요청에 필요한 옵션값 전달) 
  fork : saga를 실행함수
  put : 리듀서로 액션객체를 전달 (dispatch)
*/
import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { fetchYoutube, fetchProduct, fetchProductList } from './api';


//youtube saga
export function* returnYoutube() {
  try {
    const response = yield call(fetchYoutube);
    yield put({ type: 'YOUTUBE_SUCCESS', payload: response.data.items });
  } catch (err) {
    yield put({ type: 'YOUTUBE_ERROR', payload: err });
  }
}
export function* callYoutube() {
  yield takeLatest('YOUTUBE_START', returnYoutube);
}


export function* returnProduct() {
  try {
    const response = yield call(fetchProduct);
    yield put({ type: 'PRODUCT_SUCCESS', payload: response.data.product });
  } catch (err) {
    yield put({ type: 'PRODUCT_ERROR', payload: err });
  }
}
export function* callProduct() {
  yield takeLatest('PRODUCT_START', returnProduct);
}



export function* returnProductList() {
  try {
    const response = yield call(fetchProductList);
    yield put({ type: 'PRODUCTLIST_SUCCESS', payload: response.data.productList });
  } catch (err) {
    yield put({ type: 'PRODUCTLIST_ERROR', payload: err });
  }
}
export function* callProductList() {
  yield takeLatest('PRODUCTLIST_START', returnProductList);
}


export default function* rootSaga() {
  yield all([fork(callYoutube), fork(callProduct), fork(callProductList)]);
}