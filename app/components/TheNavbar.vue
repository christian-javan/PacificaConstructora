<template>
  <nav id="navbar" ref="navbarRef">
    <NuxtLink to="/" class="nav-logo">
      <img src="/imagenes/pacifica-construccion-y-mantenimiento-logo-header.webp"
        alt="Pacifica Construcción y Mantenimiento Logo" class="nav-logo-img" />
    </NuxtLink>

    <div class="nav-links">
      <NuxtLink to="/diseno" class="nav-link">Diseño</NuxtLink>
      <NuxtLink to="/construccion" class="nav-link">Construcción</NuxtLink>
      <NuxtLink to="/acabados" class="nav-link">Acabados</NuxtLink>
      <NuxtLink to="/bienes-raices" class="nav-link">Bienes Raíces</NuxtLink>
      <NuxtLink to="/venta-de-propiedades" class="nav-link">Propiedades</NuxtLink>
      <NuxtLink to="/plan-blindaje" class="nav-link">Plan Blindaje</NuxtLink>
      <NuxtLink to="/servicios-limpieza" class="nav-link">Limpieza</NuxtLink>
      <NuxtLink to="/asesoria-financiamiento-construccion" class="nav-link">Asesoría</NuxtLink>
    </div>

    <NuxtLink to="/#contacto" class="nav-cta nav-cta-desk">Iniciar proyecto</NuxtLink>
    <button class="hamburger" id="hamburger" aria-label="Abrir menú" @click="toggleMob">
      <span ref="s1"></span>
      <span ref="s2"></span>
      <span ref="s3"></span>
    </button>
  </nav>

  <!-- Mobile menu -->
  <div id="mob-menu" :class="{ open: mobOpen }">
    <NuxtLink to="/diseno" @click="closeMob">Diseño</NuxtLink>
    <NuxtLink to="/construccion" @click="closeMob">Construcción</NuxtLink>
    <NuxtLink to="/acabados" @click="closeMob">Acabados</NuxtLink>
    <NuxtLink to="/bienes-raices" @click="closeMob">Bienes Raíces</NuxtLink>
    <NuxtLink to="/venta-de-propiedades" @click="closeMob">Propiedades</NuxtLink>
    <NuxtLink to="/plan-blindaje" @click="closeMob">Plan Blindaje</NuxtLink>
    <NuxtLink to="/servicios-limpieza" @click="closeMob">Limpieza</NuxtLink>
    <NuxtLink to="/asesoria-financiamiento-construccion" @click="closeMob">Asesoría</NuxtLink>
    <NuxtLink to="/#contacto" @click="closeMob" style="color:var(--amber)">Contacto →</NuxtLink>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navbarRef = ref(null)
const mobOpen = ref(false)
const s1 = ref(null)
const s2 = ref(null)
const s3 = ref(null)

function onScroll() {
  if (navbarRef.value) {
    navbarRef.value.classList.toggle('scrolled', window.scrollY > 60)
  }
}

function toggleMob() {
  mobOpen.value = !mobOpen.value
  document.body.style.overflow = mobOpen.value ? 'hidden' : ''
  if (s1.value && s2.value && s3.value) {
    s1.value.style.transform = mobOpen.value ? 'rotate(45deg) translate(5px,5px)' : ''
    s2.value.style.opacity = mobOpen.value ? '0' : '1'
    s3.value.style.transform = mobOpen.value ? 'rotate(-45deg) translate(5px,-5px)' : ''
  }
}

function closeMob() {
  mobOpen.value = false
  document.body.style.overflow = ''
  if (s1.value && s2.value && s3.value) {
    s1.value.style.transform = ''
    s2.value.style.opacity = '1'
    s3.value.style.transform = ''
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
