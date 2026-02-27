<template>
  <div>
    <!-- The padding-top is necessary to accommodate the sticky navbar from the 'page' layout -->
    <div style="padding-top: 60px;">
      <SectionContacto />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

definePageMeta({
  layout: 'page'
})

useHead({
  title: 'Contacto — Pacifica Construcción y Mantenimiento',
  meta: [
    { name: 'description', content: 'Contáctenos para iniciar su proyecto de construcción, diseño arquitectónico o mantenimiento corporativo en Baja California.' }
  ]
})

onMounted(() => {
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  document.querySelectorAll('.sr, .sr-left, .sr-right').forEach(el => ro.observe(el))
})
</script>
