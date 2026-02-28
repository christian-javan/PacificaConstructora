<template>
  <div>

    <!-- HERO -->
    <section>
      <div id="hero" style="min-height:70vh;">
        <div class="hero-bg"
          style="background-image:url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=2200&q=85&auto=format&fit=crop');background-position:center 50%;">
        </div>
        <div class="hero-content wrap">
          <div class="hero-eyebrow sr">
            <div class="hero-eyebrow-line"></div>
            <span class="hero-eyebrow-text">Desarrollo Inmobiliario</span>
          </div>
          <h1 class="hero-title sr d1">
            INVERSIONES<br />
            <span class="amber-word">INTELIGENTES.</span>
          </h1>
          <div class="hero-foot">
            <p class="hero-sub sr d2">
              Identificamos, desarrollamos y gestionamos activos inmobiliarios con visión estratégica. Oportunidades
              reales de inversión respaldadas por nuestra experiencia constructiva en Baja California.
            </p>
            <div class="hero-actions sr d3">
              <NuxtLink to="/contacto" class="btn-amber">
                Explorar oportunidades
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round">
                  <line x1="3" y1="9" x2="15" y2="9" />
                  <polyline points="10 4 15 9 10 14" />
                </svg>
              </NuxtLink>
              <a href="#servicios-bienes" class="btn-outline">Nuestros servicios</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICIOS -->
    <section id="servicios-bienes" class="py-sec" style="background:var(--coal);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:72px;"
          class="svc-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Gestión de Activos</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">
              BIENES RAÍCES<br />CON FUNDAMENTO<br />CONSTRUCTIVO.
            </h2>
          </div>
          <p class="sr d2"
            style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
            A diferencia de una inmobiliaria tradicional, nosotros conocemos cada aspecto técnico de los inmuebles que
            desarrollamos y comercializamos. Esa ventaja se traduce en valoraciones más precisas y decisiones de
            inversión mejor fundamentadas.
          </p>
        </div>

        <div class="service-block sr">
          <div class="service-block-left">
            <div>
              <div class="service-tag">Desarrollo</div>
              <h3 class="f-display service-title">DESARROLLO<br />INMOBILIARIO</h3>
            </div>
            <div>
              <div class="service-objective">Enfoque</div>
              <p class="service-obj-text">
                Identificamos terrenos con potencial, desarrollamos proyectos viables y los llevamos desde la
                conceptualización hasta la comercialización exitosa.
              </p>
            </div>
            <div class="service-big-num">01</div>
          </div>
          <div class="service-block-right">
            <div class="svc-feature">
              <div class="svc-feature-title">Análisis de mercado</div>
              <div class="svc-feature-desc">Estudio de demanda, competencia y precios para validar la viabilidad
                comercial del proyecto.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Adquisición de terrenos</div>
              <div class="svc-feature-desc">Identificación y due diligence de predios con potencial de desarrollo en
                zonas estratégicas de BC.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Proyectos residenciales</div>
              <div class="svc-feature-desc">Desarrollo de fraccionamientos, condominios y vivienda de interés medio y
                residencial plus.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Proyectos comerciales</div>
              <div class="svc-feature-desc">Plazas comerciales, locales, oficinas y espacios mixtos diseñados para
                maximizar retorno de inversión.</div>
            </div>
          </div>
        </div>

        <div class="service-block sr d1">
          <div class="service-block-left">
            <div>
              <div class="service-tag">Inversión</div>
              <h3 class="f-display service-title">GESTIÓN<br />DE ACTIVOS</h3>
            </div>
            <div>
              <div class="service-objective">Enfoque</div>
              <p class="service-obj-text">
                Administramos y optimizamos portafolios inmobiliarios para que cada propiedad genere el máximo
                rendimiento con el mínimo riesgo.
              </p>
            </div>
            <div class="service-big-num">02</div>
          </div>
          <div class="service-block-right">
            <div class="svc-feature">
              <div class="svc-feature-title">Valuación técnica</div>
              <div class="svc-feature-desc">Avalúos fundamentados en conocimiento constructivo real, no solo
                comparativos de mercado.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Optimización de portafolio</div>
              <div class="svc-feature-desc">Estrategias de compra, venta y retención basadas en análisis financiero y
                ciclos del mercado.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Administración de propiedades</div>
              <div class="svc-feature-desc">Gestión operativa de inmuebles en renta: cobranza, mantenimiento y relación
                con inquilinos.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Modelos de inversión</div>
              <div class="svc-feature-desc">Estructuración de proyectos para inversionistas individuales o grupos de
                inversión.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ASESORES DE VENTA -->
    <section class="py-sec" style="background:var(--cream);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;" class="svc-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label" style="color:var(--amber);">Asesoría Profesional</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--coal);">
              VENTA DE<br />PROPIEDADES.
            </h2>
            <p class="sr d2" style="color:#5A5650;font-size:.97rem;font-weight:300;line-height:1.8;margin-top:22px;">
              Contamos con un área de asesores especializados en la venta de propiedades. Como valor agregado en todos
              nuestros servicios, destacamos el uso de <strong style="font-weight:600;color:var(--coal);">contratos
                formales</strong> y <strong style="font-weight:600;color:var(--coal);">planes de trabajo estructurados
                con fecha</strong>, brindando seguridad y profesionalismo en cada operación.
            </p>
            <div class="sr d3" style="margin-top:32px;">
              <NuxtLink to="/contacto" class="btn-amber" style="font-size:.95rem;">
                Contactar asesor
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round">
                  <line x1="3" y1="9" x2="15" y2="9" />
                  <polyline points="10 4 15 9 10 14" />
                </svg>
              </NuxtLink>
            </div>
          </div>
          <div class="sr d2">
            <div class="porque-grid" style="grid-template-columns:1fr;">
              <div class="p-cell" style="background:var(--coal);">
                <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg></div>
                <div class="p-cell-title">CONTRATOS FORMALES</div>
                <p class="p-cell-body">Todas las operaciones se respaldan con documentación legal que protege tanto al
                  comprador como al vendedor.</p>
              </div>
              <div class="p-cell" style="background:var(--coal);">
                <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg></div>
                <div class="p-cell-title">PLANES ESTRUCTURADOS</div>
                <p class="p-cell-body">Cada proyecto cuenta con un plan de trabajo con fechas definidas para dar
                  certidumbre al proceso de compra-venta.</p>
              </div>
              <div class="p-cell" style="background:var(--coal);">
                <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg></div>
                <div class="p-cell-title">ASESORES ESPECIALIZADOS</div>
                <p class="p-cell-body">Un equipo dedicado que conoce el mercado inmobiliario local y te acompaña en cada
                  paso.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BENEFICIOS -->
    <section class="py-sec" style="background:var(--coal-2);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:64px;"
          class="pq-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Nuestra ventaja</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">
              INVERTIR CON<br />QUIEN CONSTRUYE.
            </h2>
          </div>
          <p class="sr d2"
            style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
            Cuando su socio inmobiliario es también su constructor, las decisiones se toman con información completa y
            los márgenes se protegen desde la cimentación.
          </p>
        </div>

        <div class="porque-grid sr d1">
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)"
                stroke-width="1.6" stroke-linecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg></div>
            <div class="p-cell-title">CONOCIMIENTO TÉCNICO</div>
            <p class="p-cell-body">Evaluamos inmuebles con ojo de constructor: sabemos identificar vicios ocultos,
              potencial de mejora y costos reales de intervención.</p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)"
                stroke-width="1.6" stroke-linecap="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg></div>
            <div class="p-cell-title">VALUACIONES PRECISAS</div>
            <p class="p-cell-body">Nuestros avalúos integran análisis de mercado con estimación de costos constructivos
              para cifras más confiables.</p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)"
                stroke-width="1.6" stroke-linecap="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg></div>
            <div class="p-cell-title">MERCADO LOCAL</div>
            <p class="p-cell-body">Presencia activa en Tijuana y Ensenada con conocimiento profundo de zonas,
              regulaciones y tendencias del mercado.</p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)"
                stroke-width="1.6" stroke-linecap="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg></div>
            <div class="p-cell-title">ACOMPAÑAMIENTO END-TO-END</div>
            <p class="p-cell-body">Desde la identificación del terreno hasta la escrituración y entrega, usted cuenta
              con un solo equipo responsable.</p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)"
                stroke-width="1.6" stroke-linecap="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg></div>
            <div class="p-cell-title">RENTABILIDAD PROBADA</div>
            <p class="p-cell-body">Historial de proyectos inmobiliarios exitosos con rendimientos superiores al promedio
              del mercado local.</p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)"
                stroke-width="1.6" stroke-linecap="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg></div>
            <div class="p-cell-title">TRANSPARENCIA FINANCIERA</div>
            <p class="p-cell-body">Reportes claros de inversión, flujos de efectivo y rendimientos. Sin sorpresas, sin
              letras chicas.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contacto-bienes" class="py-sec" style="background:var(--cream);">
      <div class="wrap px-main" style="text-align:center;max-width:720px;">
        <div class="eyebrow sr" style="justify-content:center;"><span class="t-label">Oportunidades</span></div>
        <h2 class="f-display t-section sr d1" style="color:var(--coal);margin-bottom:22px;">
          ¿LISTO PARA<br />INVERTIR?
        </h2>
        <p class="sr d2" style="color:#5A5650;font-size:.97rem;font-weight:300;line-height:1.8;margin-bottom:40px;">
          Conozca nuestras oportunidades de inversión inmobiliaria en Baja California. Le presentamos opciones alineadas
          a su perfil y objetivos financieros.
        </p>
        <div class="sr d3" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <NuxtLink to="/contacto" class="btn-amber">
            Explorar inversiones
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round">
              <line x1="3" y1="9" x2="15" y2="9" />
              <polyline points="10 4 15 9 10 14" />
            </svg>
          </NuxtLink>
          <NuxtLink to="/" class="btn-outline" style="color:var(--coal);border-color:rgba(12,12,10,.22);">Volver al
            inicio</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'

definePageMeta({
  layout: 'page'
})

useHead({
  title: 'Bienes Raíces — Pacifica Construcción y Mantenimiento',
  meta: [
    { name: 'description', content: 'Desarrollo inmobiliario y gestión de activos en Baja California. Oportunidades de inversión respaldadas por experiencia constructiva real en Tijuana y Ensenada.' }
  ]
})

onMounted(() => {
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  document.querySelectorAll('.sr, .sr-left, .sr-right').forEach(el => ro.observe(el))
})
</script>
