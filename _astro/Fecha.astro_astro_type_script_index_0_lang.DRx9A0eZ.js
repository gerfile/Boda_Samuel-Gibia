import {g as e} from "./index.DKtf60Sy.js";
import {S as o} from "./ScrollTrigger.BWsqEc1I.js";
e.registerPlugin(o);
typeof window < "u" && document.addEventListener("DOMContentLoaded", () => {
    console.log("📅 Iniciando animaciones de fecha..."),
    e.set("#flores-fecha", {
        opacity: 0,
        scale: .8
    }),
    e.set("#hoja-fecha-izq", {
        opacity: 0,
        x: -30
    }),
    e.set("#hoja-fecha-der", {
        opacity: 0,
        x: 30
    }),
    e.set("#texto-invitacion", {
        opacity: 0,
        scale: .9
    }),
    e.set("#fecha-evento", {
        opacity: 0,
        scale: .9
    }),
    e.set("#anio-evento", {
        opacity: 0,
        scale: .9
    }),
    o.create({
        trigger: "#flores-fecha",
        start: "top 85%",
        end: "top 20%",
        onEnter: () => {
            e.timeline().to("#flores-fecha, #hoja-fecha-izq, #hoja-fecha-der, #texto-invitacion, #fecha-evento, #anio-evento", {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }).to("#flores-fecha", {
                scale: 1,
                duration: 1,
                ease: "back.out(1.4)"
            }, "<").to("#hoja-fecha-izq", {
                x: 0,
                duration: 1,
                ease: "power2.out"
            }, "<").to("#hoja-fecha-der", {
                x: 0,
                duration: 1,
                ease: "power2.out"
            }, "<").to("#texto-invitacion, #fecha-evento, #anio-evento", {
                scale: 1,
                duration: 1,
                ease: "back.out(1.2)"
            }, "<")
        }
        ,
        onLeaveBack: () => {
            e.timeline().to("#flores-fecha, #hoja-fecha-izq, #hoja-fecha-der, #texto-invitacion, #fecha-evento, #anio-evento", {
                opacity: 0,
                duration: .5,
                ease: "power2.in"
            }).to("#flores-fecha", {
                scale: .8,
                duration: .5,
                ease: "power2.in"
            }, "<").to("#hoja-fecha-izq", {
                x: -30,
                duration: .5,
                ease: "power2.in"
            }, "<").to("#hoja-fecha-der", {
                x: 30,
                duration: .5,
                ease: "power2.in"
            }, "<").to("#texto-invitacion, #fecha-evento, #anio-evento", {
                scale: .9,
                duration: .5,
                ease: "power2.in"
            }, "<")
        }
    }),
    console.log("✨ Animaciones de fecha listas (sin movimiento continuo)!")
}
);
