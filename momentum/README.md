# 유데미 프로젝트 캠프 과제

## ❗️ 과제 요구사항

```
momentum 클론 코딩
1차 과제 : React로 배경이미지 랜덤 변경, 인사, 시계 기능 구현
2차 과제 : React로 할 일 목록, 내 위치 날씨 조회 기능 구현
```
<br/> 

## ⭐️ 과제 결과
### [> 배포링크](https://momentum-react.netlify.app/)
<br/>

**로그아웃** 

<img width="1440" alt="스크린샷 2023-06-27 오후 4 36 51" src="https://github.com/soohyuneee/udemy-project-camp/assets/105588175/146f2eee-e2bf-4736-871b-426d6eeaad8c">

<br/> 
<br/>

**로그인, 할 일 목록 작성** 

<img width="1440" alt="스크린샷 2023-06-27 오후 5 04 55" src="https://github.com/soohyuneee/udemy-project-camp/assets/105588175/08324915-4a5d-4981-8fcb-fe8134f9fef0">

<br/>

## 🗂️ 폴더 구조
```
📦src
 ┣ 📂assets
 ┃ ┣ 📜0.jpeg
 ┃ ┣ 📜1.jpeg
 ┃ ┗ 📜2.jpeg
 ┣ 📂components
 ┃ ┣ 📜Background.jsx
 ┃ ┣ 📜Clock.jsx
 ┃ ┣ 📜Greeting.jsx
 ┃ ┣ 📜Login.jsx
 ┃ ┣ 📜TodoForm.jsx
 ┃ ┣ 📜TodoList.jsx
 ┃ ┗ 📜Weather.jsx
 ┣ 📜App.css
 ┣ 📜App.js
 ┗ 📜index.js
```

## 📝 과제 설명
### 1차 과제
**Background 컴포넌트**
- useState를 사용하여 이미지 배열의 인덱스를 관리
- useEffect와 Math.random을 사용하여 첫 화면 렌더링 시 랜덤한 인덱스를 set함수로 변경하여 배경화면 적용

**Clock 컴포넌트**
- useState의 초기값으로 Date함수의 값을 넣어주고 상태 값의 시간과 분을 구하여 화면에 렌더링
- useEffect와 setInterval을 사용하여 1초 마다 Date함수의 값을 set 함수로 변경하여 실시간 시계 기능 구현
  
**Login 컴포넌트**
- useState를 사용하여 인풋의 입력 값인 username을 관리하고, submit 이벤트 발생 시 localStorage에 저장
- useState를 사용하여 로그인 상태를 boolean으로 관리하고, useEffect로 localStorage에 username의 유무에 따라 로그인 상태 판별
- 삼항 연산자를 사용하여 로그인 상태가 false일 때 렌더링
  
**Greeting 컴포넌트**
- Login 컴포넌트의 하위 컴포넌트로, 삼항 연산자를 사용하여 로그인 상태가 true일 때 렌더링
- props로 Login 컴포넌트의 로그인 상태 변경함수를 전달받아 로그아웃 버튼 클릭시 로그인 상태를 false로 변경
- useState로 인사말의 상태를 관리하고, useEffect와 setInterval을 사용하여 현재 시간에 따라 인사말의 상태를 변경

### 2차 과제
**TodoList 컴포넌트** 
- useState를 사용하여 할 일 목록을 배열 상태로 관리하고, localStorage에 데이터가 있다면 JSON.parse하여 JavaScript 객체로 변환 
- useEffect를 사용하여 할 일 목록 상태가 변할 때마다 localStorage에 JSON.stringify하여 저장
- spread syntax를 사용하여 할 일 목록 추가 함수 작성
- filter 함수를 사용하여 할 일 목록 삭제 함수 작성

**TodoForm 컴포넌트** 
- TodoList 컴포넌트의 하위 컴포넌트로 할 일 목록 추가 함수를 props로 전달 받음
- useState를 사용하여 인풋 값의 상태를 관리
- submit 이벤트 발생 시 trim 함수를 사용하여 입력 값이 공백인지 확인 

**Weather 컴포넌트** 
- 날씨 API를 활용하여 위치와 날씨, 온도의 데이터 요청
- useState를 사용하여 날씨와 장소의 상태를 관리하고 요청 받은 데이터로 상태 변경
- geolocation API를 활용하여 현재 위치의 위도와 경도의 데이터 요청
- 환경 변수를 사용하여 날씨 API key 관리
<br/> 
