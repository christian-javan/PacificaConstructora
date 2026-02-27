<template>
  <div class="layout-page">
    <TheNavbar class="static-header" />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
:deep(#navbar) {
  /* position sticky lets it sit above the main content in document flow, preventing overlap */
  position: sticky !important;
  top: 0;
  width: 100%;
  background: var(--coal) !important; /* solid color so it separates nicely from hero */
  z-index: 100;
}

:deep(#navbar .nav-logo-img) {
  transition: height 0.45s ease;
}

:deep(#navbar.scrolled .nav-logo-img) {
  height: 36px;
}

:deep(#navbar.scrolled) {
  padding: 12px 56px;
  background: rgba(12, 12, 10, .93) !important; /* Dark blur on scroll */
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

@media (max-width: 768px) {
  :deep(#navbar.scrolled) {
    padding: 12px 24px;
  }
}
</style>
