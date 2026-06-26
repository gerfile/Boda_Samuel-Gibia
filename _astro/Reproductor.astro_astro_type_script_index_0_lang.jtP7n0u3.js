import {g as a} from "./index.DKtf60Sy.js";
import {S as m} from "./ScrollTrigger.BWsqEc1I.js";
a.registerPlugin(m);
let s = !1
  , d = 0
  , i = 0;
document.addEventListener("DOMContentLoaded", () => {
    console.log("🎵 Iniciando reproductor con timing inteligente..."),
    a.set("#music-player-container", {
        opacity: 0,
        y: 50,
        scale: .9
    }),
    a.set("#player-title", {
        opacity: 0,
        y: 30
    }),
    a.set("#controls-container", {
        opacity: 0,
        scale: .8
    }),
    a.set("#progress-container", {
        opacity: 0,
        y: 20
    }),
    a.set("#romantic-text", {
        opacity: 0
    }),
    m.create({
        trigger: "#music-player-container",
        start: "top 100%",
        end: "bottom 5%",
        onEnter: () => {
            console.log("🎵 ✨ Reproductor apareciendo..."),
            o()
        }
        ,
        onEnterBack: () => {
            console.log("🎵 👆 Usuario regresó, reproductor visible"),
            o()
        }
        ,
        onLeaveBack: () => {
            console.log("🎵 ⬆️ Reproductor desapareciendo elegantemente"),
            t()
        }
    });
    function o() {
        a.timeline().to("#music-player-container", {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: .8,
            ease: "power3.out"
        }).to("#player-title", {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power2.out"
        }, "-=0.4").to("#controls-container", {
            opacity: 1,
            scale: 1,
            duration: .6,
            ease: "back.out(1.5)"
        }, "-=0.3").to("#progress-container", {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power2.out"
        }, "-=0.4").to("#romantic-text", {
            opacity: .8,
            duration: .4,
            ease: "power2.out"
        }, "-=0.3")
    }
    function t() {
        a.timeline().to("#romantic-text", {
            opacity: 0,
            duration: .3,
            ease: "power2.in"
        }).to("#progress-container", {
            opacity: 0,
            y: 20,
            duration: .4,
            ease: "power2.in"
        }, "-=0.2").to("#controls-container", {
            opacity: 0,
            scale: .8,
            duration: .4,
            ease: "back.in(1.2)"
        }, "-=0.3").to("#player-title", {
            opacity: 0,
            y: 30,
            duration: .4,
            ease: "power2.in"
        }, "-=0.3").to("#music-player-container", {
            opacity: 0,
            y: 50,
            scale: .9,
            duration: .5,
            ease: "power3.in"
        }, "-=0.3")
    }
    const e = document.getElementById("playPauseBtn"),
        n = document.getElementById("prevBtn"),
        r = document.getElementById("nextBtn"),
        l = document.getElementById("progressBar"),
        c = document.getElementById("music-audio"),
        p = document.getElementById("play-icon"),
        q = document.getElementById("pause-icon");
    e && e.addEventListener("click", y),
    n && n.addEventListener("click", f),
    r && r.addEventListener("click", E),
    l && l.addEventListener("input", B);
    if (c instanceof HTMLAudioElement) {
        c.addEventListener("loadedmetadata", () => {
            i = c.duration,
            u(),
            console.log(`Duración real: ${Math.floor(i / 60)}:${Math.floor(i % 60).toString().padStart(2, "0")}`)
        }
        ),
        c.addEventListener("canplaythrough", () => {
            i === 0 && c.duration && (i = c.duration,
            u())
        }
        ),
        c.addEventListener("timeupdate", () => {
            d = c.currentTime,
            v()
        }
        ),
        c.addEventListener("play", () => {
            s = !0,
            p && p.classList.add("hidden"),
            q && q.classList.remove("hidden")
        }
        ),
        c.addEventListener("pause", () => {
            s = !1,
            p && p.classList.remove("hidden"),
            q && q.classList.add("hidden")
        }
        ),
        c.addEventListener("ended", () => {
            s = !1,
            p && p.classList.remove("hidden"),
            q && q.classList.add("hidden")
        }
        )
    }
}
);
function y() {
    const o = document.getElementById("music-audio"),
        t = document.getElementById("play-icon"),
        e = document.getElementById("pause-icon"),
        n = document.getElementById("playPauseBtn");
    if (!(o instanceof HTMLAudioElement)) {
        console.log("No se encontró el elemento de audio");
        return
    }
    if (!o.paused) {
        o.pause();
        return
    }
    o.play().catch(l => console.log("Error al reproducir:", l)),
    t && t.classList.add("hidden"),
    e && e.classList.remove("hidden"),
    n && a.to(n, {
        scale: 1.15,
        duration: .3,
        ease: "back.out(2)"
    }),
    n && a.to(n, {
        scale: 1,
        duration: .3,
        delay: .3,
        ease: "power2.out"
    }),
    g()
}
function g() {
    const o = document.getElementById("heart-particles");
    if (o)
        for (let t = 0; t < 3; t++) {
            const e = document.createElement("div");
            e.style.cssText = "position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; border: 2px solid #626a54; border-radius: 50%; opacity: 0; pointer-events: none;",
            o.appendChild(e),
            a.timeline().to(e, {
                opacity: .6,
                duration: .3,
                delay: t * .15,
                ease: "power2.out"
            }).to(e, {
                width: 120,
                height: 120,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                onComplete: () => e.remove()
            }, "-=0.1")
        }
}
function f() {
    console.log("Canción anterior"),
    a.to("#prevBtn", {
        scale: 1.2,
        duration: .1,
        yoyo: !0,
        repeat: 1
    })
}
function E() {
    console.log("Siguiente canción"),
    a.to("#nextBtn", {
        scale: 1.2,
        duration: .1,
        yoyo: !0,
        repeat: 1
    })
}
function B() {
    const o = document.getElementById("progressBar"),
        t = document.getElementById("music-audio");
    if (o instanceof HTMLInputElement && t instanceof HTMLAudioElement) {
        const n = (Number(o.value) || 0) / 100 * t.duration;
        t.currentTime = n,
        d = n,
        u()
    }
}
function v() {
    const o = document.getElementById("progressBar");
    if (o instanceof HTMLInputElement) {
        const t = i > 0 ? d / i * 100 : 0;
        o.value = t.toString()
    }
    u()
}
function u() {
    const o = document.getElementById("currentTime"),
        t = document.getElementById("totalDuration"),
        e = document.getElementById("music-audio");
    if (e instanceof HTMLAudioElement) {
        if (o) {
            const n = Math.floor(e.currentTime / 60),
                r = Math.floor(e.currentTime % 60);
            o.textContent = `${n}:${r.toString().padStart(2, "0")}`
        }
        if (t && e.duration) {
            const n = Math.floor(e.duration / 60),
                r = Math.floor(e.duration % 60);
            t.textContent = `${n}:${r.toString().padStart(2, "0")}`
        } else if (t && i > 0) {
            const n = Math.floor(i / 60),
                r = Math.floor(i % 60);
            t.textContent = `${n}:${r.toString().padStart(2, "0")}`
        }
    }
}
