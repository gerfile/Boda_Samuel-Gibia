import {g as o} from "./index.DKtf60Sy.js";
import {S as e} from "./ScrollTrigger.BWsqEc1I.js";
o.registerPlugin(e);
typeof window < "u" && document.addEventListener("DOMContentLoaded", () => {
    console.log("👨‍👩‍👧‍👦 Iniciando animaciones de padres y padrinos..."),
    o.set("#texto-bendicion", {
        opacity: 0,
        y: 30,
        scale: .95
    }),
    o.set("#seccion-padres-novio", {
        opacity: 0,
        y: 30
    }),
    o.set("#seccion-padres-novia", {
        opacity: 0,
        y: 30
    }),
    o.set("#seccion-padrinos-anillos", {
        opacity: 0,
        y: 30
    }),
    o.set("#seccion-padrinos-civil", {
        opacity: 0,
        y: 30
    }),
    o.set("#adorno-izq", {
        opacity: 0,
        x: -30
    }),
    o.set("#adorno-der", {
        opacity: 0,
        x: 30
    }),
    e.create({
        trigger: "#texto-bendicion",
        start: "top 90%",
        end: "top 20%",
        onEnter: () => {
            console.log("✨ Padres y padrinos apareciendo simultáneamente..."),
            i()
        }
        ,
        onLeaveBack: () => {
            console.log("👋 Ocultando sección de padres y padrinos..."),
            n()
        }
    });
    function i() {
        o.to("#texto-bendicion", {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out"
        }),
        o.timeline({
            delay: .6
        }).to("#adorno-izq, #adorno-der, #seccion-padres-novio, #seccion-padres-novia, #seccion-padrinos-anillos, #seccion-padrinos-civil", {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }).to("#adorno-izq", {
            x: 0,
            duration: 1,
            ease: "power2.out"
        }, "<").to("#adorno-der", {
            x: 0,
            duration: 1,
            ease: "power2.out"
        }, "<").to("#seccion-padres-novio, #seccion-padres-novia, #seccion-padrinos-anillos, #seccion-padrinos-civil", {
            y: 0,
            duration: 1,
            ease: "power2.out"
        }, "<")
    }
    function n() {
        o.timeline().to("#texto-bendicion, #adorno-izq, #adorno-der, #seccion-padres-novio, #seccion-padres-novia, #seccion-padrinos-anillos, #seccion-padrinos-civil", {
            opacity: 0,
            duration: .5,
            ease: "power2.in"
        }).to("#adorno-izq", {
            x: -30,
            duration: .5,
            ease: "power2.in"
        }, "<").to("#adorno-der", {
            x: 30,
            duration: .5,
            ease: "power2.in"
        }, "<").to("#texto-bendicion, #seccion-padres-novio, #seccion-padres-novia, #seccion-padrinos-anillos, #seccion-padrinos-civil", {
            y: 30,
            duration: .5,
            ease: "power2.in"
        }, "<").to("#texto-bendicion", {
            scale: .95,
            duration: .5,
            ease: "power2.in"
        }, "<")
    }
}
);
