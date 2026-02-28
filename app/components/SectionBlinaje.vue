<template>
  <section id="blindaje" class="py-sec blindaje-section" style="position: relative;">
    <!-- Discret mason pattern -->
    <svg class="mason-points light" width="60" height="60" viewBox="0 0 100 100"
      style="position: absolute; top: 60px; left: 40px; opacity: 0.1; pointer-events: none; z-index: 5;">
      <circle cx="50" cy="25" r="6" />
      <circle cx="28" cy="63" r="6" />
      <circle cx="72" cy="63" r="6" />
    </svg>
    <div class="wrap px-main">

      <!-- Header -->
      <div class="blindaje-header">
        <div class="sr">
          <div class="eyebrow"><span class="t-label">Producto estrella</span></div>
          <h2 class="f-display t-section blindaje-title">
            PLAN<br /><span class="blindaje-amber">BLINDAJE.</span>
          </h2>
        </div>
        <div class="blindaje-header-right sr d1">
          <p class="blindaje-intro">
            Su instalación merece más que reaccionar a problemas — merece que nunca ocurran. Plan Blindaje es nuestro
            programa de protección integral anual, diseñado para que usted olvide que existe un problema de
            mantenimiento.
          </p>
          <div class="blindaje-badge-row">
            <div class="blindaje-stat-pill">
              <span class="bsp-num">100%</span>
              <span class="bsp-lbl">Cobertura anual</span>
            </div>
            <div class="blindaje-stat-pill">
              <span class="bsp-num">4h</span>
              <span class="bsp-lbl">Respuesta urgencias</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card principal -->
      <div class="blindaje-card sr d2">

        <!-- Lado izquierdo: nombre + CTA -->
        <div class="blindaje-card-left">
          <div class="blindaje-card-label">Plan anual</div>
          <div class="blindaje-card-name">BLINDAJE</div>
          <p class="blindaje-card-tagline">Protección total. Sin sorpresas. Todo el año.</p>

          <div class="blindaje-divider"></div>

          <p class="blindaje-card-body">
            Un solo plan cubre diagnóstico, correctivos, urgencias y limpieza especializada. Usted se enfoca en su
            negocio — nosotros en sus instalaciones.
          </p>

          <div class="sr text-center mt-xl">
            <NuxtLink to="/contacto" class="btn-amber blindaje-cta">
              Proteger mis instalaciones
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round">
                <line x1="3" y1="9" x2="15" y2="9" />
                <polyline points="10 4 15 9 10 14" />
              </svg>
            </NuxtLink>
          </div>

          <p class="blindaje-fine">Contrato anual renovable · Baja California</p>
        </div>

        <!-- Lado derecho: incluye -->
        <div class="blindaje-card-right">
          <div class="blindaje-includes-title">QUÉ INCLUYE</div>

          <div class="blindaje-item">
            <div class="blindaje-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div class="blindaje-item-body">
              <div class="blindaje-item-title">Diagnóstico Preventivo Semestral</div>
              <div class="blindaje-item-desc">Evaluación exhaustiva de estructuras e instalaciones cada 6 meses con
                informe técnico detallado.</div>
              <div class="blindaje-item-count">
                <span class="bic-num">×1</span> al año
              </div>
            </div>
          </div>

          <div class="blindaje-item">
            <div class="blindaje-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <path
                  d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <div class="blindaje-item-body">
              <div class="blindaje-item-title">Servicios Correctivos Programados</div>
              <div class="blindaje-item-desc">Intervenciones programadas para reparaciones de desgaste: pintura,
                carpintería y acabados.</div>
              <div class="blindaje-item-count">
                <span class="bic-num">×3</span> al año · uno por semestre
              </div>
            </div>
          </div>

          <div class="blindaje-item">
            <div class="blindaje-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div class="blindaje-item-body">
              <div class="blindaje-item-title">Atención de Urgencias</div>
              <div class="blindaje-item-desc">Respuesta prioritaria en plomería, cerrajería y electricidad. Disponibles
                cuando más lo necesita.</div>
              <div class="blindaje-item-count">
                <span class="bic-num">×2</span> al año · respuesta <span class="bic-num">4h</span> garantizada
              </div>
            </div>
          </div>

          <div class="blindaje-item blindaje-item--last">
            <div class="blindaje-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div class="blindaje-item-body">
              <div class="blindaje-item-title">Limpieza Especializada</div>
              <div class="blindaje-item-desc">Limpieza profesional de piso cerámico o alfombra hasta 20 m² con productos
                y equipo certificados.</div>
              <div class="blindaje-item-count">
                <span class="bic-num">×1</span> al año · hasta 20 m²
              </div>
            </div>
          </div>

          <!-- Tag de cierre -->
          <div class="blindaje-seal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="2"
              stroke-linecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Garantía Pacifica · Protección todo el año</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.blindaje-section {
  background: var(--coal-2);
}

