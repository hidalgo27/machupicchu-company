<script setup lang="ts">
const { $gsap } = useNuxtApp()


const props = defineProps<{
  listPackages: Array<{ url: string, [key: string]: any }>
}>();

const days = ref([
  { title: 'Welcome to Lima, Peru', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Peruvian Biodiversity Food Tour', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { title: 'Flight to Cusco from Lima', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  // Más días...
]);

const openIndexes = ref<number[]>([0]); // Abre solo el primer día al cargar
const contentRefs = ref<HTMLElement[]>([]); // Almacena referencias de contenido

// Establece referencias para cada contenido
const setContentRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    contentRefs.value[index] = el;

    // Si el día está abierto al cargar, ajustamos la altura a "auto" para que se vea completo
    if (isOpen(index)) {
      el.style.height = 'auto';
    } else {
      el.style.height = '0';
    }
  }
};

// Comprueba si un día está abierto
const isOpen = (index: number) => openIndexes.value.includes(index);

// Función para expandir todo
const expandAll = () => {
  openIndexes.value = props.listPackages.flatMap((packageData) => packageData.paquete_itinerario.map((_, i) => i)); // Abrimos todos los días

  nextTick(() => {
    contentRefs.value.forEach((ref) => {
      if (ref) {
        const fullHeight = ref.scrollHeight;
        $gsap.fromTo(ref, { height: 0, opacity: 0 }, { height: fullHeight, opacity: 1, duration: 0.5, ease: 'power2.inOut', onComplete() {
            ref.style.height = 'auto';
          }
        });
      }
    });
  });
};

// Función para contraer todo
const collapseAll = () => {
  contentRefs.value.forEach((ref) => {
    if (ref) {
      const fullHeight = ref.scrollHeight;
      $gsap.fromTo(ref, { height: fullHeight }, { height: 0, opacity: 0, duration: 0.5, ease: 'power2.inOut' });
    }
  });
  openIndexes.value = []; // Cerramos todos los días
};

// Animación de apertura/cierre con GSAP
const toggleWithGSAP = (index: number) => {
  const contentRef = contentRefs.value[index];

  if (!contentRef) {
    console.error(`Content ref for index ${index} not found`);
    return;
  }

  if (isOpen(index)) {
    const fullHeight = contentRef.scrollHeight; // Captura la altura completa actual
    $gsap.fromTo(contentRef, { height: fullHeight }, { height: 0, opacity: 0, duration: 0.5, ease: 'power2.inOut' });
    openIndexes.value = openIndexes.value.filter(i => i !== index);
  } else {
    const fullHeight = contentRef.scrollHeight; // Obtiene la altura completa del contenido
    $gsap.fromTo(contentRef, { height: 0, opacity: 0 }, { height: fullHeight, opacity: 1, duration: 0.5, ease: 'power2.inOut', onComplete() {
        contentRef.style.height = 'auto'; // Establece la altura a 'auto' después de la animación
      }
    });
    openIndexes.value.push(index);
  }
};
</script>

<template>

  <article class="my-12" id="itinerary" v-for="packages in listPackages" :key="packages.url">
    <h2 class="text-2xl font-bold mb-8">Itinerary</h2>
    <div class="mb-4 text-right">
      <button @click="expandAll" class="px-2 py-1 bg-primary text-white text-xs rounded mr-2">
        Expand all
      </button>
      <button @click="collapseAll" class="px-2 py-1 bg-tertiary text-xs text-white rounded">
        Collapse all
      </button>
    </div>

    <div class="w-full mx-auto relative">
      <!-- Ajuste en el bucle v-for -->
      <div v-for="(itinerary, index) in packages.paquete_itinerario" :key="index" class="flex item">
        <div class="relative w-20 text-center gap-12">
          <div class="absolute -z-10 left-1/2 top-0 bottom-0 border-l-2 border-dashed border-slate-300"></div>
          <div class="py-2 font-bold text-xs" :class="[currentItem == index ? 'text-secondary' : 'text-slate-500']">
            DAY <span class="rounded-full px-2 py-1 text-white" :class="{'bg-red-700': packages.duracion == index + 1, 'bg-primary': index + 1 ==  1, 'bg-gray-500': index + 1 > 1}">{{ index + 1 }}</span>
          </div>
        </div>

        <div class="space-y-2 w-full">
          <div>
            <button @click="toggleWithGSAP(index)" class="w-full text-left p-4 flex justify-between items-center hover:bg-gray-200">
              {{ itinerary.itinerarios.titulo }}
              <span>
                <svg v-if="isOpen(index)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </span>
            </button>

            <div :ref="el => setContentRef(el, index)" class="h-0 overflow-hidden" v-html="itinerary.itinerarios.resumen">
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>

</template>

<style scoped>

</style>