<template>
  <section id="about" class="py-5 bg-light text-dark">
    <div class="container">
      <h2 class="mb-4 text-center">Sobre mí</h2>
      <transition appear enter-active-class="animate__animated animate__fadeInUp">
        <div v-if="isVisible" class="row g-4 align-items-stretch">
          <!-- ===================== COLUMNA IZQUIERDA: QUIÉN SOY ===================== -->
          <div class="col-lg-6">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <!-- CABECERA CON FOTO DE PERFIL (ESPACIADA) -->
                <div class="d-flex align-items-center mb-4">
                  <!-- FOTO DE PERFIL -->
                  <div
                    class="rounded-circle overflow-hidden border border-info border-2"
                    style="width: 70px; height: 70px; margin-right: 2rem;"
                  >
                    <img
                      src="/public/perfil.png"
                      alt="Foto de perfil"
                      class="img-fluid w-100 h-100"
                      style="object-fit: cover;"
                    />
                  </div>

                  <!-- TEXTO A LA DERECHA -->
                  <div class="text-start">
                    <div class="text-uppercase small text-muted mb-1">
                      ¿Quién soy?
                    </div>
                    <h5 class="card-title mb-0 fw-bold">
                      Desarrollador Full-Stack
                    </h5>
                  </div>
                </div>

                <!-- TEXTO -->
                <p class="card-text fs-6 mb-3">
                  Soy desarrollador <strong>full-stack</strong> con experiencia en
                  <strong>Java, Spring Boot, Vue y Angular</strong>. Me gusta crear
                  aplicaciones claras, rápidas y fáciles de mantener.
                </p>

                <p class="card-text fs-6 mb-4">
                  Me encanta trabajar en proyectos donde se cuida el
                  <strong>detalle técnico</strong> y la
                  <strong>experiencia de usuario</strong>, especialmente en el ámbito del
                  <strong>baloncesto</strong> y las
                  <strong>estadísticas deportivas</strong>.
                </p>
              </div>
            </div>
          </div>

          <!-- ===================== COLUMNA DERECHA: RESUMEN + CÓMO TRABAJO ===================== -->
          <div class="col-lg-6">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title mb-3">En resumen</h5>

                <!-- Mini-cards horizontales -->
                <div class="row g-2 mb-4">
                  <!-- Item 1 -->
                  <div class="col-12">
                    <div class="d-flex p-3 border rounded-3 bg-light">
                      <div class="fs-2 me-3">💻</div>
                      <div>
                        <div class="fw-semibold fs-6">Perfil Full-Stack</div>
                        <div class="text-muted small">
                          Trabajo tanto en frontend como en backend.
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Item 2 -->
                  <div class="col-12">
                    <div class="d-flex p-3 border rounded-3 bg-light">
                      <div class="fs-2 me-3">📁</div>
                      <div>
                        <div class="fw-semibold fs-6">Proyectos reales</div>
                        <div class="text-muted small">
                          He desarrollado aplicaciones completas en entornos reales.
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Item 3 -->
                  <div class="col-12">
                    <div class="d-flex p-3 border rounded-3 bg-light">
                      <div class="fs-2 me-3">⚙️</div>
                      <div>
                        <div class="fw-semibold fs-6">Calidad de código</div>
                        <div class="text-muted small">
                          Priorizo código limpio, mantenible y escalable.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- NUEVO BLOQUE: CÓMO TRABAJO -->
                <h6 class="mb-2">Cómo trabajo</h6>
                <ul class="list-unstyled mb-4 fs-6">
                  <li class="mb-1">🤝 Me gusta colaborar y compartir conocimiento en equipo.</li>
                  <li class="mb-1">🧠 Busco siempre entender bien el problema antes de escribir código.</li>
                  <li class="mb-1">🔁 Valoro la mejora continua y el feedback.</li>
                  <li class="mb-1">📈 Me inspiran los proyectos con impacto real en personas o equipos.</li>
                </ul>

                <div class="mt-auto">
                  <small class="text-muted">
                    Siempre abierto a seguir aprendiendo y asumir nuevos retos.
                  </small>
                </div>
              </div>
            </div>
          </div>
          <!-- ========================================================= -->
        </div>
      </transition>
    </div>
  </section>
