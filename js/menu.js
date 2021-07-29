$(function () {
    var tl4 = new TimelineLite({onComplete:function() {
        this.restart()}
    });
    var tl5 = new TimelineLite({onComplete:function() {
        this.restart()}
    });
    var tl6 = new TimelineLite({onComplete:function() {
        this.restart()}
    });
    var tl7 = new TimelineLite({onComplete:function() {
        this.restart()}
    });

    tl4.to("div.e", { duration: 10, transform: "translate(0px, -500px)", ease: 'power1.inOut'});
    tl4.to("div.e", { duration: 10, transform: "translate(200px, -100px)", ease: 'power1.inOut'});
    tl4.to("div.e", { duration: 10, transform: "translate(200px, -200px)", ease: 'power1.inOut'});
    tl4.to("div.e", { duration: 10, transform: "translate(0px, -300px)", ease: 'power1.inOut'});

    tl5.to("div.f", { duration: 10, transform: "translate(0px, -300px)", ease: 'power1.inOut'});
    tl5.to("div.f", { duration: 10, transform: "translate(-500px, -100px)", ease: 'power1.inOut'});
    tl5.to("div.f", { duration: 10, transform: "translate(200px, -200px)", ease: 'power1.inOut'});
    tl5.to("div.f", { duration: 10, transform: "translate(0px, -300px)", ease: 'power1.inOut'});

    tl6.to("div.g", { duration: 10, transform: "translate(0px, -600px)", ease: 'power1.inOut'});
    tl6.to("div.g", { duration: 10, transform: "translate(-500px, -100px)", ease: 'power1.inOut'});
    tl6.to("div.g", { duration: 10, transform: "translate(200px, -200px)", ease: 'power1.inOut'});
    tl6.to("div.g", { duration: 10, transform: "translate(0px, -300px)", ease: 'power1.inOut'});

    tl7.to("div.h", { duration: 10, transform: "translate(0px, -300px)", ease: 'power1.inOut'});
    tl7.to("div.h", { duration: 10, transform: "translate(-500px, -100px)", ease: 'power1.inOut'});
    tl7.to("div.h", { duration: 10, transform: "translate(200px, -200px)", ease: 'power1.inOut'});
    tl7.to("div.h", { duration: 10, transform: "translate(0px, -300px)", ease: 'power1.inOut'});
})