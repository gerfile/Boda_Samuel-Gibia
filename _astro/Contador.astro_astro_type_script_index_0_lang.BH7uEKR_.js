import {g as t} from "./index.DKtf60Sy.js";
import {S as u} from "./ScrollTrigger.BWsqEc1I.js";
t.registerPlugin(u);
typeof window < "u" && document.addEventListener("DOMContentLoaded", () => {
    console.log("⏰ Iniciando contador elegante...");
    const p = new Date(2026, 11, 4, 0, 0, 0).getTime();
    function s() {
        const i = new Date().getTime()
          , e = p - i;
        if (e > 0) {
            const o = Math.floor(e / 864e5)
              , a = Math.floor(e % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60))
              , n = Math.floor(e % (1e3 * 60 * 60) / (1e3 * 60))
              , r = Math.floor(e % (1e3 * 60) / 1e3)
              , d = document.getElementById("dias")
              , c = document.getElementById("horas")
              , l = document.getElementById("minutos")
              , g = document.getElementById("segundos");
            d && (d.textContent = String(o).padStart(2, "0")),
            c && (c.textContent = String(a).padStart(2, "0")),
            l && (l.textContent = String(n).padStart(2, "0")),
            g && (g.textContent = String(r).padStart(2, "0"))
        } else {
            const o = document.getElementById("dias")
              , a = document.getElementById("horas")
              , n = document.getElementById("minutos")
              , r = document.getElementById("segundos");
            o && (o.textContent = "00"),
            a && (a.textContent = "00"),
            n && (n.textContent = "00"),
            r && (r.textContent = "00")
        }
    }
    s(),
    setInterval(s, 1e3),
    t.set("#texto-superior", {
        opacity: 0,
        y: -30
    }),
    t.set("#hoja-lateral-izq", {
        opacity: 0,
        x: -60
    }),
    t.set("#hoja-lateral-der", {
        opacity: 0,
        x: 60
    }),
    t.set("#card-contador", {
        opacity: 0,
        scale: .95,
        y: 30
    }),
    u.create({
        trigger: "#card-contador",
        start: "top 85%",
        end: "top 20%",
        onEnter: () => {
            t.timeline().to("#texto-superior", {
                opacity: 1,
                y: 0,
                duration: .8,
                ease: "power2.out"
            }).to("#card-contador", {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                ease: "back.out(1.3)"
            }, "-=0.4").to("#hoja-lateral-izq, #hoja-lateral-der", {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: "power3.out"
            }, "-=0.8")
        }
        ,
        onLeaveBack: () => {
            t.set("#texto-superior", {
                opacity: 0,
                y: -30
            }),
            t.set("#hoja-lateral-izq", {
                opacity: 0,
                x: -60
            }),
            t.set("#hoja-lateral-der", {
                opacity: 0,
                x: 60
            }),
            t.set("#card-contador", {
                opacity: 0,
                scale: .95,
                y: 30
            })
        }
    }),
    t.to(".separador-elegante", {
        scale: 1.3,
        opacity: .6,
        duration: 2,
        ease: "sine.inOut",
        yoyo: !0,
        repeat: -1,
        stagger: .2
    }),
    t.to(".numero-elegante", {
        textShadow: "0 0 20px rgba(201, 169, 97, 0.5), 0 4px 8px rgba(201, 169, 97, 0.3)",
        duration: 3,
        ease: "sine.inOut",
        yoyo: !0,
        repeat: -1,
        stagger: .4
    }),
    console.log("⏰✨ ¡Contador elegante activado!")
}
);
