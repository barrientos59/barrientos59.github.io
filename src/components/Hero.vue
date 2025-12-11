<template>
  <section id="hero" class="min-vh-100 d-flex align-items-center bg-dark text-light">
    <div class="container">
      <div class="row align-items-center">
        <!-- Columna Izquierda: Texto -->
        <div class="col-md-7">
          <transition enter-active-class="animate__animated animate__fadeInLeft" appear>
            <div>
              <h1 class="display-4 fw-bold mb-3">
                Hola, soy <span class="text-info">Mario Barrientos</span>
              </h1>
              <p class="lead mb-4">
                Soy un <strong>Desarrollador Full-Stack</strong> especializado en
                <strong>Java</strong>, <strong>JavaScript</strong> y <strong>Vue.js</strong>.
                Me apasiona crear aplicaciones modernas, fluidas y con código limpio,
                aplicando buenas prácticas y arquitectura escalable.
              </p>
              <!-- Botones de acción -->
              <div class="btn-group mt-3" role="group" aria-label="Acciones principales">
                <button
                  type="button"
                  class="btn btn-info btn-lg px-4 fw-semibold"
                  @click="scrollToSection('projects', $event)"
                >
                  🚀 Ver proyectos
                </button>
                <button
                  type="button"
                  class="btn btn-outline-info btn-lg px-4 fw-semibold"
                  @click="scrollToSection('contact', $event)"
                >
                  ✉️ Contactar
                </button>
              </div>
            </div>
          </transition>
        </div>
        <!-- Columna Derecha: Foto -->
        <div class="col-md-5 text-center mt-4 mt-md-0">
          <div class="position-relative d-inline-block">
            <img
              src="/perfil.png"
              alt="Foto de perfil"
              class="rounded-circle img-fluid border border-3 border-info shadow-lg p-1 bg-dark position-relative"
              :style="photoStyle"
              @mouseenter="hover = true"
              @mouseleave="hover = false"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Estado para el efecto hover en la foto
const hover = ref(false);

// Estilos computados para la foto de perfil
const photoStyle = computed(() => ({
  maxWidth: "230px",
  transform: hover.value
    ? "scale(1.06) translateY(-4px)"
    : "scale(1) translateY(0)",
  transition: "transform 0.35s ease-out",
}));

// Scroll suave a la sección indicada
const scrollToSection = (sectionId: string, event: Event) => {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (!section) return;
  const y = section.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
};
</script>