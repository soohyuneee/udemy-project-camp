# 유데미 프로젝트 캠프 과제

## ❗️ 과제 요구사항

```
Movie App 만들기
- 영화 API를 활용하여 Movie App 구현
- React-Router로 영화 상세페이지 이동 구현
- CSS Module로 CSS 작성 및 Grid 적용
```
<br/> 

## ⭐️ 과제 결과
### [> 배포링크](https://movie-react-project.web.app/)
<br/>

**Home** 
<img width="1464" alt="스크린샷 2023-06-26 오후 7 16 50" src="https://github.com/soohyuneee/udemy-project-camp/assets/105588175/d1bcff35-6ffb-49f2-8a87-e3036a0dad9c">

<br/>

**Detail** 

<img width="1440" alt="스크린샷 2023-06-26 오후 7 16 32" src="https://github.com/soohyuneee/udemy-project-camp/assets/105588175/ce6dd36f-20f4-4877-ab40-0802474e31a4">

<br/>

## 🗂️ 폴더 구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📜Loding.js
 ┃ ┗ 📜Movie.js
 ┣ 📂pages
 ┃ ┣ 📜Detail.js
 ┃ ┗ 📜Home.js
 ┣ 📂styles
 ┃ ┣ 📜Detail.module.css
 ┃ ┣ 📜Global.module.css
 ┃ ┣ 📜Home.module.css
 ┃ ┣ 📜Loading.module.css
 ┃ ┗ 📜Movie.module.css
 ┣ 📜App.js
 ┗ 📜index.js
```

## 📝 과제 설명
**Home 페이지**
- 영화 API를 활용하여 평점 9점 이상의 연도별로 정렬된 영화 데이터 요청
- useState로 영화 데이터의 상태를 관리하고, 요청 받은 영화 데이터로 상태 변경
- useEffect를 사용하여 페이지 렌더링 시 한 번만 요청하게끔 구현 

**Detail 페이지**
- useParams를 사용하여 영화 데이터의 id 추출 
- 영화 API를 활용하여 해당 id의 영화 데이터 요청
- useState로 영화 데이터의 상태를 관리하고, 요청 받은 영화 데이터로 상태 변경
- useEffect를 사용하여 페이지 렌더링 시 한 번만 요청하게끔 구현

**Movie 컴포넌트**
- Home 페이지에서 요청 받은 영화 데이터를 map 함수를 사용하여 Movie 컴포넌트 렌더링
- Link를 사용하여 Movie 컴포넌트 클릭 시 해당 id의 영화 상세 페이지로 이동
- propTypes를 사용하여 영화 데이터의 타입 겁사

**Loading 컴포넌트**
- 각 페이지에서 useState를 사용하여 로딩 상태 관리
- API 요청 시 async-await를 사용하여 비동기 처리
- 로딩 상태의 초기값은 true이며, 각 페이지에서 삼항 연산자를 사용하여 true일 때는 loading 컴포넌트가 렌더링
- 데이터 요청이 완료된 후에 로딩 상태를 false로 변경
  
**CSS**
- CSS Module을 사용하여 CSS 클래스 중첩 방지
- Grid를 사용하여 Movie 컴포넌트를 갤러리 형태로 배치
- 해당 영화 포스터 위에 마우스가 hover되면 요약 내용 오버레이
<br/> 
