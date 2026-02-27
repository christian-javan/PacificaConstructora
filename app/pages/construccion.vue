<template>
  <div>

    <!-- HERO -->
    <section>
      <div id="hero" style="min-height:70vh;">
        <div class="hero-bg" style="background-image:url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2200&q=85&auto=format&fit=crop');background-position:center 60%;"></div>
        <div class="hero-content wrap">
          <div class="hero-eyebrow sr">
            <div class="hero-eyebrow-line"></div>
            <span class="hero-eyebrow-text">Ejecución de Obra</span>
          </div>
          <h1 class="hero-title sr d1">
            CONSTRUCCIÓN<br/>
            <span class="amber-word">INTEGRAL.</span>
          </h1>
          <div class="hero-foot">
            <p class="hero-sub sr d2">
              Ejecutamos proyectos de construcción cumpliendo tiempos, presupuesto y los más altos estándares de calidad — desde obra nueva hasta renovaciones complejas en toda Baja California.
            </p>
            <div class="hero-actions sr d3">
              <NuxtLink to="/contacto" class="btn-amber">
                Cotizar proyecto
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="9" x2="15" y2="9"/><polyline points="10 4 15 9 10 14"/></svg>
              </NuxtLink>
              <a href="#proceso-construccion" class="btn-outline">Nuestro proceso</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICIOS DE CONSTRUCCIÓN -->
    <section class="py-sec" style="background:var(--coal);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:72px;" class="svc-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Ejecución & Supervisión</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">
              DEL PLANO<br/>A LA REALIDAD.
            </h2>
          </div>
          <p class="sr d2" style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
            Nuestro equipo de construcción opera con disciplina militar: cada fase tiene un responsable, cada material tiene trazabilidad, y cada peso invertido se justifica con resultados tangibles en campo.
          </p>
        </div>

        <div class="service-block sr">
          <div class="service-block-left">
            <div>
              <div class="service-tag">Obra Nueva</div>
              <h3 class="f-display service-title">CONSTRUCCIÓN<br/>DESDE CERO</h3>
            </div>
            <div>
              <div class="service-objective">Alcance</div>
              <p class="service-obj-text">
                Obra civil y estructural completa — desde excavación y cimentación hasta entrega de llaves con acabados finales.
              </p>
            </div>
            <div class="service-big-num">01</div>
          </div>
          <div class="service-block-right">
            <div class="svc-feature">
              <div class="svc-feature-title">Cimentación profunda y superficial</div>
              <div class="svc-feature-desc">Zapatas, losas de cimentación, pilas y pilotes según estudio de mecánica de suelos.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Estructura de concreto y acero</div>
              <div class="svc-feature-desc">Columnas, trabes, losas y muros con estricto apego al proyecto estructural aprobado.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Instalaciones MEP</div>
              <div class="svc-feature-desc">Sistemas hidráulicos, sanitarios, eléctricos y de HVAC coordinados sin conflictos.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Control de calidad in-situ</div>
              <div class="svc-feature-desc">Pruebas de laboratorio, supervisión de procesos y bitácora de obra permanente.</div>
            </div>
          </div>
        </div>

        <div class="service-block sr d1">
          <div class="service-block-left">
            <div>
              <div class="service-tag">Renovación</div>
              <h3 class="f-display service-title">REMODELACIONES<br/>Y EXPANSIONES</h3>
            </div>
            <div>
              <div class="service-objective">Alcance</div>
              <p class="service-obj-text">
                Transformación y ampliación de espacios existentes minimizando tiempos de inactividad y cuidando la operación actual del inmueble.
              </p>
            </div>
            <div class="service-big-num">02</div>
          </div>
          <div class="service-block-right">
            <div class="svc-feature">
              <div class="svc-feature-title">Remodelaciones integrales</div>
              <div class="svc-feature-desc">Rediseño de espacios comerciales, residenciales e industriales con mínima interrupción.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Expansión de naves y oficinas</div>
              <div class="svc-feature-desc">Ampliaciones estructurales que se integran sin interrumpir la operación actual.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Capital improvements</div>
              <div class="svc-feature-desc">Mejoras que incrementan el valor, eficiencia y vida útil de sus activos inmobiliarios.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Demolición controlada</div>
              <div class="svc-feature-desc">Retiro seguro de estructuras existentes con gestión responsable de escombro y residuos.</div>
            </div>
          </div>
        </div>

        <div class="service-block sr d2">
          <div class="service-block-left">
            <div>
              <div class="service-tag">Gestión</div>
              <h3 class="f-display service-title">CONSTRUCTION<br/>MANAGEMENT</h3>
            </div>
            <div>
              <div class="service-objective">Alcance</div>
              <p class="service-obj-text">
                Supervisión integral de calidad, tiempos y costos con reportes semanales y transparencia total para el propietario.
              </p>
            </div>
            <div class="service-big-num">03</div>
          </div>
          <div class="service-block-right">
            <div class="svc-feature">
              <div class="svc-feature-title">Supervisión de obra</div>
              <div class="svc-feature-desc">Presencia permanente en sitio para verificar calidad, seguridad y apego a proyecto.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Control presupuestal</div>
              <div class="svc-feature-desc">Seguimiento de estimaciones, extras y deductivas contra el presupuesto base aprobado.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Coordinación de contratistas</div>
              <div class="svc-feature-desc">Gestión centralizada de proveedores y subcontratistas bajo nuestros estándares de calidad.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Reportes ejecutivos</div>
              <div class="svc-feature-desc">Informes semanales con avance fotográfico, financiero y de ruta crítica actualizada.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESO -->
    <section id="proceso-construccion" class="py-sec" style="background:var(--coal-2);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:64px;" class="pq-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Metodología de obra</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">
              NUESTRO PROCESO<br/>CONSTRUCTIVO.
            </h2>
          </div>
          <p class="sr d2" style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
            Cada proyecto sigue una metodología probada que garantiza control, calidad y cumplimiento desde el arranque hasta la entrega final.
          </p>
        </div>

        <div class="maint-grid sr">
          <div class="maint-card">
            <div class="maint-badge">Fase 01</div>
            <div class="maint-bg-num">01</div>
            <div class="maint-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div class="maint-card-title">Revisión de Proyecto</div>
            <p class="maint-card-desc">Validamos la documentación técnica, verificamos planos y confirmamos alcances antes de movilizar recursos.</p>
            <div class="maint-tags">
              <span class="maint-tag">Planos</span>
              <span class="maint-tag">Especificaciones</span>
              <span class="maint-tag">Presupuesto</span>
            </div>
          </div>

          <div class="maint-card">
            <div class="maint-badge">Fase 02</div>
            <div class="maint-bg-num">02</div>
            <div class="maint-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div class="maint-card-title">Ejecución de Obra</div>
            <p class="maint-card-desc">Construcción con supervisión diaria, control de calidad y reportes semanales de avance físico y financiero.</p>
            <div class="maint-tags">
              <span class="maint-tag">Supervisión</span>
              <span class="maint-tag">Bitácora</span>
              <span class="maint-tag">Control</span>
            </div>
          </div>

          <div class="maint-card">
            <div class="maint-badge">Fase 03</div>
            <div class="maint-bg-num">03</div>
            <div class="maint-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div class="maint-card-title">Entrega & Garantía</div>
            <p class="maint-card-desc">Verificación final punto por punto, entrega de documentación as-built y garantía estructural respaldada.</p>
            <div class="maint-tags">
              <span class="maint-tag">Punch list</span>
              <span class="maint-tag">As-built</span>
              <span class="maint-tag">Garantía</span>
            </div>
          </div>

          <div class="maint-card">
            <div class="maint-badge">Continuo</div>
            <div class="maint-bg-num">04</div>
            <div class="maint-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div class="maint-card-title">Soporte Post-Obra</div>
            <p class="maint-card-desc">Acompañamiento después de la entrega para resolver observaciones y garantizar la satisfacción total del cliente.</p>
            <div class="maint-tags">
              <span class="maint-tag">Seguimiento</span>
              <span class="maint-tag">Mantenimiento</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contacto-construccion" class="py-sec" style="background:var(--cream);">
      <div class="wrap px-main" style="text-align:center;max-width:720px;">
        <div class="eyebrow sr" style="justify-content:center;"><span class="t-label">Iniciemos</span></div>
        <h2 class="f-display t-section sr d1" style="color:var(--coal);margin-bottom:22px;">
          CONSTRUYAMOS<br/>SU PROYECTO.
        </h2>
        <p class="sr d2" style="color:#5A5650;font-size:.97rem;font-weight:300;line-height:1.8;margin-bottom:40px;">
          Envíenos los detalles de su obra y reciba una propuesta técnica con presupuesto detallado, cronograma y alcances claros. Sin compromisos.
        </p>
        <div class="sr d3" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <NuxtLink to="/contacto" class="btn-amber">
            Solicitar cotización
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
  title: 'Construcción — Pacifica Construcción y Mantenimiento',
  meta: [
    { name: 'description', content: 'Ejecución de obra civil e industrial en Baja California. Construcción nueva, remodelaciones y gestión integral de proyectos con garantía estructural. Tijuana y Ensenada.' }
  ]
})

onMounted(() => {
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  document.querySelectorAll('.sr, .sr-left, .sr-right').forEach(el => ro.observe(el))
})
</script>
