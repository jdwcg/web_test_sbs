function popHandler(elem) {
    var popWrap = document.querySelector('.pop_wrap')
    if(elem === 'open') {
        popWrap.style.display="flex"
    } else if((elem === 'close')) {
        popWrap.style.display="none"
    }
}