const lang = document.querySelector('.lang > a');
const langBox =  document.querySelector('.lang_box');
const langClose = langBox.querySelector('.lang_close');

lang.addEventListener('click', () =>{
    langBox.style.display = 'block';
});
langClose.addEventListener('click', () => {
    langBox.style.display = 'none';
});
