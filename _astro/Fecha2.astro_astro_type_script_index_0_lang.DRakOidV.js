import {g as e} from "./index.DKtf60Sy.js";
import {S as o} from "./ScrollTrigger.BWsqEc1I.js";
e.registerPlugin(o);
typeof window < "u" && document.addEventListener("DOMContentLoaded", () => {
    console.log("📅 Iniciando animaciones de fecha regalos..."),
    e.set("#flores-regalos-fecha", {
        opacity: 0,
        scale: .8
    }),
    e.set("#hoja-regalos-fecha-izq", {
        opacity: 0,
        x: -30
    }),
    e.set("#hoja-regalos-fecha-der", {
        opacity: 0,
        x: 30
    }),
    e.set("#texto-regalos-fecha", {
        opacity: 0,
        scale: .9
    }),
    e.set("#fecha-regalos-evento", {
        opacity: 0,
        scale: .9
    }),
    e.set("#anio-regalos-evento", {
        opacity: 0,
        scale: .9
    }),
    o.create({
        trigger: "#flores-regalos-fecha",
        start: "top 85%",
        end: "top 20%",
        onEnter: () => {
            e.timeline().to("#flores-regalos-fecha, #hoja-regalos-fecha-izq, #hoja-regalos-fecha-der, #texto-regalos-fecha, #fecha-regalos-evento, #anio-regalos-evento", {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }).to("#flores-regalos-fecha", {
                scale: 1,
                duration: 1,
                ease: "back.out(1.4)"
            }, "<").to("#hoja-regalos-fecha-izq", {
                x: 0,
                duration: 1,
                ease: "power2.out"
            }, "<").to("#hoja-regalos-fecha-der", {
                x: 0,
                duration: 1,
                ease: "power2.out"
            }, "<").to("#texto-regalos-fecha, #fecha-regalos-evento, #anio-regalos-evento", {
                scale: 1,
                duration: 1,
                ease: "back.out(1.2)"
            }, "<")
        }
        ,
        onLeaveBack: () => {
            e.timeline().to("#flores-regalos-fecha, #hoja-regalos-fecha-izq, #hoja-regalos-fecha-der, #texto-regalos-fecha, #fecha-regalos-evento, #anio-regalos-evento", {
                opacity: 0,
                duration: .5,
                ease: "power2.in"
            }).to("#flores-regalos-fecha", {
                scale: .8,
                duration: .5,
                ease: "power2.in"
            }, "<").to("#hoja-regalos-fecha-izq", {
                x: -30,
                duration: .5,
                ease: "power2.in"
            }, "<").to("#hoja-regalos-fecha-der", {
                x: 30,
                duration: .5,
                ease: "power2.in"
            }, "<").to("#texto-regalos-fecha, #fecha-regalos-evento, #anio-regalos-evento", {
                scale: .9,
                duration: .5,
                ease: "power2.in"
            }, "<")
        }
    }),
    console.log("✨ Animaciones fecha regalos listas!")
}
);
