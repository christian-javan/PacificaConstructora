<template>
  <section id="servicios" class="py-sec" style="position: relative;">
    <!-- Discret mason pattern -->
    <svg class="mason-points light" width="60" height="60" viewBox="0 0 100 100"
      style="position: absolute; top: 80px; right: 40px; opacity: 0.08; pointer-events: none; z-index: 5;">
      <circle cx="50" cy="25" r="6" />
      <circle cx="28" cy="63" r="6" />
      <circle cx="72" cy="63" r="6" />
    </svg>
    <div class="wrap px-main">
      <!-- Header -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:72px;"
        class="svc-hdr">
        <div>
          <div class="eyebrow sr"><span class="t-label">Lo que hacemos</span></div>
          <h2 class="f-display t-section sr d1">
            TRES FASES.<br />UN ESTÁNDAR.
          </h2>
        </div>
        <p class="sr d2"
          style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
          Acompañamos a nuestros clientes desde la idea inicial hasta la operación continua de sus instalaciones. Un
          socio de construcción integral para proyectos que no admiten errores.
        </p>
      </div>

      <!-- BLOQUE 1: Planeación -->
      <div class="service-block sr">
        <div class="service-block-left">
          <div>
            <div class="service-tag">Pre-Construcción</div>
            <h3 class="f-display service-title">PLANEACIÓN<br />DE PROYECTOS</h3>
          </div>
          <div>
            <div class="service-objective">Objetivo</div>
            <p class="service-obj-text">
              Garantizar que cada proyecto sea viable, eficiente y rentable antes de iniciar la construcción — con
              análisis técnico, financiero y estratégico de alto nivel.
            </p>
          </div>
          <div class="service-big-num">01</div>
        </div>
        <div class="service-block-right">
          <div class="svc-feature">
            <div class="svc-feature-title">Estudios de factibilidad</div>
            <div class="svc-feature-desc">Análisis técnico del sitio para validar viabilidad antes de comprometer
              recursos.</div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Modelo Design-Build</div>
            <div class="svc-feature-desc">Diseño y construcción integrados bajo un solo equipo responsable del
              resultado.</div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Análisis técnico y financiero</div>
            <div class="svc-feature-desc">Evaluación de rentabilidad, flujos de inversión y escenarios de riesgo.</div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Presupuestos detallados</div>
            <div class="svc-feature-desc">Desglose ítem por ítem para decisiones informadas y sin sorpresas.</div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Cronogramas estratégicos</div>
            <div class="svc-feature-desc">Planeación de fases, hitos críticos y rutas de contingencia.</div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Due diligence y riesgos</div>
            <div class="svc-feature-desc">Identificación y mitigación de riesgos legales, técnicos y regulatorios.</div>
          </div>
        </div>
      </div>

      <!-- BLOQUE 2: Construcción -->
      <div class="service-block sr d1">
        <div class="service-block-left">
          <div>
            <div class="service-tag">Ejecución</div>
            <h3 class="f-display service-title">CONSTRUCCIÓN<br />Y GESTIÓN<br />DE OBRA</h3>
          </div>
          <div>
            <div class="service-objective">Objetivo</div>
            <p class="service-obj-text">
              Ejecutar proyectos de construcción cumpliendo tiempos, presupuesto y estándares de calidad — desde obra
              nueva hasta renovaciones complejas.
            </p>
          </div>
          <div class="service-big-num">02</div>
        </div>
        <div class="service-block-right">
          <div class="svc-feature">
            <div class="svc-feature-title">Construcción nueva</div>
            <div class="svc-feature-desc">Obra civil y estructural desde cimentación hasta entrega de llaves.</div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Remodelaciones y renovaciones</div>
            <div class="svc-feature-desc">Transformación de espacios existentes minimizando tiempos de inactividad.
            </div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Expansiones de instalaciones</div>
            <div class="svc-feature-desc">Ampliación de espacios operativos sin interrumpir la operación actual.</div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Capital improvements</div>
            <div class="svc-feature-desc">Mejoras que incrementan el valor, eficiencia y vida útil de tus activos.</div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Construction management</div>
            <div class="svc-feature-desc">Supervisión integral de calidad, tiempos y costos en cada fase de obra.</div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Coordinación de contratistas</div>
            <div class="svc-feature-desc">Gestión centralizada de proveedores y subcontratistas bajo nuestros
              estándares.</div>
          </div>
        </div>
      </div>

      <!-- BLOQUE 3: Facility Services -->
      <div class="service-block sr d2">
        <div class="service-block-left">
          <div>
            <div class="service-tag">Post-Obra</div>
            <h3 class="f-display service-title">FACILITY<br />SERVICES</h3>
          </div>
          <div>
            <div class="service-objective">Objetivo</div>
            <p class="service-obj-text">
              Asegurar el funcionamiento óptimo de sus instalaciones a largo plazo — con soporte preventivo, correctivo
              y atención de emergencias de respuesta inmediata.
            </p>
          </div>
          <div class="service-big-num">03</div>
        </div>
        <div class="service-block-right">
          <div class="svc-feature">
            <div class="svc-feature-title">Mantenimiento preventivo</div>
            <div class="svc-feature-desc">Diagnóstico semestral de estructuras e instalaciones críticas para anticipar
              fallas.</div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Mantenimiento correctivo</div>
            <div class="svc-feature-desc">Intervenciones programadas para reparaciones de desgaste natural y acabados.
            </div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Retrofits y actualizaciones</div>
            <div class="svc-feature-desc">Modernización de sistemas MEP, acabados y tecnología de instalaciones.</div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Rollouts multisede</div>
            <div class="svc-feature-desc">Implementación de mejoras o adecuaciones simultáneas en múltiples ubicaciones.
            </div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Atención de emergencias</div>
            <div class="svc-feature-desc">Respuesta prioritaria 24h para plomería, electricidad, cerrajería y
              recuperación ante desastres.</div>
          </div>
          <div class="svc-feature">
            <div class="svc-feature-title">Soporte operativo continuo</div>
            <div class="svc-feature-desc">Presencia permanente para proyectos menores, adecuaciones y soporte del día a
              día.</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
