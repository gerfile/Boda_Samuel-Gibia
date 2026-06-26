import {g as e} from "./index.DKtf60Sy.js";
import {S as o} from "./ScrollTrigger.BWsqEc1I.js";
e.registerPlugin(o);
document.addEventListener("DOMContentLoaded", () => {
    console.log("💒 Iniciando animaciones de dedicatoria..."),
    e.set("#flores-arriba-ded", {
        opacity: 0,
        y: -30
    }),
    e.set("#texto-ded", {
        opacity: 0,
        scale: .9
    }),
    e.set("#referencia-ded", {
        opacity: 0,
        scale: .9
    }),
    e.set("#flores-abajo-ded", {
        opacity: 0,
        y: 30
    }),
    o.create({
        trigger: "#texto-ded",
        start: "top 100%",
        end: "top 20%",
        onEnter: () => {
            console.log("💒 Dedicatoria apareciendo..."),
            a()
        }
        ,
        onLeaveBack: () => {
            console.log("💒 Dedicatoria desapareciendo..."),
            t()
        }
    });
    function a() {
        e.timeline().to("#flores-arriba-ded, #texto-ded, #referencia-ded, #flores-abajo-ded", {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }).to("#flores-arriba-ded", {
            y: 0,
            duration: 1,
            ease: "power2.out"
        }, "<").to("#texto-ded", {
            scale: 1,
            duration: 1,
            ease: "back.out(1.2)"
        }, "<").to("#referencia-ded", {
            scale: 1,
            duration: 1,
            ease: "back.out(1.2)"
        }, "<").to("#flores-abajo-ded", {
            y: 0,
            duration: 1,
            ease: "power2.out"
        }, "<")
    }
    function t() {
        e.timeline().to("#flores-arriba-ded, #texto-ded, #referencia-ded, #flores-abajo-ded", {
            opacity: 0,
            duration: .5,
            ease: "power2.in"
        }).to("#flores-arriba-ded", {
            y: -30,
            duration: .5,
            ease: "power2.in"
        }, "<").to("#texto-ded", {
            scale: .9,
            duration: .5,
            ease: "power2.in"
        }, "<").to("#referencia-ded", {
            scale: .9,
            duration: .5,
            ease: "power2.in"
        }, "<").to("#flores-abajo-ded", {
            y: 30,
            duration: .5,
            ease: "power2.in"
        }, "<")
    }
}
);
