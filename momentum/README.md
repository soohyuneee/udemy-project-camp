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

**시계 & 로그인 폼** 

<img width="1440" alt="스크린샷 2023-06-24 오후 5 09 17" src="https://github.com/soohyuneee/udemy-project-camp/assets/105588175/44ecf8c3-fd9b-47ce-a834-bce51a35d450">

<br/> 
<br/>

**인사** 

<img width="1440" alt="스크린샷 2023-06-24 오후 5 10 13" src="https://github.com/soohyuneee/udemy-project-camp/assets/105588175/c353f0ae-17a7-4084-aa66-5cee19cea859">

<br/>

## 📝 과제 설명
### 1차 과제
**Background 컴포넌트**
- useState를 사용하여 이미지 배열의 인덱스를 관리
- useEffect와 Math.random을 사용하여 첫 화면 렌더링 시 랜덤한 인덱스를 set함수로 변경하여 배경화면 적용

**Clock 컴포넌트**
- useState의 초기값으로 Date함수의 값을 넣어주고 상태 값의 시간과 분을 구하여 화면에 렌더링
- useEffect와 setInterval을 사용하여 1초 마다 Date함수의 값을 set 함수로 변경하여 실시간 시계 기능 구현
  
**Login 컴포넌트**
- useState를 사용하여 인풋의 입력 값인 username을 관리하고, submit 이벤트 발생 시 localStorag에 저장
- useState를 사용하여 로그인 상태를 boolean으로 관리하고, useEffect로 localStorag에 username의 유무에 따라 로그인 상태 판별
- 삼항 연산자를 사용하여 로그인 상태가 false일 때 렌더링
  
**Greeting 컴포넌트**
- Login 컴포넌트의 하위 컴포넌트로, 삼항 연산자를 사용하여 로그인 상태가 true일 때 렌더링
- props로 Login 컴포넌트의 로그인 상태 변경함수를 전달받아 로그아웃 버튼 클릭시 로그인 상태를 false로 변경
- useState로 인사말의 상태를 관리하고, useEffect와 setInterval을 사용하여 현재 시간에 따라 인사말의 상태를 변경

<br/> 
