function section1(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4", {
    y: -30,        
    opacity: 0,    
    duration: 0.7,    
    delay: 0.5, 
    stagger:0.15
});

tl.from(".center-1 h1",{
    x:-500,
    opacity: 0,
    duration: 0.5
},"-=0.3")

tl.from(".center-1 p",{
    x:-100,
    opacity: 0,
    duration: 0.4
})

tl.from(".center-2 img",{
    opacity: 0,
    duration: 0.5,
    x:200
},"-=0.7")

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".section1bottom img").forEach((img, index) => {
    gsap.from(img, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: index * 0.15, 
        scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none none", 
        }
    });
});
}

function section2(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 60%",
            end:"top -30%",
            scrub:2,
        }
    })
    
    tl2.from(".early",{
        y:30,
        opacity: 0,
        duration: 0.5
    })
    
    tl2.from("#left1",{
        x:-300,
        opacity: 0,
        duration: 1
    },"anim1")
    
    tl2.from("#right1",{
        x:300,
        opacity: 0,
        duration: 1
    },"anim1")
    
    
    tl2.from("#left2",{
        x:-300,
        opacity: 0,
        duration: 1
    },"anim2")
    
    tl2.from("#right2",{
        x:300,
        opacity: 0,
        duration: 1
    },"anim2")
}
function section3(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3",
            scroller:"body",
            start:"top 60%",
            end:"top -30%",
            scrub:2,
        }
    })
    
    tl2.from(".homec",{
        y:30,
        opacity: 0,
        duration: 0.5
    })
    
    tl2.from("#left3",{
        scale: 0.5,
        z: -100,
        opacity: 0,
        duration: 1
    },"anim1")
    
    tl2.from("#right3",{
        scale: 0.5,
        z: -100,
        opacity: 0,
        duration: 1
    },"anim1")
    
    
    tl2.from("#left4",{
        scale: 0.5,
        z: -100,
        opacity: 0,
        duration: 1
    },"anim2")
    
    tl2.from("#right4",{
        scale: 0.5,
        z: -100,
        opacity: 0,
        duration: 1
    },"anim2")
}
function section4(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section4",
            scroller:"body",
            start:"top 40%",
            end:"top -30%",
            scrub:2,
        }
    })
    
    tl2.from(".modern",{
        y:30,
        opacity: 0,
        duration: 0.5
    })
    
    tl2.from("#left5",{
        y:-300,
        x:-300,
        opacity: 0,
        duration: 1
    },"anim1")
    
    tl2.from("#right5",{
        y:300,
        x:300,
        opacity: 0,
        duration: 1
    },"anim1")
    
    
    tl2.from("#left6",{
        y:-300,
        x:-300,
        opacity: 0,
        duration: 1
    },"anim2")
    
    tl2.from("#right6",{
        y:300,
        x:300,
        opacity: 0,
        duration: 1
    },"anim2")
    
}
section1()
section2()
section3()
section4()

// function breakText(){
//     var h1=document.querySelector("#footer-cap")
//     var h1Text=h1.textContent
    
//     var splittedText = h1Text.split("")

//     var clutter = ""

//     splittedText.forEach(function(elem){
//         clutter += `<span>${elem}</span>`
//     })

//     h1.innerHTML = clutter
// }

// breakText()

// gsap.from("#footer-cap span", {
//     y: 100,
//     opacity: 0,
//     duration: 1, // Extremely quick animation
//     stagger: 0.5, // Reduced stagger time for faster sequencing
//     scrollTrigger: {
//         trigger: "#right4", // Element that triggers the animation
//         start: "top bottom", // Trigger animation when the top of #footer-cap hits the bottom of the viewport
//         end: "top top", // End animation when the top of #footer-cap hits the top of the viewport
//         scrub: true, // Animation progresses based on scroll position
//     }
// });
gsap.from("#footer-cap", {
        scale:0.8,
        z:20,
        opacity: 0,
        scrollTrigger: {
        trigger: "#footer-cap", 
        start: "top bottom", 
        end: "top -80%", 
    }
});

