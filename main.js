import './style.scss'
import 'waypoints/lib/noframework.waypoints'
import ScrollReveal from 'scrollreveal'
import Typed from 'typed.js'

let options = {
    strings:['Foods...','Drinks...','Time...'],
    typeSpeed:90,
    backSpeed:90,
    delay:900,
    loop:true
}

new Typed ("#type",options)

let toDown = {
    distance: "50px",
    origin: 'top',
    interval: 300,
    duration: 1500
}
ScrollReveal().reveal(".top_down",toDown)

let toLeft = {
    distance: "50px",
    origin: 'right',
    interval: 300,
    duration: 1500
}
ScrollReveal().reveal(".to-left",toLeft)


let toRight = {
    distance: "50px",
    origin: 'left',
    interval: 300,
    duration: 1500
}
ScrollReveal().reveal(".to-right",toRight)

new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        let oldActiveLink = document.querySelector(".nav-link.active");
        oldActiveLink.classList.remove("active")
        let newActiveLink = document.querySelector(`[href="#about"]`);
        newActiveLink.classList.add("active");
    },
    offset: 20 
  })