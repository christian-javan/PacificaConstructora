<template>
    <div>

        <!-- HERO -->
        <section>
            <div id="hero" style="min-height:70vh;">
                <div class="hero-bg"
                    style="background-image:url('/imagenes/servicio-de-limpieza.webp');background-position:center 40%;">
                </div>
                <div class="hero-content wrap">
                    <div class="hero-eyebrow sr">
                        <div class="hero-eyebrow-line"></div>
                        <span class="hero-eyebrow-text">Limpieza Especializada</span>
                    </div>
                    <h1 class="hero-title sr d1">
                        ESPACIOS<br />
                        <span class="amber-word">IMPECABLES.</span>
                    </h1>
                    <div class="hero-foot">
                        <p class="hero-sub sr d2">
                            Más allá de la construcción y el mantenimiento, ofrecemos un catálogo completo de servicios
                            de limpieza profunda para interiores y exteriores, garantizando espacios impecables.
                        </p>
                        <div class="hero-actions sr d3">
                            <NuxtLink to="/contacto" class="btn-amber">
                                Cotizar servicio
                                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round">
                                    <line x1="3" y1="9" x2="15" y2="9" />
                                    <polyline points="10 4 15 9 10 14" />
                                </svg>
                            </NuxtLink>
                            <a href="#servicios-limpieza" class="btn-outline">Ver servicios</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SERVICIOS DE LIMPIEZA -->
        <section id="servicios-limpieza" class="py-sec" style="background:var(--cream);position:relative;">
            <svg class="mason-points dark" width="60" height="60" viewBox="0 0 100 100"
                style="position: absolute; top: 60px; left: 40px; opacity: 0.1; pointer-events: none; z-index: 5;">
                <circle cx="50" cy="25" r="6" />
                <circle cx="28" cy="63" r="6" />
                <circle cx="72" cy="63" r="6" />
            </svg>
            <div class="wrap px-main">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:72px;"
                    class="svc-hdr">
                    <div>
                        <div class="eyebrow sr"><span class="t-label" style="color:var(--amber);">Catálogo de
                                Servicios</span></div>
                        <h2 class="f-display t-section sr d1" style="color:var(--coal);">
                            LIMPIEZA<br />ESPECIALIZADA<br />INTEGRAL.
                        </h2>
                    </div>
                    <p class="sr d2"
                        style="color:#5A5650;font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
                        Cada servicio está diseñado para restaurar y mantener las superficies de tu propiedad en
                        condiciones óptimas, utilizando técnicas profesionales y productos de alta calidad.
                    </p>
                </div>

                <div class="service-block sr">
                    <div class="service-block-left" style="background:var(--coal);">
                        <div>
                            <div class="service-tag">Exteriores</div>
                            <h3 class="f-display service-title">HIDROLAVADO<br />DE CONCRETO</h3>
                        </div>
                        <div>
                            <div class="service-objective">Resultado</div>
                            <p class="service-obj-text">
                                Eliminación de manchas difíciles y restauración total de superficies exteriores como
                                banquetas, estacionamientos, patios y fachadas de concreto.
                            </p>
                        </div>
                        <div class="service-big-num">01</div>
                    </div>
                    <div class="service-block-right" style="background:var(--coal);">
                        <div class="svc-feature">
                            <div class="svc-feature-title">Equipo industrial</div>
                            <div class="svc-feature-desc">Hidrolavadoras de alta presión para resultados profesionales.
                            </div>
                        </div>
                        <div class="svc-feature">
                            <div class="svc-feature-title">Manchas difíciles</div>
                            <div class="svc-feature-desc">Grasa, aceite, moho y suciedad incrustada eliminados por
                                completo.</div>
                        </div>
                        <div class="svc-feature">
                            <div class="svc-feature-title">Superficies variadas</div>
                            <div class="svc-feature-desc">Concreto, adoquín, piedra natural y superficies porosas.</div>
                        </div>
                        <div class="svc-feature">
                            <div class="svc-feature-title">Acabado restaurado</div>
                            <div class="svc-feature-desc">Devolvemos la apariencia original a tus exteriores.</div>
                        </div>
                    </div>
                </div>

                <div class="service-block sr d1">
                    <div class="service-block-left" style="background:var(--coal);">
                        <div>
                            <div class="service-tag">Interiores</div>
                            <h3 class="f-display service-title">LIMPIEZA<br />RESIDENCIAL<br />A DETALLE</h3>
                        </div>
                        <div>
                            <div class="service-objective">Resultado</div>
                            <p class="service-obj-text">
                                Limpieza fina y profunda para casas nuevas o remodeladas, dejando cada rincón listo para
                                habitar.
                            </p>
                        </div>
                        <div class="service-big-num">02</div>
                    </div>
                    <div class="service-block-right" style="background:var(--coal);">
                        <div class="svc-feature">
                            <div class="svc-feature-title">Post-construcción</div>
                            <div class="svc-feature-desc">Retiro de polvo, residuos y manchas de obra para entrega
                                impecable.</div>
                        </div>
                        <div class="svc-feature">
                            <div class="svc-feature-title">Post-remodelación</div>
                            <div class="svc-feature-desc">Limpieza detallada después de intervenciones de acabados y
                                reparaciones.</div>
                        </div>
                        <div class="svc-feature">
                            <div class="svc-feature-title">Cristales y ventanas</div>
                            <div class="svc-feature-desc">Limpieza interior y exterior de vidrios, marcos y cancelería.
                            </div>
                        </div>
                        <div class="svc-feature">
                            <div class="svc-feature-title">Sanitización completa</div>
                            <div class="svc-feature-desc">Baños, cocinas y áreas comunes desinfectadas y relucientes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- MÁS SERVICIOS -->
        <section class="py-sec" style="background:var(--coal);position:relative;">
            <svg class="mason-points light" width="60" height="60" viewBox="0 0 100 100"
                style="position: absolute; top: 60px; right: 40px; opacity: 0.1; pointer-events: none; z-index: 5;">
                <circle cx="50" cy="25" r="6" />
                <circle cx="28" cy="63" r="6" />
                <circle cx="72" cy="63" r="6" />
            </svg>
            <div class="wrap px-main">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;margin-bottom:64px;"
                    class="pq-hdr">
                    <div>
                        <div class="eyebrow sr"><span class="t-label">Más Servicios</span></div>
                        <h2 class="f-display t-section sr d1" style="color:var(--text-light);">
                            CUIDADO<br />COMPLETO.
                        </h2>
                    </div>
                    <p class="sr d2"
                        style="color:var(--text-dim);font-size:.95rem;font-weight:300;line-height:1.75;align-self:end;">
                        Complementamos nuestro catálogo con servicios especializados para textiles, superficies de todo
                        tipo y soluciones innovadoras en altura.
                    </p>
                </div>

                <div class="maint-grid sr">
                    <div class="maint-card">
                        <div class="maint-badge">Textiles</div>
                        <div class="maint-bg-num">03</div>
                        <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                            </svg></div>
                        <div class="maint-card-title">Cuidado de Textiles</div>
                        <p class="maint-card-desc">Lavado profesional de alfombras, tapicerías, tapetes y colchones con
                            técnicas especializadas que prolongan su vida útil.</p>
                        <div class="maint-tags"><span class="maint-tag">Alfombras</span><span
                                class="maint-tag">Tapicería</span><span class="maint-tag">Colchones</span></div>
                    </div>
                    <div class="maint-card">
                        <div class="maint-badge">Superficies</div>
                        <div class="maint-bg-num">04</div>
                        <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <line x1="3" y1="9" x2="21" y2="9" />
                                <line x1="9" y1="21" x2="9" y2="9" />
                            </svg></div>
                        <div class="maint-card-title">Mantenimiento de Superficies</div>
                        <p class="maint-card-desc">Limpieza especializada de todo tipo de pisos: porcelanato, madera,
                            mármol, vinílico, concreto pulido y más.</p>
                        <div class="maint-tags"><span class="maint-tag">Pisos</span><span
                                class="maint-tag">Porcelanato</span><span class="maint-tag">Madera</span></div>
                    </div>
                    <div class="maint-card">
                        <div class="maint-badge">Innovación</div>
                        <div class="maint-bg-num">05</div>
                        <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg></div>
                        <div class="maint-card-title">Innovación en Alturas</div>
                        <p class="maint-card-desc">Limpieza de ventanas de altura con técnicas profesionales.
                            Próximamente incorporando tecnología de limpieza con drones.</p>
                        <div class="maint-tags"><span class="maint-tag">Ventanas</span><span
                                class="maint-tag">Alturas</span><span class="maint-tag">Drones</span></div>
                    </div>
                    <div class="maint-card">
                        <div class="maint-badge">Integral</div>
                        <div class="maint-bg-num">+</div>
                        <div class="maint-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg></div>
                        <div class="maint-card-title">Servicio a la Medida</div>
                        <p class="maint-card-desc">¿Necesitas algo específico? Diseñamos paquetes de limpieza
                            personalizados según las necesidades de tu propiedad.</p>
                        <div class="maint-tags"><span class="maint-tag">Personalizado</span><span
                                class="maint-tag">Cotización</span></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section id="contacto-limpieza" class="py-sec" style="background:var(--cream);">
            <div class="wrap px-main" style="text-align:center;max-width:720px;">
                <div class="eyebrow sr" style="justify-content:center;"><span class="t-label"
                        style="color:var(--amber);">Espacios impecables</span></div>
                <h2 class="f-display t-section sr d1" style="color:var(--coal);margin-bottom:22px;">
                    ¿LISTO PARA<br />BRILLAR?
                </h2>
                <p class="sr d2"
                    style="color:#5A5650;font-size:.97rem;font-weight:300;line-height:1.8;margin-bottom:40px;">
                    Solicita una cotización para nuestros servicios de limpieza especializada. Evaluamos tu espacio y te
                    presentamos una propuesta a la medida.
                </p>
                <div class="sr d3" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
                    <NuxtLink to="/contacto" class="btn-amber">
                        Solicitar cotización
                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round">
                            <line x1="3" y1="9" x2="15" y2="9" />
                            <polyline points="10 4 15 9 10 14" />
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="/" class="btn-outline" style="color:var(--coal);border-color:rgba(12,12,10,.22);">
                        Volver al inicio</NuxtLink>
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
    title: 'Servicios de Limpieza — Pacifica Construcción y Mantenimiento',
    meta: [
        { name: 'description', content: 'Servicios integrales de limpieza especializada en Baja California. Hidrolavado, limpieza residencial, cuidado de textiles, mantenimiento de superficies y limpieza de ventanas en altura.' }
    ]
})

onMounted(() => {
    const ro = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    document.querySelectorAll('.sr, .sr-left, .sr-right').forEach(el => ro.observe(el))
})
</script>
