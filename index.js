const lang = document.querySelector('.lang > a');
const langBox =  document.querySelector('.lang_box');

lang.addEventListener('click', () =>{
    langBox.style.display = 'block';
});
langClose.addEventListener('click', () => {
    langBox.style.display = 'none';
});


let header = document.querySelector(".header_inner");
let headerHeight = header.offsetHeight;

window.onscroll = function() {
    let windowTop = window.scrollY;

    if(windowTop >= headerHeight){
        header.classList.add("drop");
    }else{
        header.classList.remove("drop")
    }
}