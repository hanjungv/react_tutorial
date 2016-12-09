import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>,rootElement);

/*
if(module.hot){
  module.hot.accept();
}
*/
//이 코드를 써줌으로써 해당 수정이 일어나는 파일만 리로딩 하게 된다.