<section id="skills" class="py-5 bg-white text-dark">
  <div class="container">
    <h2 class="mb-4 text-center">Skills & Tecnologías</h2>

    <div class="row g-4">
      
      <!-- FRONTEND -->
      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body">
            <h5 class="card-title mb-3">Frontend</h5>
            <p class="small text-muted">Interfaces modernas con foco en UX/UI.</p>

            <div class="d-flex flex-wrap gap-2 mt-3">

              <button class="btn btn-outline-info btn-sm rounded-pill px-3 d-flex align-items-center gap-3">
                <span><i class="bi bi-filetype-vue" style="color:#42B883; font-size:18px"></i></span>
                <span>Vue</span>
              </button>

              <button class="btn btn-outline-info btn-sm rounded-pill px-3 d-flex align-items-center gap-3">
                <span><i class="bi bi-filetype-jsx" style="color:#DD0031; font-size:18px"></i></span>
                <span>Angular</span>
              </button>

              <button class="btn btn-outline-info btn-sm rounded-pill px-3 d-flex align-items-center gap-3">
                <span><i class="bi bi-bootstrap" style="color:#7952B3; font-size:18px"></i></span>
                <span>Bootstrap</span>
              </button>

              <button class="btn btn-outline-info btn-sm rounded-pill px-3 d-flex align-items-center gap-3">
                <span><i class="bi bi-filetype-html" style="color:#E34F26; font-size:18px"></i></span>
                <span>HTML & CSS</span>
              </button>

            </div>
          </div>
        </div>
      </div>

      <!-- BACKEND -->
      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body">
            <h5 class="card-title mb-3">Backend</h5>
            <p class="small text-muted">APIs, lógica de negocio y bases de datos.</p>

            <div class="d-flex flex-wrap gap-2 mt-3">

              <button class="btn btn-outline-info btn-sm rounded-pill px-3 d-flex align-items-center gap-3">
                <span><i class="bi bi-cup-hot" style="color:#007396; font-size:18px"></i></span>
                <span>Java</span>
              </button>

              <button class="btn btn-outline-info btn-sm rounded-pill px-3 d-flex align-items-center gap-3">
                <span><i class="bi bi-gear-wide-connected" style="color:#6DB33F; font-size:18px"></i></span>
                <span>Spring Boot</span>
              </button>

              <button class="btn btn-outline-info btn-sm rounded-pill px-3 d-flex align-items-center gap-3">
                <span><i class="bi bi-cloud-fill" style="color:#FFCA28; font-size:18px"></i></span>
                <span>Firebase</span>
              </button>

              <button class="btn btn-outline-info btn-sm rounded-pill px-3 d-flex align-items-center gap-3">
                <span><i class="bi bi-database-fill" style="color:#336791; font-size:18px"></i></span>
                <span>SQL / Firestore</span>
              </button>

            </div>
          </div>
        </div>
      </div>

      <!-- OTRAS HABILIDADES -->
      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body">
            <h5 class="card-title mb-3">Otras habilidades</h5>
            <p class="small text-muted">Metodología, hábitos y forma de trabajar.</p>

            <div class="d-flex flex-wrap gap-2 mt-3">

              <button class="btn btn-outline-info btn-sm rounded-pill px-3 d-flex align-items-center gap-3">
                <span><i class="bi bi-people-fill text-primary" style="font-size:18px"></i></span>
                <span>Trabajo en equipo</span>
              </button>

              <button class="btn btn-outline-info btn-sm rounded-pill px-3 d-flex align-items-center gap-3">
                <span><i class="bi bi-lightbulb-fill" style="color:#f7dc11; font-size:18px"></i></span>
                <span>Resolución de problemas</span>
              </button>

              <button class="btn btn-outline-info btn-sm rounded-pill px-3 d-flex align-items-center gap-3">
                <span><i class="bi bi-arrow-repeat text-info" style="font-size:18px"></i></span>
                <span>Mejora continua</span>
              </button>

              <button class="btn btn-outline-info btn-sm rounded-pill px-3 d-flex align-items-center gap-3">
                <span><i class="bi bi-trophy-fill text-warning" style="font-size:18px"></i></span>
                <span>Proyectos deportivos</span>
              </button>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>




</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  const el = document.getElementById("about");
  if (!el || typeof IntersectionObserver === "undefined") {
    isVisible.value = true;
    return;
  }
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry && entry.isIntersecting) {
        isVisible.value = true;
        observer?.disconnect(); // solo animar la primera vez
      }
    },
    { threshold: 0.2 }
  );
  observer.observe(el);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>
