# 유데미 프로젝트 캠프 3주차 과제

## ❗️ 과제 요구사항

```
momentum 클론 코딩
1차 과제 : vanilla js로 배경이미지 랜덤 변경, 인사, 시계 기능 구현
2차 과제 : vanilla js로 할 일 목록, 내 위치 날씨 조회 기능 구현
```
<br/> 

## ⭐️ 과제 결과
### [> 배포링크](https://clone-momentum.vercel.app/)
<br/>

**로그아웃** 

<img width="1440" alt="스크린샷 2023-06-22 오후 3 28 24" src="https://github.com/soohyuneee/udemy-project-camp/assets/105588175/29dfe99b-7155-46cb-b234-0c6d77b08978">

<br/> 
<br/>

**로그인, 할 일 목록 작성** 

<img width="1440" alt="스크린샷 2023-06-22 오후 3 03 37" src="https://github.com/soohyuneee/udemy-project-camp/assets/105588175/b2554a4a-99ca-40f4-b2bb-bd08012e4a7d">

<br/>

## 📝 과제 설명
### 1차 과제
- Math.random을 사용하여 새로고침 시 랜덤 배경화면 적용
- setInterval과 Date 함수를 사용하여 실시간 시계 기능 구현
- localStorage를 활용하여 사용자 이름을 저장하고 로그아웃 기능 구현
- hidden 클래스를 부여하여 로그인 시 폼을 숨기고, 로그아웃 시 인사말 숨김 처리
- 조건문을 사용하여 6시 ~ 10시 59분까지는 아침, 11시 ~ 16시 59분까지는 낮, 17시 이후로는 저녁으로 구분하여 시간에 맞는 인사말 출력
### 2차 과제
- 할 일 목록에 입력 시 localStorage에 데이터 저장과 삭제 버튼으로 목록 삭제 가능
- OpenWeatherMap API를 사용하여 위치 정보 제공 동의 후 현재 위치한 지역과 날씨, 온도를 화면에 표시
- 로그아웃 시 localStorage.clear()를 사용하여 로컬스토리지 초기화
<br/> 
