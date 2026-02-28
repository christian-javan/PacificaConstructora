<template>
  <div>
    <section>
      <div id="hero" style="min-height:70vh;">
        <div class="hero-bg"
          style="background-image:url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=2200&q=85&auto=format&fit=crop');background-position:center 55%;">
        </div>
        <div class="hero-content wrap">
          <div class="hero-eyebrow sr">
            <div class="hero-eyebrow-line"></div><span class="hero-eyebrow-text">Protección de Inversión</span>
          </div>
          <h1 class="hero-title sr d1">PLAN<br /><span class="amber-word">BLINDAJE.</span></h1>
          <div class="hero-foot">
            <p class="hero-sub sr d2">No dejes que un imprevisto arruine tu fin de semana. Nuestro Plan Blindaje está
              diseñado para brindarte respuesta rápida y garantizada cuando más lo necesitas.</p>
            <div class="hero-actions sr d3">
              <NuxtLink to="/contacto" class="btn-amber">Contratar Blindaje <svg width="16" height="16"
                  viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="3" y1="9" x2="15" y2="9" />
                  <polyline points="10 4 15 9 10 14" />
                </svg></NuxtLink>
              <a href="#que-incluye" class="btn-outline">Qué incluye</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PÓLIZA DE BLINDAJE -->
    <section id="que-incluye" class="py-sec" style="background:var(--cream);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:48px;"
          class="svc-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label" style="color:var(--amber);">Póliza de Blindaje</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--coal);">
              MANTENIMIENTO<br />INTEGRAL.
            </h2>
          </div>
          <p class="sr d2" style="color:#5A5650;font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
            Un producto con un costo de <strong style="font-weight:700;color:var(--coal);">$6,000 pesos anuales</strong>
            en una sola cuota, la cual cubre <strong style="font-weight:700;color:var(--coal);">13 meses</strong> de
            protección continua para tu hogar.
          </p>
        </div>

        <div class="maint-grid sr">
          <div class="maint-card" style="background:var(--coal);">
            <div class="maint-badge">2 Eventos</div>
            <div class="maint-bg-num">01</div>
            <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg></div>
            <div class="maint-card-title">Atención de Emergencias</div>
            <p class="maint-card-desc">Cubre dos eventos como tuberías rotas, baños tapados, inundaciones o fallas en
              válvulas de ángulo, incluso en horarios nocturnos.</p>
            <div class="maint-tags"><span class="maint-tag">Plomería</span><span
                class="maint-tag">Inundaciones</span><span class="maint-tag">Nocturnos</span></div>
          </div>
          <div class="maint-card" style="background:var(--coal);">
            <div class="maint-badge">Semestral</div>
            <div class="maint-bg-num">02</div>
            <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg></div>
            <div class="maint-card-title">Diagnóstico Preventivo</div>
            <p class="maint-card-desc">Se realiza un diagnóstico semestral donde se graban los desperfectos de la
              propiedad y se entrega una cotización para su reparación.</p>
            <div class="maint-tags"><span class="maint-tag">Video</span><span class="maint-tag">Cotización</span><span
                class="maint-tag">Semestral</span></div>
          </div>
          <div class="maint-card" style="background:var(--coal);">
            <div class="maint-badge">3 al año</div>
            <div class="maint-bg-num">03</div>
            <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                <path
                  d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg></div>
            <div class="maint-card-title">Servicios Correctivos</div>
            <p class="maint-card-desc">Incluye tres servicios al año: parcheo de muros de tablaroca, cambio de azulejos,
              pintura de secciones de pared y reparación de vidrios o ventanas estándar (2×3 pies).</p>
            <div class="maint-tags"><span class="maint-tag">Tablaroca</span><span class="maint-tag">Pintura</span><span
                class="maint-tag">Vidrios</span></div>
          </div>
          <div class="maint-card" style="background:var(--coal);">
            <div class="maint-badge">Incluido</div>
            <div class="maint-bg-num">04</div>
            <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg></div>
            <div class="maint-card-title">Plomería y Electricidad</div>
            <p class="maint-card-desc">Instalación de mezcladoras para baño o cocina, cambio de tarjas (fregaderos) y
              servicios básicos de electricidad como cambio de focos o switches.</p>
            <div class="maint-tags"><span class="maint-tag">Mezcladoras</span><span class="maint-tag">Focos</span><span
                class="maint-tag">Switches</span></div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-top:2px;" class="sr d1">
          <div style="background:var(--coal);padding:40px 36px;">
            <div
              style="font-family:'Bebas Neue',sans-serif;font-size:1.35rem;letter-spacing:.05em;color:var(--text-light);margin-bottom:10px;">
              LIMPIEZA INCLUIDA</div>
            <p style="font-size:1rem;font-weight:300;line-height:1.65;color:var(--text-muted);">Incluye la limpieza de
              20 metros cuadrados de piso o alfombra con equipo y productos profesionales.</p>
          </div>
          <div style="background:var(--coal);padding:40px 36px;">
            <div
              style="font-family:'Bebas Neue',sans-serif;font-size:1.35rem;letter-spacing:.05em;color:var(--text-light);margin-bottom:10px;">
              NOTA SOBRE MATERIALES</div>
            <p style="font-size:1rem;font-weight:300;line-height:1.65;color:var(--text-muted);">La póliza cubre
              exclusivamente la mano de obra; los materiales o suministros adicionales tienen un costo aparte que el
              cliente puede pagar o proveer.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- RESPUESTA RÁPIDA -->
    <section class="py-sec" style="background:var(--coal);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;" class="svc-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Tranquilidad Total</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">
              RESPUESTA<br />RÁPIDA EN<br />EMERGENCIAS.
            </h2>
            <p class="sr d2"
              style="color:var(--text-dim);font-size:.97rem;font-weight:300;line-height:1.8;margin-top:22px;">
              Las verdaderas emergencias no tienen horario. Te garantizamos un tiempo de respuesta máximo de <strong
                style="font-weight:600;color:var(--text-light);">4 horas</strong> en situaciones críticas fuera de
              horarios laborales.
            </p>
          </div>
          <div class="sr d2">
            <div style="background:var(--coal-3);padding:44px 40px;position:relative;overflow:hidden;">
              <div style="position:absolute;top:0;left:0;width:3px;height:100%;background:var(--amber);"></div>
              <div
                style="font-family:'Bebas Neue',sans-serif;font-size:1.35rem;letter-spacing:.05em;color:var(--text-light);margin-bottom:20px;">
                HORARIO DE RESPUESTA 4H</div>
              <div style="display:flex;flex-direction:column;gap:16px;">
                <div style="display:flex;gap:10px;align-items:center;">
                  <div style="width:6px;height:6px;border-radius:50%;background:var(--amber);flex-shrink:0;"></div>
                  <div style="font-size:1.05rem;font-weight:400;color:var(--text-light);">Después de las 5:00 p.m. entre
                    semana</div>
                </div>
                <div style="display:flex;gap:10px;align-items:center;">
                  <div style="width:6px;height:6px;border-radius:50%;background:var(--amber);flex-shrink:0;"></div>
                  <div style="font-size:1.05rem;font-weight:400;color:var(--text-light);">Viernes a partir del mediodía
                  </div>
                </div>
                <div style="display:flex;gap:10px;align-items:center;">
                  <div style="width:6px;height:6px;border-radius:50%;background:var(--amber);flex-shrink:0;"></div>
                  <div style="font-size:1.05rem;font-weight:400;color:var(--text-light);">Asistencia 24 horas sábados y
                    domingos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ACTIVACIÓN Y COBERTURA -->
    <section class="py-sec" style="background:var(--cream);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;" class="svc-hdr">
          <div class="sr">
            <div style="background:var(--coal);padding:44px 40px;position:relative;overflow:hidden;">
              <div style="position:absolute;top:0;left:0;width:3px;height:100%;background:var(--amber);"></div>
              <div
                style="font-family:'Bebas Neue',sans-serif;font-size:1.55rem;letter-spacing:.05em;color:var(--amber);margin-bottom:14px;">
                ACTIVACIÓN A TU MEDIDA</div>
              <p style="font-size:1.05rem;font-weight:300;line-height:1.7;color:var(--text-muted);">
                ¿Quieres protección inmediata? Al contratar tu póliza en modalidad de pago anual, <strong
                  style="font-weight:600;color:var(--text-light);">el servicio se activa al instante</strong>.
              </p>
            </div>
          </div>
          <div class="sr d1">
            <div style="background:var(--coal);padding:44px 40px;position:relative;overflow:hidden;">
              <div style="position:absolute;top:0;left:0;width:3px;height:100%;background:var(--amber);"></div>
              <div
                style="font-family:'Bebas Neue',sans-serif;font-size:1.55rem;letter-spacing:.05em;color:var(--amber);margin-bottom:14px;">
                COBERTURA CLARA</div>
              <p style="font-size:1.05rem;font-weight:300;line-height:1.7;color:var(--text-muted);margin-bottom:18px;">
                El plan incluye la atención de hasta <strong style="font-weight:600;color:var(--text-light);">3 eventos
                  de emergencia</strong>.
              </p>
              <div
                style="font-size:.9rem;font-weight:300;line-height:1.6;color:var(--text-muted);padding:14px 16px;border:1px solid var(--border-amber);background:rgba(232,134,42,.05);">
                <strong style="font-weight:600;color:var(--amber);">Nota:</strong> El tiempo de respuesta de 4 horas
                aplica exclusivamente para emergencias fuera del horario hábil. De lunes a viernes, de 7:00 a.m. a 5:00
                p.m., las solicitudes y servicios no urgentes se programan en agenda regular. Los fines de semana son
                exclusivos para emergencias. Servicio no disponible en Ensenada.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROTEJA SU INVERSIÓN -->
    <section class="py-sec" style="background:var(--coal-2);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:64px;"
          class="pq-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Seguridad & Garantía</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">PROTEJA SU<br />INVERSIÓN.</h2>
          </div>
          <p class="sr d2"
            style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">Plan
            Blindaje no es solo mantenimiento — es un compromiso de protección integral respaldado por garantías
            técnicas y jurídicas.</p>
        </div>
        <div class="porque-grid sr d1">
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)"
                stroke-width="1.6" stroke-linecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg></div>
            <div class="p-cell-title">GARANTÍA ESTRUCTURAL</div>
            <p class="p-cell-body">Respaldamos las intervenciones con garantía escrita sobre mano de obra y materiales
              utilizados.</p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)"
                stroke-width="1.6" stroke-linecap="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg></div>
            <div class="p-cell-title">SEGURIDAD JURÍDICA</div>
            <p class="p-cell-body">Contrato anual formal con alcances, exclusiones y responsabilidades claramente
              definidas.</p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)"
                stroke-width="1.6" stroke-linecap="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg></div>
            <div class="p-cell-title">RESPUESTA 4 HORAS</div>
            <p class="p-cell-body">Tiempo de respuesta garantizado en emergencias fuera de horario hábil, incluyendo
              fines de semana.</p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)"
                stroke-width="1.6" stroke-linecap="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg></div>
            <div class="p-cell-title">COSTO PREDECIBLE</div>
            <p class="p-cell-body">Un solo pago anual de $6,000 cubre 13 meses de protección. Sin sorpresas financieras.
            </p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)"
                stroke-width="1.6" stroke-linecap="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg></div>
            <div class="p-cell-title">EQUIPO PROPIO</div>
            <p class="p-cell-body">Personal técnico de planta capacitado para resolver cualquier incidencia sin
              subcontratistas.</p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)"
                stroke-width="1.6" stroke-linecap="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg></div>
            <div class="p-cell-title">ACTIVACIÓN INMEDIATA</div>
            <p class="p-cell-body">Con pago anual, tu póliza se activa al instante. Protección desde el día uno.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contacto-blindaje" class="py-sec" style="background:var(--cream);">
      <div class="wrap px-main" style="text-align:center;max-width:720px;">
        <div class="eyebrow sr" style="justify-content:center;"><span class="t-label"
            style="color:var(--amber);">Protección garantizada</span></div>
        <h2 class="f-display t-section sr d1" style="color:var(--coal);margin-bottom:22px;">BLINDE SU<br />INSTALACIÓN.
        </h2>
        <p class="sr d2" style="color:#5A5650;font-size:.97rem;font-weight:300;line-height:1.8;margin-bottom:40px;">
          Contáctenos para recibir una propuesta personalizada de Plan Blindaje adaptada a sus instalaciones. Contrato
          anual renovable.</p>
        <div class="sr d3" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <NuxtLink to="/contacto" class="btn-amber">Contratar Plan Blindaje <svg width="16" height="16"
              viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="3" y1="9" x2="15" y2="9" />
              <polyline points="10 4 15 9 10 14" />
            </svg></NuxtLink>
          <NuxtLink to="/" class="btn-outline" style="color:var(--coal);border-color:rgba(12,12,10,.22);">Volver al
            inicio</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
definePageMeta({ layout: 'page' })
useHead({
  title: 'Plan Blindaje — Pacifica Construcción y Mantenimiento',
  meta: [{ name: 'description', content: 'Plan de protección integral anual para tu hogar en Baja California. Póliza de $6,000/año con 13 meses de cobertura, emergencias, diagnóstico preventivo y servicios correctivos.' }]
})
onMounted(() => {
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  document.querySelectorAll('.sr, .sr-left, .sr-right').forEach(el => ro.observe(el))
})
</script>
