<template>
  <section id="portafolio" class="py-sec">
    <div class="wrap px-main">
      <div class="port-header">
        <div>
          <div class="eyebrow sr"><span class="t-label">Proyectos</span></div>
          <h2 class="f-display t-section sr d1" style="color:var(--coal);">
            EL TRABAJO<br />HABLA SOLO.
          </h2>
        </div>
        <div class="sr-right" style="align-self:end;text-align:right;">
          <p style="color:#5A5650;font-size:.95rem;font-weight:300;line-height:1.75;margin-bottom:22px;">Cada proyecto
            en nuestro portafolio refleja el compromiso de entrega que prometemos desde el día uno. Residencial,
            comercial, corporativo y hospitalidad en toda Baja California.</p>
          <NuxtLink to="/contacto" class="btn-amber">
            Iniciar proyecto
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round">
              <line x1="3" y1="9" x2="15" y2="9" />
              <polyline points="10 4 15 9 10 14" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="wrap" style="padding:0 56px;">
      <div class="port-grid sr">
        <div class="port-item p1">
          <img src="/imagenes/trabajos-2.webp" alt="Residencia Serrana" />
          <div class="port-overlay">
            <div class="port-cat">Residencial · Tijuana</div>
            <div class="port-name">RESIDENCIA SERRANA</div>
          </div>
        </div>
        <div class="port-item p2">
          <img src="/imagenes/trabajos-5.webp" alt="Corporativo" />
          <div class="port-overlay">
            <div class="port-cat">Corporativo · Tijuana</div>
            <div class="port-name">SUITE EJECUTIVA ZONA RÍO</div>
          </div>
        </div>
        <div class="port-item p3">
          <img src="/imagenes/trabajos-4.webp" alt="Villa" />
          <div class="port-overlay">
            <div class="port-cat">Residencial</div>
            <div class="port-name">VILLA DEL PACÍFICO</div>
          </div>
        </div>
        <div class="port-item p4">
          <img src="/imagenes/trabajos-3.webp" alt="Casa premium" />
          <div class="port-overlay">
            <div class="port-cat">Residencial · Tijuana</div>
            <div class="port-name">CASA CAÑÓN</div>
          </div>
        </div>
        <div class="port-item p5">
          <img src="/imagenes/trabajos-2.webp" alt="Plaza comercial" />
          <div class="port-overlay">
            <div class="port-cat">Comercial</div>
            <div class="port-name">PLAZA PUERTO</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
