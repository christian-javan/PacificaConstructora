<template>
  <div>
    <section>
      <div id="hero" style="min-height:70vh;">
        <div class="hero-bg" style="background-image:url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=2200&q=85&auto=format&fit=crop');background-position:center 55%;"></div>
        <div class="hero-content wrap">
          <div class="hero-eyebrow sr"><div class="hero-eyebrow-line"></div><span class="hero-eyebrow-text">Protección de Inversión</span></div>
          <h1 class="hero-title sr d1">PLAN<br/><span class="amber-word">BLINDAJE.</span></h1>
          <div class="hero-foot">
            <p class="hero-sub sr d2">Su instalación merece más que reaccionar a problemas — merece que nunca ocurran. Plan Blindaje es nuestro programa de protección integral anual.</p>
            <div class="hero-actions sr d3">
              <NuxtLink to="/contacto" class="btn-amber">Contratar Blindaje <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="9" x2="15" y2="9"/><polyline points="10 4 15 9 10 14"/></svg></NuxtLink>
              <a href="#que-incluye" class="btn-outline">Qué incluye</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="que-incluye" class="py-sec" style="background:var(--coal);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:72px;" class="svc-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Cobertura completa</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">PROTECCIÓN<br/>TODO EL AÑO.</h2>
          </div>
          <p class="sr d2" style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">Plan Blindaje cubre diagnóstico preventivo, correctivos programados, atención de urgencias y limpieza especializada bajo un solo contrato anual.</p>
        </div>
        <div class="maint-grid sr">
          <div class="maint-card">
            <div class="maint-badge">Semestral</div><div class="maint-bg-num">01</div>
            <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <div class="maint-card-title">Diagnóstico Preventivo</div>
            <p class="maint-card-desc">Evaluación exhaustiva de estructuras e instalaciones críticas cada 6 meses con informe técnico detallado.</p>
            <div class="maint-tags"><span class="maint-tag">Revisión estructural</span><span class="maint-tag">Informe técnico</span></div>
          </div>
          <div class="maint-card">
            <div class="maint-badge">3 veces al año</div><div class="maint-bg-num">02</div>
            <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div>
            <div class="maint-card-title">Correctivos Programados</div>
            <p class="maint-card-desc">Intervenciones anuales para reparaciones programadas: pintura, carpintería, acabados y desgaste natural.</p>
            <div class="maint-tags"><span class="maint-tag">Pintura</span><span class="maint-tag">Carpintería</span><span class="maint-tag">Acabados</span></div>
          </div>
          <div class="maint-card">
            <div class="maint-badge">Respuesta 24h</div><div class="maint-bg-num">03</div>
            <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
            <div class="maint-card-title">Atención de Urgencias</div>
            <p class="maint-card-desc">Respuesta prioritaria para incidentes críticos: plomería, electricidad, cerrajería y emergencias.</p>
            <div class="maint-tags"><span class="maint-tag">Plomería</span><span class="maint-tag">Electricidad</span><span class="maint-tag">Cerrajería</span></div>
          </div>
          <div class="maint-card">
            <div class="maint-badge">Anual</div><div class="maint-bg-num">04</div>
            <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
            <div class="maint-card-title">Limpieza Especializada</div>
            <p class="maint-card-desc">Limpieza profesional de pisos y áreas comunes con productos y equipo industrial certificados.</p>
            <div class="maint-tags"><span class="maint-tag">Pisos</span><span class="maint-tag">Alfombras</span><span class="maint-tag">Industrial</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-sec" style="background:var(--coal-2);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:64px;" class="pq-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Seguridad & Garantía</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">PROTEJA SU<br/>INVERSIÓN.</h2>
          </div>
          <p class="sr d2" style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">Plan Blindaje no es solo mantenimiento — es un compromiso de protección integral respaldado por garantías técnicas y jurídicas.</p>
        </div>
        <div class="porque-grid sr d1">
          <div class="p-cell"><div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="p-cell-title">GARANTÍA ESTRUCTURAL</div><p class="p-cell-body">Respaldamos las intervenciones con garantía escrita sobre mano de obra y materiales utilizados.</p></div>
          <div class="p-cell"><div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div class="p-cell-title">SEGURIDAD JURÍDICA</div><p class="p-cell-body">Contrato anual formal con alcances, exclusiones y responsabilidades claramente definidas.</p></div>
          <div class="p-cell"><div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div class="p-cell-title">DISPONIBILIDAD 24/7</div><p class="p-cell-body">Línea de emergencias activa las 24 horas para incidentes críticos que no pueden esperar.</p></div>
          <div class="p-cell"><div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><div class="p-cell-title">COSTO PREDECIBLE</div><p class="p-cell-body">Un solo pago anual cubre todas las intervenciones incluidas. Sin sorpresas financieras.</p></div>
          <div class="p-cell"><div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><div class="p-cell-title">EQUIPO PROPIO</div><p class="p-cell-body">Personal técnico de planta capacitado para resolver cualquier incidencia sin subcontratistas.</p></div>
          <div class="p-cell"><div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div class="p-cell-title">REPORTES PERIÓDICOS</div><p class="p-cell-body">Informes semestrales con estado de instalaciones, trabajos realizados y recomendaciones.</p></div>
        </div>
      </div>
    </section>

    <section id="contacto-blindaje" class="py-sec" style="background:var(--cream);">
      <div class="wrap px-main" style="text-align:center;max-width:720px;">
        <div class="eyebrow sr" style="justify-content:center;"><span class="t-label">Protección garantizada</span></div>
        <h2 class="f-display t-section sr d1" style="color:var(--coal);margin-bottom:22px;">BLINDE SU<br/>INSTALACIÓN.</h2>
        <p class="sr d2" style="color:#5A5650;font-size:.97rem;font-weight:300;line-height:1.8;margin-bottom:40px;">Contáctenos para recibir una propuesta personalizada de Plan Blindaje adaptada a sus instalaciones. Contrato anual renovable.</p>
        <div class="sr d3" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <NuxtLink to="/contacto" class="btn-amber">Contratar Plan Blindaje <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="9" x2="15" y2="9"/><polyline points="10 4 15 9 10 14"/></svg></NuxtLink>
          <NuxtLink to="/" class="btn-outline" style="color:var(--coal);border-color:rgba(12,12,10,.22);">Volver al inicio</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
definePageMeta({ layout: 'page' })
useHead({
  title: 'Plan Blindaje — Pacifica Constructora',
  meta: [{ name: 'description', content: 'Plan de protección integral anual para instalaciones en Baja California. Diagnóstico preventivo, correctivos, urgencias y limpieza especializada.' }]
})
onMounted(() => {
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  document.querySelectorAll('.sr, .sr-left, .sr-right').forEach(el => ro.observe(el))
})
</script>
