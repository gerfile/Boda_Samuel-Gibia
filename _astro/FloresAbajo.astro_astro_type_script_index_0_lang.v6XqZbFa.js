import {g as o} from "./index.DKtf60Sy.js";
import {S as a} from "./ScrollTrigger.BWsqEc1I.js";
o.registerPlugin(a);
typeof window < "u" && document.addEventListener("DOMContentLoaded", () => {
    console.log("🌸 Iniciando animación de FloresAbajo..."),
    o.set("#texto-esperamos", {
        opacity: 0,
        y: -30
    }),
    o.set("#anillos-final", {
        opacity: 0,
        scale: .6,
        rotation: -20
    }),
    o.set("#flores-abajo-izq", {
        opacity: 0,
        x: -100
    }),
    o.set("#flores-abajo-der", {
        opacity: 0,
        x: 100
    }),
    a.create({
        trigger: "#texto-esperamos-container",
        start: "top 85%",
        onEnter: () => {
            o.timeline().to("#texto-esperamos", {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            }).to("#flores-abajo-izq", {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.5").to("#flores-abajo-der", {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.out"
            }, "<").to("#anillos-final", {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 1.2,
                ease: "back.out(1.7)"
            }, "-=0.5"),
            o.to("#anillos-final", {
                rotation: 5,
                duration: 3,
                ease: "sine.inOut",
                yoyo: !0,
                repeat: -1,
                delay: 1.5
            })
        }
        ,
        onLeaveBack: () => {
            o.set("#texto-esperamos", {
                opacity: 0,
                y: -30
            }),
            o.set("#anillos-final", {
                opacity: 0,
                scale: .6,
                rotation: -20
            }),
            o.set("#flores-abajo-izq", {
                opacity: 0,
                x: -100
            }),
            o.set("#flores-abajo-der", {
                opacity: 0,
                x: 100
            })
        }
    }),
    console.log("🌸✨ FloresAbajo animación activada!")
}
);
