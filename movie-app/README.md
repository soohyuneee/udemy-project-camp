# 유데미 프로젝트 캠프 과제

## ❗️ 과제 요구사항

```
Movie App 만들기
1차 과제 : 영화 API를 활용하여 Movie App 구현
2차 과제 : 영화 데이터를 처리하는 Custom hook 작성
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
 ┣ 📂hooks
 ┃ ┗ 📜useFetchMovies.js
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
### 1차 과제
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

### 2차 과제
**useFetchMovies**
- 영화 API를 활용하여 데이터를 처리하는 커스텀 훅
- useFetchMovies의 첫 번째 매개변수로는 url을 받고, 두 번째 매개변수로는 type을 받아 해당 type의 data로 상태 변경
- getMovies 함수 : 영화 API에 HTTP 요청을 보내고 응답을 받아오는 함수로, async-await을 사용하여 비동기 처리
- try-catch문을 활용하여 에러 핸들링, finally로 데이터 요청이 끝나면 로딩 상태를 false로 변경
- 로딩 상태, 영화 데이터를 반환 받아 Home, Detail 페이지의 데이터 처리 로직 중복 문제 해결
<br/> 
