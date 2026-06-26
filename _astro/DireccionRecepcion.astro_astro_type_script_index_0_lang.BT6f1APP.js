import {g as o} from "./index.DKtf60Sy.js";
import {S as n} from "./ScrollTrigger.BWsqEc1I.js";
o.registerPlugin(n);
typeof window < "u" && document.addEventListener("DOMContentLoaded", () => {
    o.set("#icono-salon", {
        opacity: 0,
        scale: .8
    }),
    o.set("#titulo-salon", {
        opacity: 0,
        scale: .9
    }),
    o.set("#info-salon", {
        opacity: 0,
        scale: .9
    }),
    o.set("#boton-salon", {
        opacity: 0,
        scale: .9
    }),
    n.create({
        trigger: "#icono-salon",
        start: "top 85%",
        end: "top 20%",
        onEnter: () => {
            o.timeline().to("#icono-salon, #titulo-salon, #info-salon, #boton-salon", {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }).to("#icono-salon", {
                scale: 1,
                duration: 1,
                ease: "back.out(1.5)"
            }, "<").to("#titulo-salon, #info-salon, #boton-salon", {
                scale: 1,
                duration: 1,
                ease: "back.out(1.2)"
            }, "<")
        }
        ,
        onLeaveBack: () => {
            o.timeline().to("#icono-salon, #titulo-salon, #info-salon, #boton-salon", {
                opacity: 0,
                duration: .5,
                ease: "power2.in"
            }).to("#icono-salon", {
                scale: .8,
                duration: .5,
                ease: "power2.in"
            }, "<").to("#titulo-salon, #info-salon, #boton-salon", {
                scale: .9,
                duration: .5,
                ease: "power2.in"
            }, "<")
        }
    }),
    console.log("🎉 Sección de Salón inicializada")
}
);
