<template>
  <div class="" >
    <div class="grid grid-cols-3 text-xs md:grid-cols-5 mb-6 gap-6" v-for="(packages, index) in listPackages" :key="index">
      <template v-for="(destination, index) in p = packages.paquetes_destinos" :key="destination.id">
        <template
            v-for="(destino, index) in destinos"
            :key="destino.id"
        >
          <div v-if="destination.destinos.id === destino.id && destino.hoteles && destino.hoteles.length > 0" >
            <button class="relative" @click="selectedDestino = destino">
              <img :src="destination.destinos.imagen" alt="" class=" w-full object-cover rounded-xl shadow-xl hotel-img grayscale hover:grayscale-0 transition duration-300" :class="{ active: selectedDestino.id === destino.id }">
              <div class="absolute inset-x-0 bottom-0 p-3 text-white bg-gradient-to-t from-gray-800 rounded-b-xl">
                {{destination.destinos.nombre}}
              </div>
            </button>
          </div>
        </template>
      </template>
    </div>

    <div class="relative">
      <carousel  ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">
        <slide class="" v-for="hotel in selectedDestino.hoteles">
          <div class="grid grid-cols-12 gap-4 items-center mb-4 bg-white w-full">
            <div class="col-span-12 md:col-span-6">
              <img :src="hotel.imagen" alt="" class="object-cover w-full h-full">
            </div>
            <div class="col-span-12 md:col-span-6 p-6">
              <h3 class="font-semibold my-4">{{hotel.nombre}}</h3>

              <div class="font-light" v-html="hotel.descripcion"></div>
            </div>
          </div>
        </slide>
      </carousel>
      <div class="flex justify-end gap-2">
        <button class="border p-2  border-gray-500 focus:bg-gray-800 focus:text-white" @click="prevSlide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button class="border p-2  border-gray-500 focus:bg-gray-800 focus:text-white" @click="nextSlide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {Carousel, Slide} from "vue3-carousel";

    const items = ref([
      {id: 1, image: 'ruta-de-imagen1.jpg', description: 'Descripción 1'},
      {id: 2, image: 'ruta-de-imagen2.jpg', description: 'Descripción 2'},
      {id: 3, image: 'ruta-de-imagen3.jpg', description: 'Descripción 3'},
      {id: 4, image: 'ruta-de-imagen4.jpg', description: 'Descripción 4'},
      {id: 5, image: 'ruta-de-imagen5.jpg', description: 'Descripción 5'},
    ]);

const destinos = ref([]) // Array para almacenar los destinos y hoteles
const selectedDestino = ref([])
const props = defineProps<{
  listPackages: Array<{ url: string, [key: string]: any }>
}>();
const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
}

watch(
    () => selectedDestino.value,
    () => {
      if (carouselRef.value) {
        carouselRef.value.slideTo(1); // Reinicia el carrusel al primer slide
      }
    }
);
    const carouselRef = ref();

    const prevSlide = () => {
      carouselRef.value.prev();
    }

    const nextSlide = () => {
      carouselRef.value.next();
    }

    onMounted(async ()=>{
      try {
        // Solicita los destinos y hoteles al backend
        const response = await fetch('https://api.machupicchu.company/api/destinations-hotels')
        const data = await response.json()
        destinos.value = data

        // Selecciona el primer destino por defecto
        if (data.length > 0) {
          selectedDestino.value = data[0]
        }
      } catch (error) {
        console.error('Error fetching destinations and hotels:', error)
      }
    })

</script>