gsap.from("#img-1", {
    opacity: 0,
    y: 60,
    delay: 0.5,
    duration: 1,
})

gsap.from("#img-2", {
    opacity: 0,
    x: 60,
    delay: 0.5,
    duration: 1,
})

gsap.from("#img-3", {
    opacity: 0,
    y: -60,
    delay: 0.5,
    duration: 1

})

gsap.from(".container-2 p, .container-2 .about-us", {
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".container-2",
        scroller: "body",
        start: "top 70%",
    }
})