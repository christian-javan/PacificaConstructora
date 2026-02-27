<template>
  <footer id="footer">
    <div class="footer-inner">
      <div class="footer-brand-col">
        <NuxtLink to="/" class="footer-logo-link">
          <img src="/imagenes/pacifica-construccion-y-mantenimiento-logo.webp" alt="Pacifica Construcción y Mantenimiento Logo" class="footer-logo-img" />
        </NuxtLink>
        <p class="footer-desc">Construido con propósito. Soluciones integrales end-to-end en Baja California desde hace más de 8 años.</p>
        <div class="footer-socials">
          <a href="#" class="f-social" aria-label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="var(--text-muted)" stroke="none"/></svg>
          </a>
          <a href="#" class="f-social" aria-label="Facebook">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.8" stroke-linecap="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" class="f-social" aria-label="LinkedIn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.8" stroke-linecap="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" class="f-social" aria-label="WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.8" stroke-linecap="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <div class="f-col-title">Servicios</div>
        <ul class="f-links">
          <li><NuxtLink to="/diseno">Diseño Arquitectónico</NuxtLink></li>
          <li><NuxtLink to="/construccion">Construcción</NuxtLink></li>
          <li><NuxtLink to="/acabados">Acabados Premium</NuxtLink></li>
          <li><NuxtLink to="/plan-blindaje">Plan Blindaje</NuxtLink></li>
          <li><NuxtLink to="/bienes-raices">Bienes Raíces</NuxtLink></li>
          <li><NuxtLink to="/venta-de-propiedades">Venta Propiedades</NuxtLink></li>
          <li><NuxtLink to="/asesoria-financiamiento-construccion">Financiamiento</NuxtLink></li>
        </ul>
      </div>
      <div>
        <div class="f-col-title">Empresa</div>
        <ul class="f-links">
          <li><NuxtLink to="/#nosotros">Nosotros</NuxtLink></li>
          <li><NuxtLink to="/#portafolio">Proyectos</NuxtLink></li>
          <li><NuxtLink to="/#porque">Por qué Pacifica</NuxtLink></li>
          <li><NuxtLink to="/#contacto">Contacto</NuxtLink></li>
        </ul>
      </div>
      <div>
        <div class="f-col-title">Contacto</div>
        <ul class="f-links">
          <li><a href="tel:+526641234567">+52 (664) 123-4567</a></li>
          <li><a href="mailto:contacto@pacificabc.mx">contacto@pacificabc.mx</a></li>
          <li style="color:var(--text-muted);font-size:.84rem;font-weight:300;margin-top:4px;">Tijuana, Baja California</li>
          <li style="color:var(--text-muted);font-size:.84rem;font-weight:300;">Ensenada, Baja California</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="f-copy">© 2025 Pacifica Construcción y Mantenimiento. Todos los derechos reservados.</span>
      <span class="f-copy" style="color:rgba(144,136,128,.35);letter-spacing:.1em;">CONSTRUIDO CON PROPÓSITO.</span>
    </div>
  </footer>
</template>
