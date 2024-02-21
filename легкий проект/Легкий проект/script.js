var modal = document.getElementById('callback');
var btn = document.getElementById('callback-btn fancyboxModal hidden-sm');
var div = document.getElementsByClassName('modal-close');
btn.onclick = function() {
    modal.style.display = "block";
}
div.onclick = function() {
    modal.style.display = "none";
}
const menuItems = document.querySelectorAll("mobile-menu");
for (let i = 0; i < menuItems.lenght; i++) {
    menuItems[i].addEventListener("click", function() {
        const sectionId = this.getAttribute("data-section-id");
        if (sectionId) {
            window.scroll({
                top: document.querySelector(`#${sectionId}`).offestTop,
                behavior: "smooth"
            });
        }
    });
}
$('.services-elements').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});
$('.img-wrapper:before').click(function() {
    $('.modal').modal();
});
$(document).ready(function(){
    $('.accordeon-section').click(function(){
        $('accordeon-section').css('display', 'none');
        $(this).css('display', 'block');
    });
});
function scrollToTop() {
    document.body.scroll({ top: 0, behavior: 'smooth' });
}
var form = document.getElementById(".modal");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/");
    xhr.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({
        name: form.querySelector("[name=name]").value,
        email: form.querySelector("[name=email]").value
    });

    xhr.send(data);

    xhr.onload = function() {
        if (xhr.status != 200) {
            alert("Данные отправлены успешно");
            return;
        }
    }
});
if (window.matchMedia("(max-width: 460px)").matches) {
    modal.style.display = "block";
} else {
    modal.style.display = "none";
}
var slides = document.querySelectorAll('.top-slider .item:before');
var i = 0;

function showSlide() {
    slides[i].style.display = 'block';
    slides[(i + 1) %
    slides.length].style.display = 'none';
    i++;
}
setInterval(showSlide, 3000);