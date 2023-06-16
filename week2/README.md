# 유데미 프로젝트 캠프 2주차 과제

## ❗️ 과제 요구사항

```
구)세이프홈즈 랜딩페이지 반응형 퍼블리싱
1차 과제 : 주어진 Figma를 보고 랜딩페이지의 HTML 작성
2차 과제 : 주어진 Figma를 보고 랜딩페이지의 CSS 작성 및 반응형 적용
3차 과제 : 하단의 후기 부분을 JavaScript로 슬라이드 기능 구현
```
<br/> 

## 🧷 Figma
![](https://velog.velcdn.com/images/soohyuneee/post/87c4a6ea-a983-456a-8152-80f62731f36f/image.png)
<br/><br/>

## ⭐️ 과제 결과
### [> 배포링크](https://safehomes.vercel.app/)
<br/>

**1920** 
<img width="1440" alt="1920" src="https://github.com/soohyuneee/udemy-project-camp/assets/105588175/347eb912-727c-458f-9972-0322074d572c">

**1024**
<img width="1440" alt="1024" src="https://github.com/soohyuneee/udemy-project-camp/assets/105588175/44ed695f-5bab-4dd5-a81f-17f2fe4608df">

**768**
<img width="1440" alt="768" src="https://github.com/soohyuneee/udemy-project-camp/assets/105588175/f3c6ef3a-2a14-4a95-a4af-64c375fe5f21">

**480**
<img width="1440" alt="480" src="https://github.com/soohyuneee/udemy-project-camp/assets/105588175/17aa589e-a5aa-42ed-9a13-02998c056941">

<br/>

## 📝 과제 설명
### 1차 과제
- 시맨틱 태그를 최대한 사용하여 HTML을 작성
- header, main, footer로 body 안의 영역 설정
- header : 로고와 nav 배치
- main : 배너, 어플리케이션, 가격, 후기 section과 aside로 나누어 배치
- footer : 사업자 등록 번호, 대표 등 웹사이트의 정보 표시  
<br/> 

### 2차 과제
- 미디어 쿼리를 사용하여 1920, 1024, 768, 480 가로 크기의 반응형 작성하기
- 주어진 Figma를 참고하여 CSS 작성
- HTML로 나눈 영역별로 id를 지정하여 나누어 CSS 작성
- CSS 선택자와 flex 속성을 적극 활용하여 레이아웃 작성
- 파비콘 적용 후 vercel로 배포
<br/>

### 3차 과제
- JavaScript로 슬라이드 기능을 구현
- querySelectorAll로 li 요소들을 NodeList로 받아와서 slides라는 변수에 할당
- nextSlide 함수 : 다음 슬라이드를 보여주는 함수, forEach를 사용하여 slides를 순회하며 인덱스를 비교
- CSS의 order 속성을 이용하여 슬라이드의 순서를 조절
- setInterval로 5초마다 nextSlide 함수가 실행되게 구현
