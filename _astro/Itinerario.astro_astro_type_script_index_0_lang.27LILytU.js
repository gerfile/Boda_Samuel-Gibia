import {g as o} from "./index.DKtf60Sy.js";
import {S as e} from "./ScrollTrigger.BWsqEc1I.js";
o.registerPlugin(e);
o.fromTo(".titulo-itinerario", {
    opacity: 0,
    y: -30
}, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".titulo-itinerario",
        start: "top 85%",
        toggleActions: "play none none none",
        once: !0
    }
});
const t = document.getElementById("eventos-container");
t && e.create({
    trigger: t,
    start: "top 80%",
    toggleActions: "play none none none",
    once: !0,
    onEnter: () => {
        o.fromTo(".linea-central", {
            opacity: 0,
            scaleY: 0
        }, {
            opacity: 1,
            scaleY: 1,
            duration: 1.5,
            ease: "power2.out",
            transformOrigin: "top center"
        }),
        o.fromTo(".corazon-item", {
            opacity: 0,
            scale: 0
        }, {
            opacity: 1,
            scale: 1,
            duration: .8,
            ease: "back.out(1.7)",
            stagger: 0
        }),
        o.fromTo(".evento-item", {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0
        })
    }
});
