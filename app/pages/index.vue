<template>
  <div>
    <SectionHero />
    <SectionNosotros />
    <TheMarquee />
    <SectionServicios />
    <SectionFacility />
    <SectionBlinaje />
    <SectionPortafolio />
    <SectionPorque />
    <SectionContacto />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

useHead({
  title: 'Pacifica Construcción y Mantenimiento — Construido con propósito.',
  meta: [
    { name: 'description', content: 'Soluciones integrales de construcción en Baja California. Planeación, obra y mantenimiento de instalaciones. Tijuana y Ensenada.' }
  ]
})

onMounted(() => {
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  document.querySelectorAll('.sr, .sr-left, .sr-right').forEach(el => ro.observe(el))
})
</script>
