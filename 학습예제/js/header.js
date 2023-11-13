const header = document.querySelector(`header`)

let posY = 0;

window.addEventListener(`scroll`, () => {
    if(posY < window.scrollY) { //스크롤을 내리면
        header.classList.add(`hide`) // 헤더를 사라지게한다
    } else{ // 그렇지 않으면
        header.classList.remove(`hide`) //헤더를 나타나게 한다
    }
    
    if( 50 < window.scrollY) { //스크롤이 맨 위에 있을때
        header.classList.add(`scrolled`) // 원래모습으로
    } else{ // 그렇지 않으면
        header.classList.remove(`scrolled`) //색칠하기
    }
    
    posY = window.scrollY;
})

