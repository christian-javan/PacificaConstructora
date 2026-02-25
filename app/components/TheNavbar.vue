<template>
  <nav id="navbar" ref="navbarRef">
    <a href="#inicio" class="nav-logo">
      <div class="nav-logo-mark"></div>
      <span class="nav-logo-text">Pacifica Constructora</span>
    </a>

    <div class="nav-links">
      <a href="#nosotros"      class="nav-link">Nosotros</a>
      <a href="#servicios"     class="nav-link">Servicios</a>
      <a href="#mantenimiento" class="nav-link">Facility</a>
      <a href="#blindaje"      class="nav-link">Plan Blindaje</a>
      <a href="#portafolio"    class="nav-link">Proyectos</a>
      <a href="#contacto"      class="nav-link">Contacto</a>
    </div>

    <a href="#contacto" class="nav-cta nav-cta-desk">Iniciar proyecto</a>
    <button class="hamburger" id="hamburger" aria-label="Abrir menú" @click="toggleMob">
      <span ref="s1"></span>
      <span ref="s2"></span>
      <span ref="s3"></span>
    </button>
  </nav>

  <!-- Mobile menu -->
  <div id="mob-menu" :class="{ open: mobOpen }">
    <a href="#nosotros"      @click="closeMob">Nosotros</a>
    <a href="#servicios"     @click="closeMob">Servicios</a>
    <a href="#mantenimiento" @click="closeMob">Facility</a>
    <a href="#blindaje"      @click="closeMob">Plan Blindaje</a>
    <a href="#portafolio"    @click="closeMob">Proyectos</a>
    <a href="#contacto"      @click="closeMob" style="color:var(--amber)">Contacto →</a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navbarRef = ref(null)
const mobOpen   = ref(false)
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
    s2.value.style.opacity   = mobOpen.value ? '0' : '1'
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
