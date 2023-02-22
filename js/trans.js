import { gsap } from "gsap";

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".copy1", { y: "0%", duration: 0.7, stagger: 0.3 });
tl.to(".anim1", { y: "-100%", duration: 1.5, delay: 2 });
tl.to(".trans1", { y: "-100%", duration: 1 }, "-=1");
