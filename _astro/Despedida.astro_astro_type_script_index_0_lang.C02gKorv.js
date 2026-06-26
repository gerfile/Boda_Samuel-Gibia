import {g as e} from "./index.DKtf60Sy.js";
import {S as a} from "./ScrollTrigger.BWsqEc1I.js";
e.registerPlugin(a);
typeof window < "u" && document.addEventListener("DOMContentLoaded", () => {
    console.log("💑 Iniciando sección de despedida de boda..."),
    e.set("#flores-arriba-despedida", {
        opacity: 0,
        y: 20
    }),
    e.set("#card-despedida", {
        opacity: 0,
        y: 30
    }),
    e.set("#flores-abajo-despedida", {
        opacity: 0,
        y: 20
    }),
    a.create({
        trigger: "#flores-arriba-despedida",
        start: "top 85%",
        onEnter: () => {
            e.timeline().to("#flores-arriba-despedida", {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            }, 0).to("#card-despedida", {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out"
            }, .2).to("#flores-abajo-despedida", {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            }, .4),
            e.to("#linea-decorativa svg", {
                scale: 1.15,
                duration: 2.5,
                ease: "sine.inOut",
                yoyo: !0,
                repeat: -1,
                delay: 1.5
            }),
            e.to("#boton-confirmar img", {
                y: -6,
                duration: 3,
                ease: "sine.inOut",
                yoyo: !0,
                repeat: -1,
                delay: 1.5
            })
        }
        ,
        onLeaveBack: () => {
            e.killTweensOf("#linea-decorativa svg"),
            e.killTweensOf("#boton-confirmar img"),
            e.set("#flores-arriba-despedida", {
                opacity: 0,
                y: 20
            }),
            e.set("#card-despedida", {
                opacity: 0,
                y: 30
            }),
            e.set("#flores-abajo-despedida", {
                opacity: 0,
                y: 20
            })
        }
    }),
    console.log("💑✨ ¡Sección de despedida activada!")
}
);