.blindaje-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: end;
  margin-bottom: 64px;
}

@media (max-width: 768px) {
  .blindaje-header {
    grid-template-columns: 1fr;
    gap: 28px;
    margin-bottom: 40px;
  }
}

.blindaje-title {
  color: var(--text-light);
  line-height: .88;
}

.blindaje-amber {
  color: var(--amber);
}

.blindaje-intro {
  font-size: .97rem;
  font-weight: 300;
  line-height: 1.8;
  color: var(--text-dim);
  margin-bottom: 28px;
}

.blindaje-badge-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.blindaje-stat-pill {
  display: flex;
  flex-direction: column;
  padding: 14px 22px;
  border: 1px solid var(--border-amber);
  background: rgba(232, 134, 42, .06);
}

.bsp-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.8rem;
  letter-spacing: .04em;
  line-height: 1;
  color: var(--amber);
}

.bsp-lbl {
  font-size: .68rem;
  font-weight: 600;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-top: 4px;
}

/* ── Card ── */
.blindaje-card {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 0;
  border: 1px solid var(--border-amber);
  background: var(--coal-3);
  position: relative;
  overflow: hidden;
}

.blindaje-card::before {
  content: 'BLINDAJE';
  position: absolute;
  bottom: -30px;
  right: -20px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 9rem;
  letter-spacing: .05em;
  color: rgba(232, 134, 42, .04);
  pointer-events: none;
  line-height: 1;
}

@media (max-width: 900px) {
  .blindaje-card {
    grid-template-columns: 1fr;
  }
}

.blindaje-card-left {
  background: var(--amber);
  padding: 52px 44px;
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  overflow: hidden;
}

.blindaje-card-left::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(12, 12, 10, .08);
}

.blindaje-card-label {
  font-size: .68rem;
  font-weight: 600;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: rgba(12, 12, 10, .55);
  margin-bottom: 10px;
}

.blindaje-card-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 5vw, 4.5rem);
  letter-spacing: .04em;
  line-height: .88;
  color: var(--coal);
  margin-bottom: 14px;
}

.blindaje-card-tagline {
  font-size: .85rem;
  font-weight: 600;
  color: rgba(12, 12, 10, .65);
  line-height: 1.5;
  margin-bottom: 28px;
}

.blindaje-divider {
  width: 40px;
  height: 2px;
  background: rgba(12, 12, 10, .2);
  margin-bottom: 24px;
}

.blindaje-card-body {
  font-size: .88rem;
  font-weight: 300;
  color: rgba(12, 12, 10, .7);
  line-height: 1.7;
  margin-bottom: 32px;
  flex: 1;
}

.blindaje-cta {
  background: var(--coal);
  color: var(--text-light);
  justify-content: center;
  margin-bottom: 14px;
}

.blindaje-cta:hover {
  background: var(--coal-2);
  box-shadow: none;
}

.blindaje-fine {
  font-size: .68rem;
  font-weight: 400;
  letter-spacing: .1em;
  color: rgba(12, 12, 10, .45);
  text-align: center;
}

/* ── Right side ── */
.blindaje-card-right {
  padding: 52px 48px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

@media (max-width: 600px) {
  .blindaje-card-left {
    padding: 36px 28px;
  }

  .blindaje-card-right {
    padding: 36px 28px;
  }
}

.blindaje-includes-title {
  font-size: .68rem;
  font-weight: 600;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.blindaje-includes-title::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border-amber);
}

.blindaje-item {
  display: flex;
  gap: 18px;
  align-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid var(--border-dim);
}

.blindaje-item--last {
  border-bottom: none;
}

.blindaje-item-icon {
  width: 36px;
  height: 36px;
  border: 1px solid var(--border-amber);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
  background: rgba(232, 134, 42, .05);
}

.blindaje-item-body {
  flex: 1;
}

.blindaje-item-title {
  font-family: 'Barlow', sans-serif;
  font-size: .9rem;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 4px;
  letter-spacing: .01em;
}

.blindaje-item-desc {
  font-size: .82rem;
  font-weight: 300;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.blindaje-item-count {
  font-size: .72rem;
  font-weight: 500;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.bic-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  color: var(--amber);
  letter-spacing: .06em;
  margin-right: 2px;
}

.blindaje-seal {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  padding: 14px 18px;
  border: 1px solid var(--border-amber);
  background: rgba(232, 134, 42, .04);
  font-size: .72rem;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--amber);
}
</style>
