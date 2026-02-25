<template>
  <section id="inicio">
    <div id="hero">
      <!-- Video background -->
      <video
        class="hero-video"
        src="/videos/output.webm"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
      ></video>
      <div class="hero-video-overlay"></div>

      <div class="hero-content wrap">
        <div class="hero-eyebrow sr">
          <div class="hero-eyebrow-line"></div>
          <span class="hero-eyebrow-text">Tijuana · Ensenada · Baja California</span>
        </div>

        <h1 class="hero-title sr d1">
          CONSTRUIDO<br/>
          CON <span class="amber-word">PROPÓSITO.</span>
        </h1>

        <div class="hero-foot">
          <p class="hero-sub sr d2">
            Soluciones integrales de construcción end-to-end — desde la planeación estratégica hasta la operación y mantenimiento de sus instalaciones. Calidad, cumplimiento y relaciones de largo plazo.
          </p>
          <div class="hero-actions sr d3">
            <a href="#contacto" class="btn-amber">
              Iniciar proyecto
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="9" x2="15" y2="9"/><polyline points="10 4 15 9 10 14"/></svg>
            </a>
            <a href="#servicios" class="btn-outline">Ver servicios</a>
          </div>
        </div>
      </div>

      <div class="scroll-cue">
        <div class="scroll-cue-line"></div>
        <span>Scroll</span>
      </div>
    </div>

    <!-- Stats -->
    <div id="stats-bar">
      <div class="wrap stats-inner">
        <div class="stat-cell sr d1">
          <div class="stat-num"><span class="ctr" data-t="8">0</span>+ Años</div>
          <div class="stat-lbl">Operando en Baja California</div>
        </div>
        <div class="stat-cell sr d2">
          <div class="stat-num"><span class="ctr" data-t="120">0</span>+</div>
          <div class="stat-lbl">Proyectos entregados</div>
        </div>
        <div class="stat-cell sr d3">
          <div class="stat-num"><span class="ctr" data-t="3">0</span> Fases</div>
          <div class="stat-lbl">Planeación · Obra · Mantenimiento</div>
        </div>
        <div class="stat-cell sr d4">
          <div class="stat-num"><span class="ctr" data-t="98">0</span>%</div>
          <div class="stat-lbl">Índice de satisfacción</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

function runCounter(el) {
  const t = +el.dataset.t
  const dur = 1800
  let cur = 0
  const step = t / (dur / 16)
  const id = setInterval(() => {
    cur = Math.min(cur + step, t)
    el.textContent = Math.floor(cur)
    if (cur >= t) clearInterval(id)
  }, 16)
}

onMounted(() => {
  const co = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { runCounter(e.target); co.unobserve(e.target) }
    })
  }, { threshold: 0.6 })
  document.querySelectorAll('.ctr').forEach(el => co.observe(el))
})
</script>

<style scoped>
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
}

.hero-video-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    165deg,
    rgba(12,12,10,.28) 0%,
    rgba(12,12,10,.18) 25%,
    rgba(12,12,10,.65) 65%,
    rgba(12,12,10,.98) 100%
  );
}
</style>
