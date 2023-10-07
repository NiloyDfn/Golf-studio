var crsrb = document.querySelector(".cursorBlur")
var crsr = document.querySelector(".cursor")
document.addEventListener("mousemove",function(dets){
crsr.style.left = dets.x+18+"px" 
crsr.style.top = dets.y+"px"
crsrb.style.left = dets.x-250+ "px"
crsrb.style.top = dets.y-250+"px"
})
var h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor="transparent"
        
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
        
    })
})
gsap.to(".nav",{
    height:"80px",
    backgroundColor:"black",
    duration:.75,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start: "top -10%",
        end:"end -30%",
        
        scrub:1
    }
})
gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller :"body",
        start :"top -50%",
        end:"top -100%",
        scrub:2
    }
})
gsap.from(".aboutus img,.aboutusin",{
    scale:.8,
    opacity:0,
    duration:1,
    // stagger:.4,
    scrollTrigger:{
        trigger:".aboutus",
        scroller:"body",
        start:"top 70%",
        end: "top 65%",
        scrub:3
    }
    
})
gsap.from(".card",{
    scale:.8,
    opacity:0,
    duration:1,
    stragger:.8,
    // stagger:.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end: "top 55%",
        scrub:2
    }
    
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
gsap.from(".page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
      }
})








