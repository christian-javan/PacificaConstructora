<template>
  <div>
    <section>
      <div id="hero" style="min-height:70vh;">
        <div class="hero-bg"
          style="background-image:url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=2200&q=85&auto=format&fit=crop');background-position:center 40%;">
        </div>
        <div class="hero-content wrap">
          <div class="hero-eyebrow sr">
            <div class="hero-eyebrow-line"></div><span class="hero-eyebrow-text">Financiamiento de Construcción</span>
          </div>
          <h1 class="hero-title sr d1">ASESORÍA<br /><span class="amber-word">FINANCIERA.</span></h1>
          <div class="hero-foot">
            <p class="hero-sub sr d2">Pacífica Constructora colabora con prestamistas privados y bancos para ayudarle a
              obtener financiamiento para sus proyectos de construcción. Estructuramos el financiamiento que su proyecto
              necesita y conectamos su visión con las instituciones financieras adecuadas.</p>
            <div class="hero-actions sr d3">
              <NuxtLink to="/contacto" class="btn-amber">Solicitar asesoría <svg width="16" height="16"
                  viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="3" y1="9" x2="15" y2="9" />
                  <polyline points="10 4 15 9 10 14" />
                </svg></NuxtLink>
              <a href="#servicios-asesoria" class="btn-outline">Nuestros servicios</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="servicios-asesoria" class="py-sec" style="background:var(--coal);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:72px;"
          class="svc-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Estructuración Financiera</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">SU PROYECTO<br />NECESITA
              MÁS<br />QUE UN CRÉDITO.</h2>
          </div>
          <p class="sr d2"
            style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">Un proyecto
            viable técnicamente puede fracasar si no se estructura financieramente bien. Asesoramos desde el análisis de
            viabilidad hasta la obtención del crédito constructor.</p>
        </div>

        <div class="service-block sr">
          <div class="service-block-left">
            <div>
              <div class="service-tag">Análisis</div>
              <h3 class="f-display service-title">VIABILIDAD<br />FINANCIERA</h3>
            </div>
            <div>
              <div class="service-objective">Enfoque</div>
              <p class="service-obj-text">Evaluamos la rentabilidad de su proyecto antes de comprometer capital, con
                modelos financieros que contemplan escenarios reales de mercado.</p>
            </div>
            <div class="service-big-num">01</div>
          </div>
          <div class="service-block-right">
            <div class="svc-feature">
              <div class="svc-feature-title">Análisis de factibilidad</div>
              <div class="svc-feature-desc">Evaluación técnica y financiera del proyecto para validar viabilidad antes
                de invertir.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Proyecciones de flujo</div>
              <div class="svc-feature-desc">Modelos de flujo de efectivo con escenarios optimista, base y conservador.
              </div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Análisis de rentabilidad</div>
              <div class="svc-feature-desc">TIR, VPN y periodo de recuperación para tomar decisiones de inversión
                informadas.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Evaluación de riesgos</div>
              <div class="svc-feature-desc">Identificación y cuantificación de riesgos financieros con estrategias de
                mitigación.</div>
            </div>
          </div>
        </div>

        <div class="service-block sr d1">
          <div class="service-block-left">
            <div>
              <div class="service-tag">Gestión</div>
              <h3 class="f-display service-title">CRÉDITO<br />CONSTRUCTOR</h3>
            </div>
            <div>
              <div class="service-objective">Enfoque</div>
              <p class="service-obj-text">Armamos el expediente técnico-financiero que las instituciones solicitan y
                gestionamos la aprobación del crédito de principio a fin.</p>
            </div>
            <div class="service-big-num">02</div>
          </div>
          <div class="service-block-right">
            <div class="svc-feature">
              <div class="svc-feature-title">Integración de expediente</div>
              <div class="svc-feature-desc">Preparación del paquete documental completo: proyecto ejecutivo,
                presupuesto, cronograma y estudios.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Vinculación bancaria</div>
              <div class="svc-feature-desc">Conexión directa con instituciones financieras especializadas en crédito
                constructor en BC.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Negociación de condiciones</div>
              <div class="svc-feature-desc">Búsqueda de las mejores tasas, plazos y condiciones de desembolso para su
                proyecto.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Seguimiento de ministraciones</div>
              <div class="svc-feature-desc">Gestión de liberación de recursos conforme avance de obra certificado por
                valuadores.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-sec" style="background:var(--coal-2);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:64px;"
          class="pq-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Proceso de financiamiento</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">DE LA IDEA<br />AL CAPITAL.</h2>
          </div>
          <p class="sr d2"
            style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">Nuestro
            proceso está diseñado para maximizar la probabilidad de aprobación y obtener las mejores condiciones de
            financiamiento.</p>
        </div>
        <div class="maint-grid sr">
          <div class="maint-card">
            <div class="maint-badge">Fase 01</div>
            <div class="maint-bg-num">01</div>
            <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg></div>
            <div class="maint-card-title">Diagnóstico Financiero</div>
            <p class="maint-card-desc">Evaluamos el perfil del proyecto y del desarrollador para definir qué tipo de
              financiamiento es el adecuado.</p>
            <div class="maint-tags"><span class="maint-tag">Perfil</span><span class="maint-tag">Viabilidad</span></div>
          </div>
          <div class="maint-card">
            <div class="maint-badge">Fase 02</div>
            <div class="maint-bg-num">02</div>
            <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg></div>
            <div class="maint-card-title">Integración de Expediente</div>
            <p class="maint-card-desc">Preparamos y organizamos toda la documentación requerida por las instituciones
              financieras.</p>
            <div class="maint-tags"><span class="maint-tag">Documentos</span><span class="maint-tag">Proyecto
                ejecutivo</span></div>
          </div>
          <div class="maint-card">
            <div class="maint-badge">Fase 03</div>
            <div class="maint-bg-num">03</div>
            <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg></div>
            <div class="maint-card-title">Gestión & Aprobación</div>
            <p class="maint-card-desc">Presentamos el proyecto ante instituciones financieras y negociamos las mejores
              condiciones de crédito.</p>
            <div class="maint-tags"><span class="maint-tag">Bancos</span><span class="maint-tag">Negociación</span>
            </div>
          </div>
          <div class="maint-card">
            <div class="maint-badge">Continuo</div>
            <div class="maint-bg-num">04</div>
            <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg></div>
            <div class="maint-card-title">Administración del Crédito</div>
            <p class="maint-card-desc">Seguimiento de ministraciones, reportes a instituciones y gestión financiera
              durante toda la obra.</p>
            <div class="maint-tags"><span class="maint-tag">Ministraciones</span><span class="maint-tag">Reportes</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contacto-asesoria" class="py-sec" style="background:var(--cream);">
      <div class="wrap px-main" style="text-align:center;max-width:720px;">
        <div class="eyebrow sr" style="justify-content:center;"><span class="t-label">Financie su proyecto</span></div>
        <h2 class="f-display t-section sr d1" style="color:var(--coal);margin-bottom:22px;">HAGAMOS VIABLE<br />SU
          PROYECTO.</h2>
        <p class="sr d2" style="color:#5A5650;font-size:.97rem;font-weight:300;line-height:1.8;margin-bottom:40px;">
          Platíquenos sobre su proyecto y le orientamos sobre las mejores opciones de financiamiento disponibles para
          hacerlo realidad.</p>
        <div class="sr d3" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <NuxtLink to="/contacto" class="btn-amber">Solicitar asesoría <svg width="16" height="16" viewBox="0 0 18 18"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
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
  title: 'Asesoría en Financiamiento — Pacifica Construcción y Mantenimiento',
  meta: [{ name: 'description', content: 'Asesoría en financiamiento de construcción en Baja California. Créditos constructor, estructuración financiera y vinculación con instituciones. Tijuana y Ensenada.' }]
})
onMounted(() => {
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  document.querySelectorAll('.sr, .sr-left, .sr-right').forEach(el => ro.observe(el))
})
</script>
