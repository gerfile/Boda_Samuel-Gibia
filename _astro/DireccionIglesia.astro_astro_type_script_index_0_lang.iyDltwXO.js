import {g as o} from "./index.DKtf60Sy.js";
import {S as i} from "./ScrollTrigger.BWsqEc1I.js";
o.registerPlugin(i);
typeof window < "u" && document.addEventListener("DOMContentLoaded", () => {
    o.set("#icono-direccion", {
        opacity: 0,
        scale: .8
    }),
    o.set("#titulo-direccion", {
        opacity: 0,
        scale: .9
    }),
    o.set("#info-direccion", {
        opacity: 0,
        scale: .9
    }),
    o.set("#boton-ubicacion", {
        opacity: 0,
        scale: .9
    }),
    o.set("#flores-dir-izq", {
        opacity: 0,
        x: -30
    }),
    o.set("#flores-dir-der", {
        opacity: 0,
        x: 30
    }),
    i.create({
        trigger: "#icono-direccion",
        start: "top 85%",
        end: "top 20%",
        onEnter: () => {
            o.timeline().to("#icono-direccion, #flores-dir-izq, #flores-dir-der, #titulo-direccion, #info-direccion, #boton-ubicacion", {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }).to("#icono-direccion", {
                scale: 1,
                duration: 1,
                ease: "back.out(1.5)"
            }, "<").to("#flores-dir-izq", {
                x: 0,
                duration: 1,
                ease: "power2.out"
            }, "<").to("#flores-dir-der", {
                x: 0,
                duration: 1,
                ease: "power2.out"
            }, "<").to("#titulo-direccion, #info-direccion, #boton-ubicacion", {
                scale: 1,
                duration: 1,
                ease: "back.out(1.2)"
            }, "<")
        }
        ,
        onLeaveBack: () => {
            o.timeline().to("#icono-direccion, #flores-dir-izq, #flores-dir-der, #titulo-direccion, #info-direccion, #boton-ubicacion", {
                opacity: 0,
                duration: .5,
                ease: "power2.in"
            }).to("#icono-direccion", {
                scale: .8,
                duration: .5,
                ease: "power2.in"
            }, "<").to("#flores-dir-izq", {
                x: -30,
                duration: .5,
                ease: "power2.in"
            }, "<").to("#flores-dir-der", {
                x: 30,
                duration: .5,
                ease: "power2.in"
            }, "<").to("#titulo-direccion, #info-direccion, #boton-ubicacion", {
                scale: .9,
                duration: .5,
                ease: "power2.in"
            }, "<")
        }
    }),
    console.log("📍🌸 Sección de Dirección con FloresBorde.png inicializada")
}
);
