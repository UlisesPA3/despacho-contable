import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let activeBody: HTMLElement | null = null;
let media: gsap.MatchMedia | null = null;

function cleanupAnimations() {
  media?.revert();
  media = null;
  activeBody = null;
  document.documentElement.classList.remove('motion-pending');
}

function initAnimations() {
  // El script puede recibir page-load además de la carga inicial del módulo.
  if (activeBody === document.body) return;
  cleanupAnimations();
  const body = document.body;
  activeBody = body;
  media = gsap.matchMedia();

  media.add('(prefers-reduced-motion: no-preference)', () => {
    const hero = body.querySelector<HTMLElement>('#inicio');
    const services = body.querySelector<HTMLElement>('#servicios');
    const clearProps = 'transform,opacity,visibility';

    if (hero) {
      const stages = [
        { selector: '.hero-badge', y: -12, duration: 0.5 },
        { selector: '.hero-title', y: 20, duration: 0.65 },
        { selector: '.hero-subtitle', y: 16, duration: 0.55 },
        { selector: '.hero-cta-group', y: 12, duration: 0.5 },
        { selector: '.hero-metric-item', y: 12, duration: 0.45 },
      ];
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      stages.forEach((stage, index) => {
        const targets = hero.querySelectorAll<HTMLElement>(stage.selector);
        if (!targets.length) return;
        timeline.fromTo(targets, { y: stage.y, autoAlpha: 0 }, {
          y: 0,
          autoAlpha: 1,
          duration: stage.duration,
          stagger: stage.selector === '.hero-metric-item' ? 0.08 : 0,
          clearProps,
        }, index === 0 ? 0 : '-=0.28');
      });

      const dashboard = hero.querySelector<HTMLElement>('.hero-dashboard-card');
      if (dashboard) {
        gsap.fromTo(dashboard, { y: 20, autoAlpha: 0 }, {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: 'power3.out',
          clearProps,
          scrollTrigger: {
            trigger: dashboard,
            start: 'top 90%',
            once: true,
          },
        });
      }
    }

    // Cada tarjeta controla su propia entrada, también en la columna móvil.
    services?.querySelectorAll<HTMLElement>('.gsap-card').forEach((card) => {
      gsap.fromTo(card, { y: 24, autoAlpha: 0 }, {
        y: 0,
        autoAlpha: 1,
        duration: 0.65,
        ease: 'power2.out',
        clearProps,
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          once: true,
        },
      });
    });
    // matchMedia conserva los tweens y triggers para revertirlos al cambiar
    // la preferencia de movimiento o al abandonar el documento.
  });

  document.documentElement.classList.remove('motion-pending');
  void document.fonts.ready.then(() => {
    if (activeBody === body) ScrollTrigger.refresh();
  });
}

initAnimations();
document.addEventListener('astro:page-load', initAnimations);
document.addEventListener('astro:before-swap', cleanupAnimations);
window.addEventListener('pagehide', cleanupAnimations);
window.addEventListener('pageshow', initAnimations);
