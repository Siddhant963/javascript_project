var tl = gsap.timeline();
tl.from("h3", { 
    y:-30,
    duration:1,
    delay: 0.5,
    yoyo:true,

})
tl.from("h4" ,{ 
    y:-30,
    duration:1,
    stagger:0.5,
})
tl.to("h1", { 
    y:100,
    duration:1,
    scale:1.5,
    yoyo:1,
   rotate:360,
})