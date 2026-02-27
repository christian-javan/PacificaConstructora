<template>
  <div>

    <!-- HERO -->
    <section>
      <div id="hero" style="min-height:70vh;">
        <div class="hero-bg" style="background-image:url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2200&q=85&auto=format&fit=crop');background-position:center 45%;"></div>
        <div class="hero-content wrap">
          <div class="hero-eyebrow sr">
            <div class="hero-eyebrow-line"></div>
            <span class="hero-eyebrow-text">Acabados Premium</span>
          </div>
          <h1 class="hero-title sr d1">
            EL DETALLE<br/>
            <span class="amber-word">IMPORTA.</span>
          </h1>
          <div class="hero-foot">
            <p class="hero-sub sr d2">
              Los acabados definen la personalidad de un espacio. Trabajamos con materiales de primera línea y mano de obra especializada para que cada superficie comunique calidad y durabilidad.
            </p>
            <div class="hero-actions sr d3">
              <NuxtLink to="/contacto" class="btn-amber">
                Cotizar acabados
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="9" x2="15" y2="9"/><polyline points="10 4 15 9 10 14"/></svg>
              </NuxtLink>
              <a href="#tipos-acabados" class="btn-outline">Ver materiales</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TIPOS DE ACABADOS -->
    <section id="tipos-acabados" class="py-sec" style="background:var(--coal);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:72px;" class="svc-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Materiales & Personalización</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">
              ACABADOS QUE<br/>HABLAN POR SÍ<br/>MISMOS.
            </h2>
          </div>
          <p class="sr d2" style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
            Desde pisos hasta plafones, cada acabado se selecciona y ejecuta con el mismo rigor técnico que aplicamos a la obra estructural. La diferencia está en los detalles que otros ignoran.
          </p>
        </div>

        <div class="service-block sr">
          <div class="service-block-left">
            <div>
              <div class="service-tag">Interiores</div>
              <h3 class="f-display service-title">ACABADOS<br/>INTERIORES</h3>
            </div>
            <div>
              <div class="service-objective">Enfoque</div>
              <p class="service-obj-text">
                Superficies, texturas y materiales que transforman espacios ordinarios en ambientes que inspiran productividad, confort y distinción.
              </p>
            </div>
            <div class="service-big-num">01</div>
          </div>
          <div class="service-block-right">
            <div class="svc-feature">
              <div class="svc-feature-title">Pisos de línea premium</div>
              <div class="svc-feature-desc">Porcelanato, madera de ingeniería, mármol y pisos vinílicos de alto tráfico.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Muros y recubrimientos</div>
              <div class="svc-feature-desc">Pasta texturizada, paneles decorativos, stone veneer y aplicaciones de diseño contemporáneo.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Carpintería fina</div>
              <div class="svc-feature-desc">Puertas, closets, vestidores y muebles empotrados fabricados a la medida con materiales selectos.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Iluminación arquitectónica</div>
              <div class="svc-feature-desc">Diseño lumínico integrado con tiras LED, empotrados y luminarias decorativas de alta eficiencia.</div>
            </div>
          </div>
        </div>

        <div class="service-block sr d1">
          <div class="service-block-left">
            <div>
              <div class="service-tag">Exteriores</div>
              <h3 class="f-display service-title">ACABADOS<br/>EXTERIORES</h3>
            </div>
            <div>
              <div class="service-objective">Enfoque</div>
              <p class="service-obj-text">
                Fachadas, áreas comunes y paisajismo que comunican la calidad de la construcción desde el primer vistazo y resisten el clima de BC.
              </p>
            </div>
            <div class="service-big-num">02</div>
          </div>
          <div class="service-block-right">
            <div class="svc-feature">
              <div class="svc-feature-title">Fachadas ventiladas</div>
              <div class="svc-feature-desc">Sistemas de recubrimiento exterior con aislamiento térmico y estética contemporánea.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Cancelería y vidrio</div>
              <div class="svc-feature-desc">Ventanería de aluminio, muros cortina y cristales de seguridad con acabado limpio.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Paisajismo y hardscape</div>
              <div class="svc-feature-desc">Diseño de áreas exteriores con adoquín, piedra natural, terrazas y jardines funcionales.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Pintura especializada</div>
              <div class="svc-feature-desc">Sistemas de pintura industrial y decorativa con garantía de durabilidad ante el salitre costero.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BENEFICIOS -->
    <section class="py-sec" style="background:var(--coal-2);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:64px;" class="pq-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">La diferencia Pacifica</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">
              CALIDAD EN<br/>CADA SUPERFICIE.
            </h2>
          </div>
          <p class="sr d2" style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
            Nuestros acabados no solo se ven bien — están diseñados para durar y mantener su apariencia premium con el mínimo mantenimiento posible.
          </p>
        </div>

        <div class="porque-grid sr d1">
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <div class="p-cell-title">MATERIALES CERTIFICADOS</div>
            <p class="p-cell-body">Solo trabajamos con proveedores y marcas verificadas que garantizan durabilidad, resistencia y disponibilidad a largo plazo.</p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div>
            <div class="p-cell-title">MANO DE OBRA ESPECIALIZADA</div>
            <p class="p-cell-body">Equipos propios de albañiles, carpinteros, pintores y colocadores con años de experiencia en acabados de alta gama.</p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
            <div class="p-cell-title">PERSONALIZACIÓN TOTAL</div>
            <p class="p-cell-body">Cada proyecto es único. Asesoramos en la selección de materiales, colores y texturas alineados a su visión y presupuesto.</p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <div class="p-cell-title">CUMPLIMIENTO SIN RETRASOS</div>
            <p class="p-cell-body">Los acabados son la fase más visible — los entregamos en tiempo y forma para que su espacio luzca impecable desde el día uno.</p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
            <div class="p-cell-title">PRESUPUESTO TRANSPARENTE</div>
            <p class="p-cell-body">Desglose detallado de costos por metro cuadrado y por concepto. Sabe exactamente en qué se invierte cada peso.</p>
          </div>
          <div class="p-cell">
            <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>
            <div class="p-cell-title">GARANTÍA DE ACABADOS</div>
            <p class="p-cell-body">Respaldamos la calidad de nuestro trabajo. Si algo no cumple con el estándar acordado, lo corregimos sin costo adicional.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contacto-acabados" class="py-sec" style="background:var(--cream);">
      <div class="wrap px-main" style="text-align:center;max-width:720px;">
        <div class="eyebrow sr" style="justify-content:center;"><span class="t-label">Personalicemos su espacio</span></div>
        <h2 class="f-display t-section sr d1" style="color:var(--coal);margin-bottom:22px;">
          ACABADOS QUE<br/>MARCAN DIFERENCIA.
        </h2>
        <p class="sr d2" style="color:#5A5650;font-size:.97rem;font-weight:300;line-height:1.8;margin-bottom:40px;">
          Cuéntenos sobre su proyecto y reciba una asesoría personalizada en selección de materiales y acabados. Sin compromisos, con presupuesto detallado.
        </p>
        <div class="sr d3" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <NuxtLink to="/contacto" class="btn-amber">
            Solicitar asesoría
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="9" x2="15" y2="9"/><polyline points="10 4 15 9 10 14"/></svg>
          </NuxtLink>
          <NuxtLink to="/" class="btn-outline" style="color:var(--coal);border-color:rgba(12,12,10,.22);">Volver al inicio</NuxtLink>
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
  title: 'Acabados Premium — Pacifica Construcción y Mantenimiento',
  meta: [
    { name: 'description', content: 'Acabados de alta calidad para proyectos residenciales, comerciales e industriales en Baja California. Materiales premium, carpintería fina y personalización total.' }
  ]
})

onMounted(() => {
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  document.querySelectorAll('.sr, .sr-left, .sr-right').forEach(el => ro.observe(el))
})
</script>
