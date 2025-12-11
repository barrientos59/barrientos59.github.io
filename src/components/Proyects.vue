<template>
  <section id="projects" class="py-5 bg-white">
    <div class="container">
      <h2 class="mb-5 text-center fw-bold projects-title">
        Proyectos
      </h2>

      <BCardGroup deck class="d-flex justify-content-center flex-wrap gap-4">

        <!-- CARD 1: FANTASY BASKET -->
        <BCard
          title="Fantasy Basket"
          img-src="/fotofantasy.png"
          img-alt="Fantasy Basket"
          img-top
          tag="article"
          class="project-card"
        >
          <BCardText>
            Aplicación tipo Fantasy para una liga de baloncesto del club, con draft,
            equipos personalizados y puntuación automática tras cada partido.
          </BCardText>

          <div class="mt-3 d-flex flex-column gap-2">
            <BButton
              href="https://github.com/barrientos59/fantasy-backend"
              target="_blank"
              variant="primary"
              class="w-100 py-2 fw-semibold"
            >
              Código Backend
            </BButton>

            <BButton
              href="https://github.com/barrientos59/fantasy-frontend"
              target="_blank"
              variant="outline-primary"
              class="w-100 py-2 fw-semibold"
            >
              Código Frontend
            </BButton>
          </div>
        </BCard>

        <!-- CARD 2: BASKSTATS -->
        <BCard
          title="BaskStats"
          img-src="/fotobaskstats.png"
          img-alt="BaskStats"
          img-top
          tag="article"
          class="project-card"
        >
          <BCardText>
            Herramienta para registrar estadísticas de baloncesto en tiempo real:
            puntos, rebotes, asistencias y eficiencia global del equipo.
          </BCardText>

          <div class="mt-3 d-flex flex-column gap-2">
            <BButton
              href="https://github.com/barrientos59/BaskStats"
              target="_blank"
              variant="primary"
              class="w-100 py-2 fw-semibold"
            >
              Ver código
            </BButton>
          </div>
        </BCard>

        <!-- CARD 3: Gestión de Inventario -->
        <BCard
          title="Gestión de Inventario"
          img-src="/fotoinventario.png"
          img-alt="Gestión de Inventario"
          img-top
          tag="article"
          class="project-card"
        >
          <BCardText>
            Sistema para controlar productos, stock, movimientos de almacén y alertas
            de inventario bajo, con interfaz sencilla y moderna.
          </BCardText>

          <div class="mt-3 d-flex flex-column gap-2">
            <BButton
              href="https://github.com/barrientos59/inventory-backend"
              target="_blank"
              variant="primary"
              class="w-100 py-2 fw-semibold"
            >
              Código Backend
            </BButton>

            <BButton
              href="https://github.com/barrientos59/front-inventory"
              target="_blank"
              variant="outline-primary"
              class="w-100 py-2 fw-semibold"
            >
              Código Frontend
            </BButton>
          </div>
        </BCard>

      </BCardGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BCard, BCardText, BButton, BCardGroup } from 'bootstrap-vue-next';
</script>

<style scoped>
.projects-title {
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 1.9rem;
}

.project-card {
  max-width: 21rem;
  border-radius: 1.2rem;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.12);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
}

.project-card :deep(.card-img-top) {
  height: 190px;
  object-fit: cover;
}
</style>
