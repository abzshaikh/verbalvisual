$(function(){
  AOS.init({
    duration: 1000,
    easing: 'ease',
    throttleDelay: 500,
    delay: 100
  });

  butter.init({
    wrapperId: 'main-wrapper',
    wrapperDamper: 0.06
  });

  var tl = new TimelineLite({onComplete:function() {
    this.restart()}
  });
  var tl1 = new TimelineLite({onComplete:function() {
    this.restart()}
  });
  var tl2 = new TimelineLite({onComplete:function() {
    this.restart()}
  });

  var tl3 = new TimelineLite({onComplete:function() {
    this.restart()}
  });

    tl.to("div.a", { duration: 15, transform: "translate(1900px, -300px)", ease: 'power1.inOut'});
    tl.to("div.a", { duration: 10, transform: "translate(1900px, -900px)", ease: 'power1.inOut'});
    tl.to("div.a", { duration: 15, transform: "translate(-1900px, 500px)", ease: 'power1.inOut'});
    tl.to("div.a", { duration: 15, transform: "translate(-1900px, 400px)", ease: 'power1.inOut'});

    tl1.to("div.b", { duration: 20, transform: "translate(-1000px, 600px)", ease: 'power1.inOut'});
    tl1.to("div.b", { duration: 10, transform: "translate(-1800px, -300px)", ease: 'power1.inOut'});
    tl1.to("div.b", { duration: 20, transform: "translate(-1700px, 900px)", ease: 'power1.inOut'});
    tl1.to("div.b", { duration: 20, transform: "translate(900px, -700px)", ease: 'power1.inOut'});

    tl2.to("div.c", { duration: 20, transform: "translate(1000px, 600px)", ease: 'power1.inOut'});
    tl2.to("div.c", { duration: 10, transform: "translate(-1000px, -600px)", ease: 'power1.inOut'});

    tl3.to("div.d", { duration: 10, transform: "translate(-900px, -100px)", ease: 'power1.inOut'});
    tl3.to("div.d", { duration: 20, transform: "translate(-900px, -900px)", ease: 'power1.inOut'});
    tl3.to("div.d", { duration: 15, transform: "translate(900px, 500px)", ease: 'power1.inOut'});

  gsap.from(".text-wrap h1", { duration: 1, transform: "translate(0px, 0px) rotate(-37deg)", opacity: 0, ease: 'power1.inOut', stagger: 0.1, delay: 1.5})
  gsap.from(".banner-logo", { duration: 2, filter: "blur(50px)", opacity: 0, ease: 'power2.inOut'});

  var rellax = new Rellax('.rellax', {
    center:true,
    speed: 3
  });

  var rellax = new Rellax('.bg-rellax', {
    center:true,
    speed: -3
  });

  var rellax = new Rellax('.img-left-rellax', {
    center:true,
    speed: -1
  });

  var rellax = new Rellax('.img-right-rellax', {
    center:true,
    speed: -1
  });

  var $circle = $('#circle'),
  $wrapper = $('.content-img'); 

  function moveCircle(e) {
    TweenLite.to($circle, 0.1, {
      css: {
      left: e.pageX - 45,
      top: e.pageY - 45
      }
    });
  }

  var flag = false;
  $($wrapper).mouseover(function(){
    flag = true;
    TweenLite.to($circle,0.7,{scale:1,autoAlpha:1});
    $($wrapper).on('mousemove', moveCircle);

    gsap.to($(this).siblings().find(".tilt-text"), {opacity: 0, duration: 0.6});
    gsap.to($(this).find(".bg-blur-mask"), { opacity: 1, duration: 0.6});
    gsap.to($(this).find(".hover-logo"), { opacity: 1, duration: 0.6});

    gsap.to($(this).find(".right-pop-img.type-1"), { transform: "rotateZ(20deg)", right: '-231px', top: '80px', opacity: 1, duration: 0.8, ease: "power1.inOut"});
    gsap.to($(this).find(".left-pop-img.type-1"), { transform: "rotateZ(-20deg)", left: '-231px', top: '380px', opacity: 1, duration: 0.8, ease: "power1.inOut"});

    gsap.to($(this).find(".right-pop-img.type-2"), { transform: "rotateZ(20deg)", right: '-231px', top: '240px', opacity: 1, duration: 0.8, ease: "power1.inOut"});
    gsap.to($(this).find(".left-pop-img.type-2"), { transform: "rotateZ(-20deg)", left: '-231px', top: '200px', opacity: 1, duration: 0.8, ease: "power1.inOut"});

    gsap.to($(this).find(".right-pop-img.type-3"), { transform: "rotateZ(20deg)", right: '-231px', top: '140px', opacity: 1, duration: 0.8, ease: "power1.inOut"});
    gsap.to($(this).find(".left-pop-img.type-3"), { transform: "rotateZ(-20deg)", left: '-231px', top: '330px', opacity: 1, duration: 0.8, ease: "power1.inOut"});
  });
  $($wrapper).mouseout(function(){
    flag = false;
    TweenLite.to($circle,0.7,{scale:1,autoAlpha:0});

    gsap.to($(this).siblings().find(".tilt-text"), {opacity: 1, duration: 0.6});
    gsap.to($(this).find(".bg-blur-mask"), { opacity: 0, duration: 0.6});
    gsap.to($(this).find(".hover-logo"), { opacity: 0, duration: 0.6});

    gsap.to($(this).find(".right-pop-img.type-1"), { transform: "rotateZ(0deg)", right: '0', top: '30', opacity: 0, duration: 0.8, ease: "power1.inOut"});
    gsap.to($(this).find(".left-pop-img.type-1"), { transform: "rotateZ(0deg)", left: '0', top: '300', opacity: 0, duration: 0.8, ease: "power1.inOut"});

    gsap.to($(this).find(".right-pop-img.type-2"), { transform: "rotateZ(0deg)", right: '0', top: '160', opacity: 0, duration: 0.8, ease: "power1.inOut"});
    gsap.to($(this).find(".left-pop-img.type-2"), { transform: "rotateZ(0deg)", left: '0', top: '120', opacity: 0, duration: 0.8, ease: "power1.inOut"});

    gsap.to($(this).find(".right-pop-img.type-3"), { transform: "rotateZ(0deg)", right: '0', top: '60', opacity: 0, duration: 0.8, ease: "power1.inOut"});
    gsap.to($(this).find(".left-pop-img.type-3"), { transform: "rotateZ(0deg)", left: '0', top: '250', opacity: 0, duration: 0.8, ease: "power1.inOut"});
  });

  gsap.from(".clients .row", {
    scrollTrigger: ".clients .row", 
    y: 200,
    duration: 2,
    opacity: 0,
    stagger: 0.5, 
    delay: 0.5
  });

  // animateDiv('.a');
  // animateDiv('.b');
  // animateDiv('.c');
  // animateDiv('.d');
  // animateDiv('.e');
  // animateDiv('.f');
  // animateDiv('.g');
  // animateDiv('.h');

  // function makeNewPosition(){
  //   var h = $(window).height() + 100;
  //   var w = $(window).width() + 100;
  //   var nh = Math.floor(Math.random() * h);
  //   var nw = Math.floor(Math.random() * w);
  //   return [nh,nw];    
  // }

  // function animateDiv(myclass){
  //   var newq = makeNewPosition();
  //   $(myclass).animate({ top: newq[0], left: newq[1]  }, 20000,   function(){
  //     animateDiv(myclass);        
  //   }); 
  // };
  

  // Multiple Colored Animated Circle - Get Canvas element by Id
  var canvas5 = document.getElementById( "canvasBg" );

  // Get drawing context
  var c5 = canvas5.getContext( '2d' );
  c5.filter = 'blur(40px)';
  // The Circle class
  function ColoredCircle( x, y, dx, dy, radius, color ) {
    this.x 	= x;
    this.y 	= y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color 	= color;
    this.draw = function() {
      c5.beginPath();
      c5.arc( this.x, this.y, this.radius, 0, Math.PI * 3, false );
      c5.fillStyle = this.color;
      c5.fill();
    }
    this.update = function() {
      if( this.x + this.radius > 500 || this.x - this.radius < 0 ) {
        this.dx = -this.dx;
      }
      if( this.y + this.radius > 500 || this.y - this.radius < 0 ) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    }
  }
  var coloredCircles = [];
  var circleColors = [ 'red', 'red', 'blue', 'blue', 'red' ];
  // Radius
  var radius = 35;
  for( var i = 0; i < 5; i++ )  {
    // Starting Position
    var x = Math.random() * ( 400 - radius * 2 ) + radius;
    var y = Math.random() * ( 400 - radius * 2) + radius;
    // Speed in x and y direction
      var dx = ( Math.random() - 0.5 ) * 1.7;
      var dy = ( Math.random() - 0.5 ) * 1;
    // Color
    var color = circleColors[ i ];
    coloredCircles.push( new ColoredCircle( x, y, dx, dy, radius, color ) );
  }
  function animate5() {
    requestAnimationFrame( animate5 );
    c5.clearRect( 0, 0, 500, 500 );
    for( var r = 0; r < 5; r++ ) {
      coloredCircles[ r ].update();
    }
  }

  animate5();
});
