$(function () {
  //workshop-show
  $('.seminar-btn').click(function () {
    $('.upcoming-seminar').addClass('upcoming-seminar-show');
  });
  $('.all-close').click(function () {
    $('.upcoming-seminar').removeClass('upcoming-seminar-show');
  });

  //semianer-show
  $('.workshop-btn').click(function () {
    $('.upcoming-workshop').addClass('upcoming-workshop-show');
  });
  $('.all-close').click(function () {
    $('.upcoming-workshop').removeClass('upcoming-workshop-show');
  });
  
  //Course-Slider-js
  $('.main-course-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2500,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });
  //About-part-counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  //Whom-Slider-js
  $('.main-whom-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'.whom-left-arrow',
    nextArrow:'.whom-right-arrow',
    autoplay: false,
    autoplaySpeed: 2500,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        }
      }
    ]
  });

  //Success-venobox-js
  $(document).ready(function(){
    $('.venobox').venobox(); 
  });

  //Student-slider-js
  $('.main-slider-student').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });
  //Comment-slider-js
  $('.main-testimonial-slider').slick({
    slidesToShow: 1,
    fade:true,
    speed:2000,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'.c-left',
    nextArrow:'.c-right',
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  //Teachers-slider-js
  $('.main-teachers-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  //payment-jquery
  $('.mobile-payment').click(function(){
    $('.main-paymenu').toggleClass('main-paymenu-show');
  });
  $(".mobile-payment").click(function(){
    $('.pay-icon').toggleClass("down"); 
  });

});


//scroll indicator
window.onscroll = function () {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//Form validation
var username = document.getElementById('fname');
var fname_err = document.getElementById('err-fname');
var label = document.getElementById('lab');

var lname = document.getElementById('lname');
var err_lname = document.getElementById('err-lname');
var lLabel = document.getElementById('lLabel');

var tel = document.getElementById('tel');
var err_tel = document.getElementById('err-tel');
var tellab = document.getElementById('tellab');

var gmail = document.getElementById('mail');
var gm_err = document.getElementById('err-mail');
var gm_label = document.getElementById('gmlab');
var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var text = document.getElementById('text-area');
var text_err = document.getElementById('text-err');
var text_label = document.getElementById('tlab');

function signin(){
    if(username.value==''){
        fname_err.innerHTML = "Please Enter Your Name!";
        username.style.borderColor= 'red';
        label.style.top = '-10px';
        label.style.background = '#fff';
        username.focus();
        return false;
    }
    if(lname.value==''){
      err_lname.innerHTML = "Enter Your Last Name";
      lname.style.borderColor= 'red';
      lLabel.style.top = '-10px';
      lLabel.style.background = '#fff';
      lname.focus();
      return false;
    }
    if(tel.value==''){
      err_tel.innerHTML = "Enter Number";
      tel.style.borderColor= 'red';
      tellab.style.top = '-10px';
      tellab.style.background = '#fff';
      tel.focus();
      return false;
    }
    if(gmail.value==''||!regex.test(gmail.value)){
        gm_err.innerHTML = "Please Enter Your Gmail!";
        gmail.style.borderColor= 'red';
        gm_label.style.top = '-10px';
        gm_label.style.background = '#fff';
        gmail.focus();
        return false;
    }
    if(text.value==''){
        text_err.innerHTML = "Enter Your Message";
        text.style.borderColor= 'red';
        text.focus();
        return false;
    }
};

function valid(){
    if(username.value!=''){
        fname_err.innerHTML = "";
        username.style.borderColor= '#ddd';
        label.style.background= '#fff';
        label.style.fontSize= '14px';
        label.style.top = '-10px';
    }
    if(lname.value!=''){
      err_lname.innerHTML = "";
      lname.style.borderColor= '#ddd';
      lLabel.style.top = '-10px';
      lLabel.style.fontSize = '14px';
      lLabel.style.background = '#fff';
    }
    if(tel.value!=''){
      err_tel.innerHTML = "";
      tel.style.borderColor = "#ddd";
      tellab.style.top = '-10px';
      tellab.style.fontSize = '14px';
      tellab.style.background = '#fff';
    }
    if(gmail.value!=''){
        gm_err.innerHTML = "";
        gmail.style.borderColor= '#ddd';
        gm_label.style.top = '-10px';
        gm_label.style.fontSize = '14px';
        gm_label.style.background = '#fff';
    }
    if(text.value!=''){
        text_err.innerHTML = "";
        text.style.borderColor= '#ddd';
    }
};
username.addEventListener('blur',valid);
lname.addEventListener('blur',valid);
tel.addEventListener('blur',valid);
gmail.addEventListener('blur',valid);
text.addEventListener('blur',valid);
