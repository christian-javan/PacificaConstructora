<template>
  <div>

    <!-- HERO -->
    <section>
      <div id="hero" style="min-height:70vh;">
        <div class="hero-bg"
          style="background-image:url('https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357');background-position:center; background-size: cover;">
        </div>
        <div class="hero-content wrap">
          <div class="hero-eyebrow sr">
            <div class="hero-eyebrow-line"></div>
            <span class="hero-eyebrow-text">Comercialización Inmobiliaria</span>
          </div>
          <h1 class="hero-title sr d1">
            VENTA DE<br />
            <span class="amber-word">PROPIEDADES.</span>
          </h1>
          <div class="hero-foot">
            <p class="hero-sub sr d2">
              Comercializamos propiedades con estrategia, marketing profesional y acompañamiento legal completo.
              Maximizamos el valor de su inmueble y aceleramos el cierre de cada operación.
            </p>
            <div class="hero-actions sr d3">
              <NuxtLink to="/contacto" class="btn-amber">
                Vender mi propiedad
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round">
                  <line x1="3" y1="9" x2="15" y2="9" />
                  <polyline points="10 4 15 9 10 14" />
                </svg>
              </NuxtLink>
              <a href="#proceso-venta" class="btn-outline">Cómo funciona</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICIOS -->
    <section class="py-sec" style="background:var(--coal);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:72px;"
          class="svc-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Marketing Inmobiliario</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">
              ESTRATEGIA<br />DE VENTA<br />PROFESIONAL.
            </h2>
          </div>
          <p class="sr d2"
            style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
            Vender una propiedad no es simplemente publicar un aviso. Es un proceso estratégico que requiere valuación
            precisa, presentación profesional y negociación experta. Nosotros dominamos cada fase.
          </p>
        </div>

        <div class="service-block sr">
          <div class="service-block-left">
            <div>
              <div class="service-tag">Preparación</div>
              <h3 class="f-display service-title">COMERCIALIZACIÓN<br />ESTRATÉGICA</h3>
            </div>
            <div>
              <div class="service-objective">Enfoque</div>
              <p class="service-obj-text">
                Preparamos su propiedad para el mercado con materiales profesionales que generan interés genuino y
                atraen compradores calificados.
              </p>
            </div>
            <div class="service-big-num">01</div>
          </div>
          <div class="service-block-right">
            <div class="svc-feature">
              <div class="svc-feature-title">Avalúo profesional</div>
              <div class="svc-feature-desc">Valuación basada en comparativos de mercado y análisis constructivo para un
                precio justo y competitivo.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Fotografía y video profesional</div>
              <div class="svc-feature-desc">Material audiovisual de alta calidad que resalta los atributos únicos de
                cada propiedad.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Home staging virtual</div>
              <div class="svc-feature-desc">Presentación digital del potencial del espacio para que los compradores
                visualicen las posibilidades.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Difusión multicanal</div>
              <div class="svc-feature-desc">Publicación en portales inmobiliarios, redes sociales y nuestra base de
                datos de compradores calificados.</div>
            </div>
          </div>
        </div>

        <div class="service-block sr d1">
          <div class="service-block-left">
            <div>
              <div class="service-tag">Cierre</div>
              <h3 class="f-display service-title">ACOMPAÑAMIENTO<br />INTEGRAL</h3>
            </div>
            <div>
              <div class="service-objective">Enfoque</div>
              <p class="service-obj-text">
                Desde la primera visita hasta la firma de escrituras, gestionamos cada paso para que la operación sea
                fluida, transparente y segura.
              </p>
            </div>
            <div class="service-big-num">02</div>
          </div>
          <div class="service-block-right">
            <div class="svc-feature">
              <div class="svc-feature-title">Negociación profesional</div>
              <div class="svc-feature-desc">Representamos sus intereses con experiencia comercial para obtener las
                mejores condiciones.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Due diligence legal</div>
              <div class="svc-feature-desc">Verificación de documentación, gravámenes, uso de suelo y situación fiscal
                del inmueble.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Coordinación notarial</div>
              <div class="svc-feature-desc">Gestión completa ante notaría para escrituración, cancelación de hipotecas y
                trámites fiscales.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Asesoría fiscal</div>
              <div class="svc-feature-desc">Orientación sobre ISR por enajenación, deducciones aplicables y optimización
                fiscal de la operación.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESO -->
    <section id="proceso-venta" class="py-sec" style="background:var(--coal-2);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:64px;"
          class="pq-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Cómo trabajamos</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">
              DE LA PUBLICACIÓN<br />A LA ESCRITURA.
            </h2>
          </div>
          <p class="sr d2"
            style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
            Nuestro proceso está diseñado para minimizar el tiempo de venta y maximizar el valor obtenido por su
            propiedad.
          </p>
        </div>

        <div class="maint-grid sr">
          <div class="maint-card">
            <div class="maint-badge">Paso 01</div>
            <div class="maint-bg-num">01</div>
            <div class="maint-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div class="maint-card-title">Evaluación Inicial</div>
            <p class="maint-card-desc">Visitamos su propiedad, realizamos el avalúo técnico y definimos la estrategia de
              comercialización adecuada.</p>
            <div class="maint-tags">
              <span class="maint-tag">Avalúo</span>
              <span class="maint-tag">Estrategia</span>
            </div>
          </div>

          <div class="maint-card">
            <div class="maint-badge">Paso 02</div>
            <div class="maint-bg-num">02</div>
            <div class="maint-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <div class="maint-card-title">Marketing & Difusión</div>
            <p class="maint-card-desc">Producción de material profesional y publicación en canales estratégicos para
              atraer compradores calificados.</p>
            <div class="maint-tags">
              <span class="maint-tag">Foto/Video</span>
              <span class="maint-tag">Portales</span>
              <span class="maint-tag">Redes</span>
            </div>
          </div>

          <div class="maint-card">
            <div class="maint-badge">Paso 03</div>
            <div class="maint-bg-num">03</div>
            <div class="maint-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div class="maint-card-title">Negociación & Cierre</div>
            <p class="maint-card-desc">Gestionamos ofertas, negociamos condiciones y coordinamos todo el proceso legal
              hasta la firma de escrituras.</p>
            <div class="maint-tags">
              <span class="maint-tag">Ofertas</span>
              <span class="maint-tag">Notaría</span>
              <span class="maint-tag">Escrituración</span>
            </div>
          </div>

          <div class="maint-card">
            <div class="maint-badge">Post-Venta</div>
            <div class="maint-bg-num">04</div>
            <div class="maint-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div class="maint-card-title">Seguimiento Final</div>
            <p class="maint-card-desc">Acompañamiento post-escrituración para trámites pendientes, entrega de llaves y
              resolución de observaciones.</p>
            <div class="maint-tags">
              <span class="maint-tag">Entrega</span>
              <span class="maint-tag">Trámites</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contacto-venta" class="py-sec" style="background:var(--cream);">
      <div class="wrap px-main" style="text-align:center;max-width:720px;">
        <div class="eyebrow sr" style="justify-content:center;"><span class="t-label">Venda con nosotros</span></div>
        <h2 class="f-display t-section sr d1" style="color:var(--coal);margin-bottom:22px;">
          MAXIMICE EL VALOR<br />DE SU PROPIEDAD.
        </h2>
        <p class="sr d2" style="color:#5A5650;font-size:.97rem;font-weight:300;line-height:1.8;margin-bottom:40px;">
          Solicite una valuación gratuita de su inmueble y conozca nuestra estrategia de comercialización personalizada.
          Sin compromisos.
        </p>
        <div class="sr d3" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <NuxtLink to="/contacto" class="btn-amber">
            Solicitar valuación
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
  title: 'Venta de Propiedades — Pacifica Construcción y Mantenimiento',
  meta: [
    { name: 'description', content: 'Comercialización profesional de propiedades en Baja California. Marketing inmobiliario, negociación experta y acompañamiento legal hasta escrituración. Tijuana.' }
  ]
})

onMounted(() => {
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  document.querySelectorAll('.sr, .sr-left, .sr-right').forEach(el => ro.observe(el))
})
</script>
