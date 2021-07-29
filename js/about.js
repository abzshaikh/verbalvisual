$(function() {
  var rellax = new Rellax('.shopify-huge-rellax', {
    center:true,
    speed: -2,
  });
  gsap.from(".banner-desc", { duration: 1, y: -50, opacity: 0, ease: 'power2.inOut', delay: 2});

  var $carousel = $('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    fade: true,
    autoPlay: false
  });
  // $carousel.flickity('playPlayer');
  // Flickity instance
  var flkty = $carousel.data('flickity');
  // elements
  var $cellButtonGroup = $('.button-group--cells');
  var $cellButtons = $cellButtonGroup.find('.button');
  // update selected cellButtons
  $carousel.on( 'select.flickity', function() {
    $cellButtons.filter('.is-selected')
    .removeClass('is-selected');
    $cellButtons.eq( flkty.selectedIndex )
    .addClass('is-selected');
  });

  // select cell on button click
  $cellButtonGroup.on( 'click', '.button', function() {
    var index = $(this).index();
    $carousel.flickity( 'select', index );
  });


  $(".button-group .button").on("click", function() {
    gsap.from(".carousel-cell h4", { duration: 1, y: 100, opacity: 0, delay: 0.3});
    gsap.from(".carousel-cell h2", { duration: 1, y: 100, opacity: 0, delay: 0.4});
    gsap.from(".carousel-cell ul li, .icon-img-wrapper", { duration:1, y:150, opacity: 0, delay: 0.5});
  });

  var mySwiper = new Swiper('.swiper-container-big', {
    loop: true,
    speed: 1000,
    simulateTouch: false,

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
              ' of ' +
              '<span class="' + totalClass + '"></span>';
  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper = new Swiper('.swiper-container-small', {
    loop: true,
    speed: 1000,
    initialSlide: 1,
    simulateTouch: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper = new Swiper('.swiper-container-small-one', {
    loop: true,
    speed: 1000,
    initialSlide: 2,
    simulateTouch: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper = new Swiper('.swiper-container-small-two', {
    loop: true,
    speed: 1000,
    initialSlide: 3,
    simulateTouch: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
let c = 0;
  $(".swiper-container-big .swiper-button-next").on("click",function(){
    $(this).css("pointer-events","none");
    setTimeout(function() {
      $(".swiper-container-big .swiper-button-next").css("pointer-events","auto");
    },1000);
    $(".swiper-container-small .swiper-button-next, .swiper-container-small-one .swiper-button-next, .swiper-container-small-two .swiper-button-next").trigger("click");
    let x = $(".leader-text-wrapper .selected");
    if (c < 3 ){
      x.removeClass("selected");
      x.next().addClass("selected");
      c++;
    }
    else {
      $(".lead-text-one").addClass("selected");
      x.removeClass("selected");
      c = 0;
    }
  });

  let frac = $(".swiper-pagination-fraction").html();
  $(".slide-number").html(frac);

  $(".slide-number .swiper-pagination-current").prepend("0");
  $(".slide-number .swiper-pagination-total").prepend("0");


  $(".next-slide-btn").on("click", function() {
    $(this).css("pointer-events","none");
    $(".swiper-container-big .swiper-button-next").trigger("click");
    setTimeout(function() {
      $(".next-slide-btn").css("pointer-events","auto");
    },1000);
    let frac1 = $(".swiper-pagination-fraction").html();
    $(".slide-number").html(frac1);
    $(".slide-number .swiper-pagination-current").prepend("0");
    $(".slide-number .swiper-pagination-total").prepend("0");

    gsap.from(".lead-text-one *", { duration: 1, y: 50, opacity: 0, stagger: 0.1});
    gsap.from(".lead-text-two *", { duration: 1, y: 50, opacity: 0, stagger: 0.1});
    gsap.from(".lead-text-three *", { duration: 1, y: 50, opacity: 0, stagger: 0.1});
    gsap.from(".lead-text-four *", { duration: 1, y: 50, opacity: 0, stagger: 0.1});
  });

  var $circle = $('#circle1');

  function moveCircle(e) {
    TweenLite.to($circle, 0.3, {
      css: {
      left: e.pageX + 18,
      top: e.pageY + 20
      }
    });
    
    if(e.pageX > 920){
      $("#circle1").addClass("click-right").removeClass("click-left");
      $("#circle1 svg").css("transform", "rotate(0deg)");
    }
    else {
      $("#circle1").addClass("click-left").removeClass("click-right");
      $("#circle1 svg").css("transform", "rotate(-180deg)");
    }

    if(e.pageY < 9800 || e.pageY > 10900) {
      $("#circle1").css("opacity", 0);
    }
    else {
      $("#circle1").css("opacity", 1);
    }
  }
  $(".testimony-wrapper").on('mousemove', moveCircle);

  let a = 0;
  $("#circle1").on("click", function() {
    gsap.from(".testimony-wrapper .content-wrapper .row.selected", { duration: 1, y: -100, opacity: 0, stagger: 0.1});
    
    let x = $(".testimony-wrapper .content-wrapper .row.selected");
    if (a < 1) {
      x.removeClass("selected");
      x.next().addClass("selected");
      a++;
    }
    else {
      x.removeClass("selected");
      $(".testimony-1").addClass("selected");
      a = 0;
    }
  });

  var tl8 = new TimelineLite({onComplete:function() {
    this.restart()}
  });
  var tl9 = new TimelineLite({onComplete:function() {
    this.restart()}
  });
  var tl10 = new TimelineLite({onComplete:function() {
    this.restart()}
  });
  var tl11 = new TimelineLite({onComplete:function() {
    this.restart()}
  });

  tl8.to("div.i", { duration: 25, rotation:360, transformOrigin:"850px 1050px", ease: 'power3.inOut'});
  tl9.to("div.j", { duration: 55, rotation:360, transformOrigin:"-850px -1050px", ease: 'power2.inOut'});
  tl10.to("div.k", { duration: 45, rotation:360, transformOrigin:"-850px -1050px", ease: 'power1.inOut'});
  tl11.to("div.l", { duration: 20, transform: "translate(300px, -1300px)", ease: 'power4.inOut'});

});