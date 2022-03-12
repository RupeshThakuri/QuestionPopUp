const plusSign = document.querySelectorAll('.plus');
const minusSign = document.querySelectorAll('.minus');

plusSign.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const plus = e.currentTarget.parentElement;
        const content = plus.parentElement.parentElement;
        plus.childNodes[1].classList.add("jadoo");
        plus.childNodes[3].classList.remove("minus");
        content.childNodes[3].classList.remove("invisible");
    });
});
minusSign.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const plus = e.currentTarget.parentElement;
        const content = plus.parentElement.parentElement;
        plus.childNodes[1].classList.remove("jadoo");
        plus.childNodes[3].classList.add("minus");
        content.childNodes[3].classList.add("invisible");
    });
});