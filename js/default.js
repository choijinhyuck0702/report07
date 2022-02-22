$(document).on('mouseover', '.pa-menu', function(){
    $('.ch-menu').slideDown(200);
});
$(document).on('mouseleave', '.pa-menu', function(){
    $('.ch-menu').slideUp(200);
});

let slideWrapper = document.getElementById('slider-wrap')
let slideIndex = 0;
let slides = document.querySelectorAll('#slider-wrap ul#slider li');
let totalSlides = slides.length;
let sliderWidth = slideWrapper.clientWidth;

slides.forEach(function(element){
    element.style.width = sliderWidth + 'px';
});

let slider = document.querySelector('#slider-wrap ul#slider');
slider.style.width = sliderWidth * totalSlides + 'px';

let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('previous');
nextBtn.addEventListener('click', function(){
    plusSlides(1);
});
prevBtn.addEventListener('click', function(){
    plusSlides(-1);
});

slideWrapper.addEventListener('mouseover', function(){
    this.classList.add('active');
    clearInterval(autoSlider);
});
slideWrapper.addEventListener('mouseleave', function(){
    this.classList.remove('active');
    autoSlider = setInterval(function(){
        plusSlides(1);
    }, 3000);
});

function plusSlides(n){
    slides[slideIndex].style.opacity = '1';
    showSlides(slideIndex += n);
    slides[slideIndex].style.opacity = '0.7';
}
function currentSlides(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    slideIndex = n;
    if(slideIndex == -1){
        slideIndex = totalSlides - 1;
    } else if (slideIndex === totalSlides){
        slideIndex = 0;
    }
    slider.style.left = -(sliderWidth * slideIndex) + 'px';
}
let autoSlider = setInterval(function(){
    plusSlides(1);
}, 3000);

$('.modal1').click(function(){
    $('#modal1').attr('style', 'display:block');
});
$('.modal2').click(function(){
    $('#modal2').attr('style', 'display:block');
});
$('.modal3').click(function(){
    $('#modal3').attr('style', 'display:block');
});
$('.modal4').click(function(){
    $('#modal4').attr('style', 'display:block');
});
$('.modal5').click(function(){
    $('#modal5').attr('style', 'display:block');
});
$('.close').click(function(){
    $('#modal1').attr('style', 'display:none');
    $('#modal2').attr('style', 'display:none');
    $('#modal3').attr('style', 'display:none');
    $('#modal4').attr('style', 'display:none');
    $('#modal5').attr('style', 'display:none');
});

$('.f-site').on({
    'click':function(){ 
         $('.f-list').slideToggle(200);
    }
 });