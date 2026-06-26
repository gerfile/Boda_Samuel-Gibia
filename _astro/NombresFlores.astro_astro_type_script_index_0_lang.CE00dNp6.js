import {g as o} from "./index.DKtf60Sy.js";
const initNombresFlores = () => {
    console.log("🎊 Iniciando animaciones de boda - TODAS AL MISMO TIEMPO..."),
    o.fromTo("#flores-sup-izq", {
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0,
        duration: .8,
        ease: "power2.out",
        delay: 0
    }),
    o.fromTo("#flores-sup-der", {
        opacity: 0,
        x: 100
    }, {
        opacity: 1,
        x: 0,
        duration: .8,
        ease: "power2.out",
        delay: 0
    }),
    o.fromTo("#titulo", {
        opacity: 0,
        y: -40
    }, {
        opacity: 1,
        y: 0,
        duration: .8,
        ease: "power2.out",
        delay: .1
    }),
    o.fromTo("#anillos", {
        opacity: 0,
        scale: .5
    }, {
        opacity: 1,
        scale: 1,
        duration: .8,
        ease: "back.out(1.4)",
        delay: .2
    }),
    o.to("#anillos", {
        rotation: 5,
        duration: 3,
        ease: "sine.inOut",
        yoyo: !0,
        repeat: -1,
        delay: 1
    });
    function a(e, i, s=0) {
        const t = document.getElementById(e);
        t && (t.innerHTML = i.split("").map( (r, n) => `<span class="letra-cascada" style="
                            --i: ${n};
                            opacity: 0; 
                            display: inline-block; 
                            transform: translateY(20px) scale(0.8);
                            filter: blur(2px);
                        ">${r === " " ? "&nbsp;" : r}</span>`).join(""),
        o.to(`#${e} .letra-cascada`, {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: .6,
            ease: "power2.out",
            stagger: {
                each: .04,
                from: "start"
            },
            delay: s
        }))
    }
    a("nombre-novio", "Samuel", .3),
    o.fromTo("#ampersand", {
        opacity: 0,
        scale: .7
    }, {
        opacity: 1,
        scale: 1,
        duration: .6,
        ease: "back.out(1.5)",
        delay: .5
    }),
    a("nombre-novia", "Gibia", .6),
    o.fromTo("#flores-doradas-izq", {
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0,
        duration: .8,
        ease: "power2.out",
        delay: .4
    }),
    o.fromTo("#flores-doradas-der", {
        opacity: 0,
        x: 100
    }, {
        opacity: 1,
        x: 0,
        duration: .8,
        ease: "power2.out",
        delay: .4
    }),
    o.fromTo("#flores-izq", {
        opacity: 0,
        x: -100,
        scale: .9
    }, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: .8,
        ease: "power2.out",
        delay: .7
    }),
    o.fromTo("#flores-der", {
        opacity: 0,
        x: 100,
        scale: .9
    }, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: .8,
        ease: "power2.out",
        delay: .7
    }),
    o.fromTo("#separador-inferior", {
        opacity: 0,
        scale: .5
    }, {
        opacity: 1,
        scale: 1,
        duration: .8,
        ease: "back.out(1.4)",
        delay: .8
    }),
    o.to("#flores-izq", {
        opacity: .8,
        scale: 1.05,
        duration: 2,
        ease: "sine.inOut",
        yoyo: !0,
        repeat: -1,
        delay: 2
    }),
    o.to("#flores-der", {
        opacity: .8,
        scale: 1.05,
        duration: 2,
        ease: "sine.inOut",
        yoyo: !0,
        repeat: -1,
        delay: 2
    }),
    console.log("✨ Animaciones de boda completadas en ~1.5 segundos!")
};
if (document.readyState !== "loading") {
    initNombresFlores();
} else {
    document.addEventListener("DOMContentLoaded", initNombresFlores);
}

