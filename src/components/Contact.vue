<template>
  <!-- CONTACTO -->
  <section id="contact" class="contact-section py-5">
    <div class="container">
      <h2 class="mb-5 text-center fw-bold contact-title">
        Contacto
      </h2>

      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-9">
          <div class="contact-card shadow-lg rounded-4 border-0 p-4 p-md-5 bg-white">

            <!-- Email -->
            <a
              href="mailto:barrientospereira59@gmail.com"
              class="contact-item d-flex align-items-center text-decoration-none"
            >
              <div class="contact-icon me-3 me-md-4">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div class="flex-grow-1">
                <h5 class="mb-0 fw-semibold text-dark">Correo electrónico</h5>
                <small class="text-muted d-block">
                  barrientospereira59@gmail.com
                </small>
              </div>
            </a>

            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/barrientosmario/"
              target="_blank"
              class="contact-item d-flex align-items-center text-decoration-none"
            >
              <div class="contact-icon me-3 me-md-4 linkedin-icon">
                <i class="bi bi-linkedin"></i>
              </div>
              <div class="flex-grow-1">
                <h5 class="mb-0 fw-semibold text-dark">LinkedIn</h5>
                <small class="text-muted d-block">
                  barrientosmario
                </small>
              </div>
            </a>

            <!-- GitHub -->
            <a
              href="https://github.com/barrientos59"
              target="_blank"
              class="contact-item d-flex align-items-center text-decoration-none"
            >
              <div class="contact-icon me-3 me-md-4 github-icon">
                <i class="bi bi-github"></i>
              </div>
              <div class="flex-grow-1">
                <h5 class="mb-0 fw-semibold text-dark">GitHub</h5>
                <small class="text-muted d-block">
                  github.com/barrientos59
                </small>
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, #f5f7fb 0%, #e9edf5 100%);
}

.contact-title {
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 1.8rem;
}

.contact-card {
  backdrop-filter: blur(8px);
}

.contact-item {
  padding: 1rem 0;
  border-bottom: 1px solid #f0f1f5;
  transition: background-color 0.2s ease, transform 0.15s ease,
    box-shadow 0.2s ease;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-item:hover {
  background-color: #f8f9ff;
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}

.contact-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #e7f1ff;
  color: #0d6efd;
  font-size: 1.4rem;
}

/* Colores específicos por marca */
.linkedin-icon {
  background-color: #e5f1ff;
  color: #0a66c2;
}

.github-icon {
  background-color: #f2f2f2;
  color: #24292f;
}
</style>
