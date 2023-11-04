// $('.loading').css('display','block');
$(document).ready(function() {
  
  $('.spinner').fadeOut(1000 , function(){
    $('.loading').fadeOut(1000);
    $('body').css('overflow','auto')
  });


  (function linksScroll() {
    $("a[href^='#']").click(function(e) {
      let aHref = $(e.target).attr('href');
      let sectionOffSet = $(aHref).offset().top;
      
      $('html, body').animate({ scrollTop: sectionOffSet }, 1000);
    });
  })();
  
  
  
  (function sideBar(){
    const linksBoxWidth =$('.linksBox').outerWidth()
  
    $('.sideBar').css('left',`${-linksBoxWidth}px`);
    $('.toggleBar').click(function(){
      if($('.sideBar').css('left') == '0px')
      {
        $('.sideBar').animate({left:-linksBoxWidth} , 800)
      }
      else{
        $('.sideBar').animate({left:'0'} , 800)
      }
    })
  })();
  
  
  (function slideSection(){
    $('.singerData').slideUp();
    $('.singerData').eq(1).slideDown();
  
  $('.singer').click(function(e){
    let nextElement = $(e.target).next('.singerData');
    if (nextElement.css('display') == 'none') {
      $('.singerData').slideUp(500);
      nextElement.slideDown(500);
    } else {
      nextElement.slideUp(500);
    }
  });
  })();
  
  
  (function countDown() {
    
  let countDownTime = new Date("august 23, 2023 15:37:25").getTime();
  
  setInterval(timer , 1000);
  
  function timer(){
    let timeNow = new Date().getTime();
  
    let distance = countDownTime - timeNow;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    var element = $('.eventTime .row > div > div');
  
    if(distance > 0){
      element.eq(0).text(`${days} D`);
      element.eq(1).text(`${hours} H`);
      element.eq(2).text(`${minutes} M`);
      element.eq(3).text(`${seconds} S`);
    }
    else{
      clearInterval();
    }
  }
  })();


  $('#textarea').on('input',function () {
    const textarea = document.getElementById('textarea');
    const characterCount = $('#characterCount .number');
    const maxLength = parseInt(textarea.getAttribute('maxlength'));
    const remainingCharacters = maxLength - textarea.value.length;

    characterCount.text(`${remainingCharacters}`);
  })

});


