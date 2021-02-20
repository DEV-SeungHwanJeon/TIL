import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let navstyle = { color: 'blue', fontSize : '30px'}
  
  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동 맛집','안녕하세요']);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기(){
    var new글제목 = [...글제목];
    new글제목[0] = '여자코트 추천';
    new글제목.sort()
    글제목변경( new글제목 );
  }

  return (
    <div className="App">

      <div className="black-nav">
      <div style= { navstyle }>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick= { () => { 따봉변경(따봉+1) } }>🎈</span> {따봉} </h3>
        <p>2월 20일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] }</h3>
        <p>2월 20일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] }</h3>
        <p>2월 20일 발행</p>
        <hr/>
      </div>



      <Modal></Modal>

    </div>
  );
}

function Modal() {
  return (
  <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}


export default App;
