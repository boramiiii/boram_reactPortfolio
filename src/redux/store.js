//미들웨어 모듈 import 
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducer';

//saga middleware import
import createSagaMiddleware from '@redux-saga/core';

//미들웨어 적용할 saga 파일 import
import rootSaga from './saga';

//saga middlewrae 함수 활성화
const sagaMiddleware = createSagaMiddleware();

//store생성시 리듀서에 saga미들웨어 적용
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

//store에 적용된 sagabiddleware를 통해서 rootsaga기능 활성화
sagaMiddleware.run(rootSaga);


export default store;