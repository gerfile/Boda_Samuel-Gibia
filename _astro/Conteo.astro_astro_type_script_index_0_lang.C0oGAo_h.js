import {g as o} from "./index.DKtf60Sy.js";
import {S as e} from "./ScrollTrigger.BWsqEc1I.js";
o.registerPlugin(e);
typeof window < "u" && document.addEventListener("DOMContentLoaded", () => {
    o.set("#icono-direccion-regalos", {
        opacity: 0,
        scale: .8
    }),
    o.set("#titulo-regalos", {
        opacity: 0,
        scale: .9
    }),
    o.set("#titulo-dir-regalos", {
        opacity: 0,
        scale: .9
    }),
    o.set("#info-regalos", {
        opacity: 0,
        scale: .9
    }),
    o.set("#boton-regalos", {
        opacity: 0,
        scale: .9
    }),
    o.set("#flores-regalos-izq", {
        opacity: 0,
        x: -30
    }),
    o.set("#flores-regalos-der", {
        opacity: 0,
        x: 30
    }),
    e.create({
        trigger: "#icono-direccion-regalos",
        start: "top 85%",
        end: "top 20%",
        onEnter: () => {
            o.timeline().to("#icono-direccion-regalos, #flores-regalos-izq, #flores-regalos-der, #titulo-regalos, #titulo-dir-regalos, #info-regalos, #boton-regalos", {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }).to("#icono-direccion-regalos", {
                scale: 1,
                duration: 1,
                ease: "back.out(1.5)"
            }, "<").to("#flores-regalos-izq", {
                x: 0,
                duration: 1,
                ease: "power2.out"
            }, "<").to("#flores-regalos-der", {
                x: 0,
                duration: 1,
                ease: "power2.out"
            }, "<").to("#titulo-regalos, #titulo-dir-regalos, #info-regalos, #boton-regalos", {
                scale: 1,
                duration: 1,
                ease: "back.out(1.2)"
            }, "<")
        }
        ,
        onLeaveBack: () => {
            o.timeline().to("#icono-direccion-regalos, #flores-regalos-izq, #flores-regalos-der, #titulo-regalos, #titulo-dir-regalos, #info-regalos, #boton-regalos", {
                opacity: 0,
                duration: .5,
                ease: "power2.in"
            }).to("#icono-direccion-regalos", {
                scale: .8,
                duration: .5,
                ease: "power2.in"
            }, "<").to("#flores-regalos-izq", {
                x: -30,
                duration: .5,
                ease: "power2.in"
            }, "<").to("#flores-regalos-der", {
                x: 30,
                duration: .5,
                ease: "power2.in"
            }, "<").to("#titulo-regalos, #titulo-dir-regalos, #info-regalos, #boton-regalos", {
                scale: .9,
                duration: .5,
                ease: "power2.in"
            }, "<")
        }
    }),
    console.log("🎁🌸 Sección Recepción de Regalos inicializada")
}
);
