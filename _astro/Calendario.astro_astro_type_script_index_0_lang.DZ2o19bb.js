import {g as e} from "./index.DKtf60Sy.js";
import {S as l} from "./ScrollTrigger.BWsqEc1I.js";
e.registerPlugin(l);
const d = 15
  , c = 12
  , r = 2026
  , p = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
function u() {
    const o = p[c - 1];
    document.getElementById("nombre-mes").textContent = o;
    const i = new Date(r,c - 1,1).getDay()
      , s = new Date(r,c,0).getDate()
      , n = document.getElementById("dias-container");
    n.innerHTML = "";
    for (let a = 0; a < i; a++) {
        const t = document.createElement("div");
        n.appendChild(t)
    }
    for (let a = 1; a <= s; a++) {
        const t = document.createElement("div");
        a === d ? (t.className = "aspect-square flex items-center justify-center rounded-lg bg-gradient-to-br from-[#C9A961] to-[#e8c878] shadow-xl dia-calendario",
        t.id = "dia-especial",
        t.innerHTML = `<span class="font-charm text-2xl md:text-3xl text-white font-bold">${a}</span>`) : (t.className = "aspect-square flex items-center justify-center rounded-lg hover:bg-[#C9A961]/10 transition-all dia-calendario",
        t.innerHTML = `<span class="font-charm text-base md:text-lg text-gray-600">${a}</span>`),
        n.appendChild(t)
    }
}
typeof window < "u" && document.addEventListener("DOMContentLoaded", () => {
    console.log("📅 Iniciando animaciones del calendario..."),
    u(),
    o(),
    e.set("#hojas-cal-izq", {
        opacity: 0,
        x: 60
    }),
    e.set("#hojas-cal-der", {
        opacity: 0,
        x: -60
    }),
    e.set("#calendario-card", {
        opacity: 0,
        scale: .95
    }),
    e.set("#linea-izq", {
        opacity: 0,
        scaleX: 0
    }),
    e.set("#linea-der", {
        opacity: 0,
        scaleX: 0
    }),
    e.set("#titulo-mes-container h3", {
        opacity: 0,
        scale: .9
    }),
    e.set(".dia-calendario", {
        opacity: 0,
        scale: .8
    }),
    l.create({
        trigger: "#calendario-card",
        start: "top 85%",
        end: "top 20%",
        onEnter: () => o(),
        onLeaveBack: () => i()
    });
    function o() {
        e.timeline().to("#calendario-card", {
            opacity: 1,
            scale: 1,
            duration: .8,
            ease: "back.out(1.3)"
        }).to("#linea-izq, #linea-der", {
            opacity: 1,
            scaleX: 1,
            duration: .6,
            ease: "power2.out"
        }, "-=0.4").to("#titulo-mes-container h3", {
            opacity: 1,
            scale: 1,
            duration: .6,
            ease: "back.out(1.3)"
        }, "-=0.4").to(".dia-calendario", {
            opacity: 1,
            scale: 1,
            duration: .4,
            stagger: .02,
            ease: "back.out(1.2)"
        }, "-=0.3").to("#hojas-cal-izq, #hojas-cal-der", {
            opacity: .6,
            x: 0,
            duration: .8,
            ease: "power2.out"
        }, "-=0.6")
    }
    function i() {
        e.set("#hojas-cal-izq", {
            opacity: 0,
            x: 60
        }),
        e.set("#hojas-cal-der", {
            opacity: 0,
            x: -60
        }),
        e.set("#calendario-card", {
            opacity: 0,
            scale: .95
        }),
        e.set("#linea-izq", {
            opacity: 0,
            scaleX: 0
        }),
        e.set("#linea-der", {
            opacity: 0,
            scaleX: 0
        }),
        e.set("#titulo-mes-container h3", {
            opacity: 0,
            scale: .9
        }),
        e.set(".dia-calendario", {
            opacity: 0,
            scale: .8
        })
    }
    e.to("#hojas-cal-izq", {
        y: -8,
        rotation: -3,
        duration: 3,
        ease: "sine.inOut",
        yoyo: !0,
        repeat: -1,
        delay: 1
    }),
    e.to("#hojas-cal-der", {
        y: -8,
        rotation: 3,
        duration: 3,
        ease: "sine.inOut",
        yoyo: !0,
        repeat: -1,
        delay: 1.2
    }),
    e.to("#dia-especial", {
        scale: 1.05,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: !0,
        repeat: -1,
        delay: 1.5
    }),
    console.log("📅✨ ¡Calendario listo!")
}
);
