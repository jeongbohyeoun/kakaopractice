const headEl = document.querySelector(".grid-first .head");
// 스크롤로 헤더 색상 바꾸기
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 450) { // 특정 위치에 도달하면
      headEl.classList.add('scroll'); // 배경색 변경을 위한 클래스를 추가합니다.
  }
  else {
    headEl.classList.remove('scroll');
  }
}, 300));


const spyEls = document.querySelectorAll('section.spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, 
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});


// Footer 우하단 버튼 
const FootBtnEl = document.querySelector('.foot__relate')
const FootEl = FootBtnEl.querySelector('.option')
const plusXEl = FootBtnEl.querySelector('.plus') 

FootBtnEl.addEventListener('click', function (event) {
  event.stopPropagation() // 이벤트 버블링 정지! - 버튼을 클릭했을 때 드롭다운 메뉴가 나타나야 함.
  if (FootEl.classList.contains('open')) {
    hideFoot()
  } else {
    showFoot()
  }
})
FootEl.addEventListener('click', function (event) {
  event.stopPropagation() // 이벤트 버블링 정지! - 드롭다운 메뉴 영역을 클릭했을 때 메뉴가 사라지지 않아야 함.
})
// 화면 전체를 클릭했을 때 메뉴가 사라짐.
window.addEventListener('click', () => {
  hideFoot()
})
// 특정 로직을 직관적인 함수 이름으로 묶음.
function showFoot() {
  FootEl.classList.add('open')
}
function hideFoot() {
  FootEl.classList.remove('open')
}


FootBtnEl.addEventListener('click', function (event) {
  event.stopPropagation() // 이벤트 버블링 정지! - 버튼을 클릭했을 때 드롭다운 메뉴가 나타나야 함.
  if (plusXEl.classList.contains('xbtn')) {
    hidePlus()
  } else {
    showPlus()
  }
})
plusXEl.addEventListener('click', function (event) {
  event.stopPropagation() // 이벤트 버블링 정지! - 드롭다운 메뉴 영역을 클릭했을 때 메뉴가 사라지지 않아야 함.
})
// 화면 전체를 클릭했을 때 메뉴가 사라짐.
window.addEventListener('click', () => {
  hidePlus()
})
// 특정 로직을 직관적인 함수 이름으로 묶음.
function showPlus() {
  plusXEl.classList.add('xbtn')
}
function hidePlus() {
  plusXEl.classList.remove('xbtn')
}

