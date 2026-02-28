<template>
  <section id="contacto" class="py-sec">
    <div class="wrap px-main">
      <div class="contact-grid">

        <!-- Info -->
        <div class="sr-left">
          <div class="eyebrow"><span class="t-label">Hablemos</span></div>
          <h2 class="f-display t-section" style="color:var(--coal);margin-bottom:22px;">
            ¿TIENES UN<br />PROYECTO<br />EN MENTE?
          </h2>
          <p style="color:#5A5650;font-size:.97rem;font-weight:300;line-height:1.8;margin-bottom:44px;">
            Cuéntenos su visión sin compromisos. Nuestro equipo responde con una propuesta técnica honesta y un
            presupuesto detallado. Así de directo.
          </p>

          <div class="ci-row">
            <div class="ci-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--coal)"
                stroke-width="2" stroke-linecap="round">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.53A2 2 0 0 1 3.6 1.37h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg></div>
            <div>
              <div class="ci-lbl">Teléfono</div>
              <div class="ci-val">+52 (664) 123-4567</div>
            </div>
          </div>
          <div class="ci-row">
            <div class="ci-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--coal)"
                stroke-width="2" stroke-linecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg></div>
            <div>
              <div class="ci-lbl">Email</div>
              <div class="ci-val">contacto@pacificabc.mx</div>
            </div>
          </div>
          <div class="ci-row">
            <div class="ci-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--coal)"
                stroke-width="2" stroke-linecap="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg></div>
            <div>
              <div class="ci-lbl">Cobertura</div>
              <div class="ci-val">Tijuana, BC</div>
            </div>
          </div>

          <div class="quote-block">
            <div class="quote-text">"CONSTRUIR BIEN NO ES UNA OPCIÓN — ES LA ÚNICA FORMA QUE CONOCEMOS."</div>
            <div class="quote-attr">— Fundador, Pacifica Construcción y Mantenimiento</div>
          </div>
        </div>

        <!-- Form -->
        <div class="form-wrap sr-right">
          <div class="form-head-title">CUÉNTENOS SU PROYECTO</div>
          <div class="form-head-sub">Respondemos en menos de 24 horas hábiles.</div>

          <form @submit.prevent="handleForm">
            <div class="f-row-2">
              <div class="f-group">
                <label class="f-lbl">Nombre</label>
                <input type="text" class="f-input" placeholder="Su nombre" required />
              </div>
              <div class="f-group">
                <label class="f-lbl">Teléfono</label>
                <input type="tel" class="f-input" placeholder="+52 664 000 0000" />
              </div>
            </div>
            <div class="f-group">
              <label class="f-lbl">Correo electrónico</label>
              <input type="email" class="f-input" placeholder="correo@empresa.com" required />
            </div>
            <div class="f-group">
              <label class="f-lbl">Tipo de proyecto</label>
              <select class="f-input" style="color:rgba(240,235,227,.6);cursor:pointer;">
                <option value="" disabled selected>Seleccione una opción</option>
                <option>Planeación / Pre-construcción</option>
                <option>Construcción nueva</option>
                <option>Remodelación / Renovación</option>
                <option>Facility Services / Mantenimiento</option>
                <option>Otro</option>
              </select>
            </div>
            <div class="f-group">
              <label class="f-lbl">Describa su proyecto</label>
              <textarea class="f-input"
                placeholder="Tipo de obra, ubicación, alcance aproximado y cualquier detalle relevante..."></textarea>
            </div>
            <button type="submit" id="f-btn" class="f-submit" :disabled="submitted"
              :style="submitted ? 'opacity:.55' : ''">
              <span v-if="!submitted">Enviar mensaje</span>
              <span v-else>Enviando...</span>
              <svg v-if="!submitted" width="15" height="15" viewBox="0 0 18 18" fill="none" stroke="currentColor"
                stroke-width="2.2" stroke-linecap="round">
                <line x1="3" y1="9" x2="15" y2="9" />
                <polyline points="10 4 15 9 10 14" />
              </svg>
            </button>
            <div class="f-success" :style="showSuccess ? 'display:block' : ''">✓ Mensaje recibido — le contactamos
              pronto.</div>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const submitted = ref(false)
const showSuccess = ref(false)

function handleForm() {
  submitted.value = true
  setTimeout(() => {
    showSuccess.value = true
  }, 1400)
}
</script>
