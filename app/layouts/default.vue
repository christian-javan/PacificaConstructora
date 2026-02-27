<template>
  <div class="layout-default">
    <TheNavbar class="static-header" />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
:deep(#navbar) {
  /* position fixed lets it sit over the hero section */
  position: fixed !important;
  top: 0;
  width: 100%;
  background: transparent; /* transparent initial state to see hero */
}

:deep(#navbar .nav-logo-img) {
  transition: height 0.45s ease;
}

:deep(#navbar.scrolled .nav-logo-img) {
  height: 36px;
}

:deep(#navbar.scrolled) {
  padding: 12px 56px;
  background: rgba(12, 12, 10, .93); /* Dark blur on scroll */
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

@media (max-width: 768px) {
  :deep(#navbar.scrolled) {
    padding: 12px 24px;
  }
}
</style>
