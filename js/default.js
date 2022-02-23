$(document).on('mouseover', '.pa-menu', function(){
    $('.ch-menu').slideDown(200);
});
$(document).on('mouseleave', '.pa-menu', function(){
    $('.ch-menu').slideUp(200);
});

let slideEls = document.querySelectorAll('.slider .img-box');
let selectIdx = 1;
function changeSlide(idx){
    for(let cnt=0;cnt<slideEls.length;cnt++){
        slideEls[cnt].style.opacity = '0';
    }
    slideEls[idx].style.opacity = '1';
}
setInterval(function(){
    if(selectIdx>2){
        selectIdx = 0;
    }
    changeSlide(selectIdx++);
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