<template>
  <div>

    <!-- HERO -->
    <section>
      <div id="hero" style="min-height:70vh;">
        <div class="hero-bg"
          style="background-image:url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2200&q=85&auto=format&fit=crop');background-position:center 60%;">
        </div>
        <div class="hero-content wrap">
          <div class="hero-eyebrow sr">
            <div class="hero-eyebrow-line"></div>
            <span class="hero-eyebrow-text">Ejecución de Obra</span>
          </div>
          <h1 class="hero-title sr d1">
            CONSTRUCCIÓN<br />
            <span class="amber-word">INTEGRAL.</span>
          </h1>
          <div class="hero-foot">
            <p class="hero-sub sr d2">
              Ejecutamos proyectos de construcción cumpliendo tiempos, presupuesto y los más altos estándares de calidad
              — desde obra nueva hasta renovaciones complejas en toda Baja California.
            </p>
            <div class="hero-actions sr d3">
              <NuxtLink to="/contacto" class="btn-amber">
                Cotizar proyecto
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round">
                  <line x1="3" y1="9" x2="15" y2="9" />
                  <polyline points="10 4 15 9 10 14" />
                </svg>
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
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:72px;"
          class="svc-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Ejecución & Supervisión</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">
              DEL PLANO<br />A LA REALIDAD.
            </h2>
          </div>
          <p class="sr d2"
            style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
            Nuestro equipo de construcción opera con disciplina militar: cada fase tiene un responsable, cada material
            tiene trazabilidad, y cada peso invertido se justifica con resultados tangibles en campo.
          </p>
        </div>

        <div class="service-block sr">
          <div class="service-block-left">
            <div>
              <div class="service-tag">Obra Nueva</div>
              <h3 class="f-display service-title">CONSTRUCCIÓN<br />DESDE CERO</h3>
            </div>
            <div>
              <div class="service-objective">Alcance</div>
              <p class="service-obj-text">
                Obra civil y estructural completa — desde excavación y cimentación hasta entrega de llaves con acabados
                finales.
              </p>
            </div>
            <div class="service-big-num">01</div>
          </div>
          <div class="service-block-right">
            <div class="svc-feature">
              <div class="svc-feature-title">Cimentación profunda y superficial</div>
              <div class="svc-feature-desc">Zapatas, losas de cimentación, pilas y pilotes según estudio de mecánica de
                suelos.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Estructura de concreto y acero</div>
              <div class="svc-feature-desc">Columnas, trabes, losas y muros con estricto apego al proyecto estructural
                aprobado.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Instalaciones MEP</div>
              <div class="svc-feature-desc">Sistemas hidráulicos, sanitarios, eléctricos y de HVAC coordinados sin
                conflictos.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Control de calidad in-situ</div>
              <div class="svc-feature-desc">Pruebas de laboratorio, supervisión de procesos y bitácora de obra
                permanente.</div>
            </div>
          </div>
        </div>

        <div class="service-block sr d1">
          <div class="service-block-left">
            <div>
              <div class="service-tag">Renovación</div>
              <h3 class="f-display service-title">REMODELACIONES<br />Y EXPANSIONES</h3>
            </div>
            <div>
              <div class="service-objective">Alcance</div>
              <p class="service-obj-text">
                Transformación y ampliación de espacios existentes minimizando tiempos de inactividad y cuidando la
                operación actual del inmueble.
              </p>
            </div>
            <div class="service-big-num">02</div>
          </div>
          <div class="service-block-right">
            <div class="svc-feature">
              <div class="svc-feature-title">Remodelaciones integrales</div>
              <div class="svc-feature-desc">Rediseño de espacios comerciales, residenciales e industriales con mínima
                interrupción.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Expansión de naves y oficinas</div>
              <div class="svc-feature-desc">Ampliaciones estructurales que se integran sin interrumpir la operación
                actual.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Capital improvements</div>
              <div class="svc-feature-desc">Mejoras que incrementan el valor, eficiencia y vida útil de sus activos
                inmobiliarios.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Demolición controlada</div>
              <div class="svc-feature-desc">Retiro seguro de estructuras existentes con gestión responsable de escombro
                y residuos.</div>
            </div>
          </div>
        </div>

        <div class="service-block sr d2">
          <div class="service-block-left">
            <div>
              <div class="service-tag">Gestión</div>
              <h3 class="f-display service-title">CONSTRUCTION<br />MANAGEMENT</h3>
            </div>
            <div>
              <div class="service-objective">Alcance</div>
              <p class="service-obj-text">
                Supervisión integral de calidad, tiempos y costos con reportes semanales y transparencia total para el
                propietario.
              </p>
            </div>
            <div class="service-big-num">03</div>
          </div>
          <div class="service-block-right">
            <div class="svc-feature">
              <div class="svc-feature-title">Supervisión de obra</div>
              <div class="svc-feature-desc">Presencia permanente en sitio para verificar calidad, seguridad y apego a
                proyecto.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Control presupuestal</div>
              <div class="svc-feature-desc">Seguimiento de estimaciones, extras y deductivas contra el presupuesto base
                aprobado.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Coordinación de contratistas</div>
              <div class="svc-feature-desc">Gestión centralizada de proveedores y subcontratistas bajo nuestros
                estándares de calidad.</div>
            </div>
            <div class="svc-feature">
              <div class="svc-feature-title">Reportes ejecutivos</div>
              <div class="svc-feature-desc">Informes semanales con avance fotográfico, financiero y de ruta crítica
                actualizada.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OBRA CIVIL -->
    <section class="py-sec" style="background:var(--cream);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;" class="svc-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label" style="color:var(--amber);">Construcción Nueva</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--coal);">
              OBRA<br />CIVIL.
            </h2>
            <p class="sr d2" style="color:#5A5650;font-size:.97rem;font-weight:300;line-height:1.8;margin-top:22px;">
              Ejecutamos trabajos de albañilería con mano de obra calificada el uso de maquinaria pesada (trascado) para
              movimientos de tierra y preparación de terrenos. Construimos estructuras sólidas como bardas perimetrales,
              muros de contención y cimentaciones, aplicando las mejores prácticas de la industria.
            </p>
            <div class="sr d3" style="margin-top:32px;">
              <NuxtLink to="/contacto" class="btn-amber" style="font-size:.95rem;">
                Cotizar obra civil
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round">
                  <line x1="3" y1="9" x2="15" y2="9" />
                  <polyline points="10 4 15 9 10 14" />
                </svg>
              </NuxtLink>
            </div>
          </div>
          <div class="sr d2">
            <div style="background:var(--coal);padding:44px 40px;position:relative;overflow:hidden;">
              <div style="position:absolute;top:0;left:0;width:3px;height:100%;background:var(--amber);"></div>
              <div
                style="font-family:'Bebas Neue',sans-serif;font-size:1.35rem;letter-spacing:.05em;color:var(--text-light);margin-bottom:20px;">
                ALCANCE DE OBRA CIVIL</div>
              <div style="display:flex;flex-direction:column;gap:16px;">
                <div style="display:flex;gap:10px;align-items:center;">
                  <div style="width:6px;height:6px;border-radius:50%;background:var(--amber);flex-shrink:0;"></div>
                  <div style="font-size:1.05rem;font-weight:400;color:var(--text-light);">Albañilería general y
                    especializada</div>
                </div>
                <div style="display:flex;gap:10px;align-items:center;">
                  <div style="width:6px;height:6px;border-radius:50%;background:var(--amber);flex-shrink:0;"></div>
                  <div style="font-size:1.05rem;font-weight:400;color:var(--text-light);">Maquinaria pesada y trascado
                  </div>
                </div>
                <div style="display:flex;gap:10px;align-items:center;">
                  <div style="width:6px;height:6px;border-radius:50%;background:var(--amber);flex-shrink:0;"></div>
                  <div style="font-size:1.05rem;font-weight:400;color:var(--text-light);">Construcción de bardas y
                    estructuras</div>
                </div>
                <div style="display:flex;gap:10px;align-items:center;">
                  <div style="width:6px;height:6px;border-radius:50%;background:var(--amber);flex-shrink:0;"></div>
                  <div style="font-size:1.05rem;font-weight:400;color:var(--text-light);">Cimentaciones y muros de
                    contención</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONSTRUCCIÓN LIGERA -->
    <section class="py-sec" style="background:var(--coal);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;" class="svc-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Construcción Nueva</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">
              CONSTRUCCIÓN<br />LIGERA.
            </h2>
            <p class="sr d2"
              style="color:var(--text-dim);font-size:.97rem;font-weight:300;line-height:1.8;margin-top:22px;">
              Edificamos utilizando sistemas de <strong style="font-weight:600;color:var(--text-light);">marcos
                metálicos</strong> y <strong style="font-weight:600;color:var(--text-light);">tablaroca
                (drywall)</strong>, una solución moderna que ofrece rapidez de ejecución, flexibilidad de diseño y
              excelente desempeño estructural. Ideal para oficinas, consultorios, divisiones interiores y ampliaciones.
            </p>
            <div class="sr d3" style="margin-top:32px;">
              <NuxtLink to="/contacto" class="btn-amber" style="font-size:.95rem;">
                Cotizar proyecto
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round">
                  <line x1="3" y1="9" x2="15" y2="9" />
                  <polyline points="10 4 15 9 10 14" />
                </svg>
              </NuxtLink>
            </div>
          </div>
          <div class="sr d2">
            <div class="porque-grid" style="grid-template-columns:1fr 1fr;">
              <div class="p-cell">
                <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg></div>
                <div class="p-cell-title">RAPIDEZ</div>
                <p class="p-cell-body">Tiempos de construcción significativamente menores vs obra tradicional.</p>
              </div>
              <div class="p-cell">
                <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg></div>
                <div class="p-cell-title">RESISTENCIA</div>
                <p class="p-cell-body">Marcos metálicos con desempeño estructural certificado.</p>
              </div>
              <div class="p-cell">
                <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg></div>
                <div class="p-cell-title">FLEXIBILIDAD</div>
                <p class="p-cell-body">Diseños adaptables para oficinas, divisiones y ampliaciones.</p>
              </div>
              <div class="p-cell">
                <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg></div>
                <div class="p-cell-title">ECONÓMICO</div>
                <p class="p-cell-body">Costos optimizados sin sacrificar calidad ni acabados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ADMINISTRACIÓN DE OBRA -->
    <section class="py-sec" style="background:var(--cream);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:48px;"
          class="svc-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label" style="color:var(--amber);">Gestión Integral</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--coal);">
              ADMINISTRACIÓN<br />DE OBRA.
            </h2>
          </div>
          <p class="sr d2" style="color:#5A5650;font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
            Nos encargamos de la gestión financiera y operativa de tu proyecto. Buscamos y supervisamos a los mejores
            subcontratistas especializados — eléctricos, de pisos, tablaroca y más — para optimizar costos sin
            comprometer la calidad.
          </p>
        </div>
        <div class="sr d1">
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2px;" class="admin-grid">
            <div style="background:var(--coal);padding:44px 36px;position:relative;overflow:hidden;">
              <div
                style="font-family:'Bebas Neue',sans-serif;font-size:1.35rem;letter-spacing:.05em;color:var(--text-light);margin-bottom:10px;">
                GESTIÓN FINANCIERA</div>
              <p style="font-size:1rem;font-weight:300;line-height:1.65;color:var(--text-muted);">Control presupuestal
                detallado, seguimiento de pagos y administración transparente de cada peso invertido en tu obra.</p>
            </div>
            <div style="background:var(--coal);padding:44px 36px;position:relative;overflow:hidden;">
              <div
                style="font-family:'Bebas Neue',sans-serif;font-size:1.35rem;letter-spacing:.05em;color:var(--text-light);margin-bottom:10px;">
                SUPERVISIÓN OPERATIVA</div>
              <p style="font-size:1rem;font-weight:300;line-height:1.65;color:var(--text-muted);">Coordinamos todos los
                frentes de trabajo para que cada fase se ejecute en tiempo y forma, sin conflictos entre equipos.</p>
            </div>
            <div style="background:var(--coal);padding:44px 36px;position:relative;overflow:hidden;">
              <div
                style="font-family:'Bebas Neue',sans-serif;font-size:1.35rem;letter-spacing:.05em;color:var(--text-light);margin-bottom:10px;">
                SUBCONTRATISTAS ESPECIALIZADOS</div>
              <p style="font-size:1rem;font-weight:300;line-height:1.65;color:var(--text-muted);">Seleccionamos los
                mejores proveedores (eléctricos, pisos, tablaroca) para garantizar calidad y optimizar los costos del
                dueño de la obra.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REHABILITACIONES -->
    <section class="py-sec" style="background:var(--coal-2);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;" class="svc-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Restauración</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">
              REHABILITACIÓN<br />DE PROPIEDADES.
            </h2>
            <p class="sr d2"
              style="color:var(--text-dim);font-size:.97rem;font-weight:300;line-height:1.8;margin-top:22px;">
              Nos enfocamos en restaurar propiedades que han sido abandonadas o dañadas — por ejemplo, casas
              vandalizadas — para volverlas habitables. Es un servicio muy solicitado por <strong
                style="font-weight:600;color:var(--text-light);">agentes de bienes raíces</strong> que necesitan una
              propiedad lista para vender.
            </p>
          </div>
          <div class="sr d2">
            <div class="porque-grid" style="grid-template-columns:1fr 1fr;">
              <div class="p-cell">
                <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg></div>
                <div class="p-cell-title">PINTURA INTEGRAL</div>
                <p class="p-cell-body">Preparación y pintura completa de interiores y exteriores.</p>
              </div>
              <div class="p-cell">
                <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                    <path
                      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg></div>
                <div class="p-cell-title">RESANADO DE MUROS</div>
                <p class="p-cell-body">Reparación de paredes dañadas, grietas y desprendimientos.</p>
              </div>
              <div class="p-cell">
                <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg></div>
                <div class="p-cell-title">REPARACIONES GENERALES</div>
                <p class="p-cell-body">Plomería, electricidad, pisos y acabados para dejar la propiedad lista.</p>
              </div>
              <div class="p-cell">
                <div class="p-cell-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg></div>
                <div class="p-cell-title">VALOR DE MERCADO</div>
                <p class="p-cell-body">Devolvemos el valor comercial a propiedades deterioradas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REHABILITACIÓN EXTREMA -->
    <section class="py-sec" style="background:var(--cream);">
      <div class="wrap px-main" style="max-width:900px;">
        <div class="eyebrow sr" style="justify-content:center;"><span class="t-label"
            style="color:var(--amber);">Rehabilitación Extrema</span></div>
        <h2 class="f-display t-section sr d1" style="color:var(--coal);text-align:center;margin-bottom:22px;">
          RESCATAMOS TU<br />INVERSIÓN.
        </h2>
        <p class="sr d2"
          style="color:#5A5650;font-size:.97rem;font-weight:300;line-height:1.8;text-align:center;margin-bottom:48px;">
          Transformamos propiedades en estado crítico para devolverles su valor en el mercado. Nuestro equipo de
          expertos está capacitado para realizar intervenciones mayores.
        </p>
        <div class="sr d2" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px;">
          <div style="background:var(--coal);padding:40px 32px;text-align:center;">
            <div
              style="width:48px;height:48px;border:1px solid var(--border-amber);display:flex;align-items:center;justify-content:center;margin:0 auto 18px;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div
              style="font-family:'Bebas Neue',sans-serif;font-size:1.25rem;letter-spacing:.05em;color:var(--text-light);margin-bottom:8px;">
              DAÑOS POR INCENDIO</div>
            <p style="font-size:.95rem;font-weight:300;line-height:1.6;color:var(--text-muted);">Restauración completa
              de propiedades afectadas por fuego.</p>
          </div>
          <div style="background:var(--coal);padding:40px 32px;text-align:center;">
            <div
              style="width:48px;height:48px;border:1px solid var(--border-amber);display:flex;align-items:center;justify-content:center;margin:0 auto 18px;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div
              style="font-family:'Bebas Neue',sans-serif;font-size:1.25rem;letter-spacing:.05em;color:var(--text-light);margin-bottom:8px;">
              SUSTANCIAS QUÍMICAS</div>
            <p style="font-size:.95rem;font-weight:300;line-height:1.6;color:var(--text-muted);">Saneamiento de
              propiedades impregnadas por sustancias.</p>
          </div>
          <div style="background:var(--coal);padding:40px 32px;text-align:center;">
            <div
              style="width:48px;height:48px;border:1px solid var(--border-amber);display:flex;align-items:center;justify-content:center;margin:0 auto 18px;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div
              style="font-family:'Bebas Neue',sans-serif;font-size:1.25rem;letter-spacing:.05em;color:var(--text-light);margin-bottom:8px;">
              VIABILIDAD GARANTIZADA</div>
            <p style="font-size:.95rem;font-weight:300;line-height:1.6;color:var(--text-muted);">Siempre que la
              cimentación no presente daños estructurales.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AVISO REPSE -->
    <section class="py-sec" style="background:var(--coal);">
      <div class="wrap px-main" style="max-width:900px;text-align:center;">
        <div class="eyebrow sr" style="justify-content:center;"><span class="t-label">Confianza &amp;
            Cumplimiento</span></div>
        <h2 class="f-display t-section sr d1" style="color:var(--text-light);margin-bottom:22px;">
          TRANSPARENCIA<br />Y SEGURIDAD JURÍDICA.
        </h2>
        <p class="sr d2"
          style="color:var(--text-dim);font-size:1rem;font-weight:300;line-height:1.8;margin-bottom:36px;">
          En Pacífica Constructora trabajamos con los más altos estándares normativos. Nos enorgullece anunciar que en
          los próximos dos meses contaremos con nuestro registro <strong
            style="font-weight:600;color:var(--amber);">REPSE</strong> (Registro de Prestadoras de Servicios
          Especializados), garantizando total transparencia y seguridad jurídica para tu tranquilidad.
        </p>
        <div class="sr d3"
          style="display:inline-flex;align-items:center;gap:14px;padding:18px 32px;border:1px solid var(--border-amber);background:var(--amber-dim);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
            stroke-linecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span
            style="font-family:'Barlow',sans-serif;font-size:1rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--amber);">Registro
            REPSE en proceso</span>
        </div>
      </div>
    </section>

    <!-- PROCESO -->
    <section id="proceso-construccion" class="py-sec" style="background:var(--coal-2);">
      <div class="wrap px-main">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:64px;"
          class="pq-hdr">
          <div>
            <div class="eyebrow sr"><span class="t-label">Metodología de obra</span></div>
            <h2 class="f-display t-section sr d1" style="color:var(--text-light);">
              NUESTRO PROCESO<br />CONSTRUCTIVO.
            </h2>
          </div>
          <p class="sr d2"
            style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
            Cada proyecto sigue una metodología probada que garantiza control, calidad y cumplimiento desde el arranque
            hasta la entrega final.
          </p>
        </div>

        <div class="maint-grid sr">
          <div class="maint-card">
            <div class="maint-badge">Fase 01</div>
            <div class="maint-bg-num">01</div>
            <div class="maint-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div class="maint-card-title">Revisión de Proyecto</div>
            <p class="maint-card-desc">Validamos la documentación técnica, verificamos planos y confirmamos alcances
              antes de movilizar recursos.</p>
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div class="maint-card-title">Ejecución de Obra</div>
            <p class="maint-card-desc">Construcción con supervisión diaria, control de calidad y reportes semanales de
              avance físico y financiero.</p>
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div class="maint-card-title">Entrega & Garantía</div>
            <p class="maint-card-desc">Verificación final punto por punto, entrega de documentación as-built y garantía
              estructural respaldada.</p>
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.6"
                stroke-linecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div class="maint-card-title">Soporte Post-Obra</div>
            <p class="maint-card-desc">Acompañamiento después de la entrega para resolver observaciones y garantizar la
              satisfacción total del cliente.</p>
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
          CONSTRUYAMOS<br />SU PROYECTO.
        </h2>
        <p class="sr d2" style="color:#5A5650;font-size:.97rem;font-weight:300;line-height:1.8;margin-bottom:40px;">
          Envíenos los detalles de su obra y reciba una propuesta técnica con presupuesto detallado, cronograma y
          alcances claros. Sin compromisos.
        </p>
        <div class="sr d3" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <NuxtLink to="/contacto" class="btn-amber">
            Solicitar cotización
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
