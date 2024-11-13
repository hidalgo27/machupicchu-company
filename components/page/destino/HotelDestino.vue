<template>
  <section class="">
    <div class="grid grid-cols-12">
      <div class="col-span-12 md:col-span-5 overflow-hidden h-[700px] 2xl:h-[900px]">
<!--        <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/slider/1709049548333Slider%20copia%203%20cusco_1709049549.jpg" class="parallax-image h-[900px] 2xl:h-[1200px] object-cover object-center w-full"></nuxt-img>-->






        <carousel  ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">
          <slide v-for="(hotel, index) in selectedDestino?.hoteles || []" :key="index">


            <div class="relative w-full h-full">
              <img :src="hotel.imagen" alt="" class="parallax-image object-cover h-[870px] 2xl:h-[1200px] object-center w-full">
              <div class="absolute inset-0 z-20 grid items-center md:p-32 ">
                <div class="backdrop-blur-lg bg-white/30 p-12 rounded-lg">
                  <div class="">
                    <h3 class="pb-6 font-semibold">{{hotel.nombre}}</h3>
                    <div class="font-light text-sm" v-html="hotel.descripcion"></div>
                  </div>
                </div>
              </div>

<!--                <div class="font-light" v-html="hotel.descripcion"></div>-->

            </div>

<!--            <div class="grid grid-cols-12 gap-4 items-center mb-4 bg-white w-full">-->
<!--              <div class="col-span-3 md:col-span-6">-->
<!--                <img :src="hotel.imagen" alt="" class="object-cover w-full h-full">-->
<!--              </div>-->
<!--              <div class="col-span-3 md:col-span-6 p-6">-->
<!--                <h3 class="font-semibold my-4">{{hotel.nombre}}</h3>-->
<!--                <div class="font-light" v-html="hotel.descripcion">-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
          </slide>
        </carousel>
      </div>
      <div class="col-span-12 md:col-span-7 grid items-center text-white bg-primary p-6 md:p-24">
        <div class="">
          <div class="border-title-sm mb-2"></div>
          <h2 class="text-3xl font-semibold mb-6">HOTELS</h2>
          <p class=" tracking-widest font-light 2xl:w-1/2">Machu Picchu Company works with the most exclusive and luxurious hotels in each city you visit on your trip to Peru. Whether you are in the majestic citadel of Machu Picchu, on the shores of Lake Titicaca, or in the Amazon Rainforest, the accommodations we provide to all our travelers are the most luxurious and comfortable you will find in the area. Visit each destination with the confidence of having a dream stay.</p>

<!--          <button class="btn-secondary mt-6">Get Started</button>-->


          <div class="flex flex-wrap mt-12 gap-6">
            <template v-for="(destino, index) in destinos" :key="destino.id">
              <template v-if="destino.hoteles && destino.hoteles.length > 0">
                <button class="relative " @click="selectedDestino = destino" :class="[ selectedDestino?.id === destino.id ? 'font-semibold text-secondary' : '']">
<!--                  <img-->
<!--                      :src="destino.imagen"-->
<!--                      alt=""-->
<!--                      class="w-full object-cover rounded-xl shadow-xl hotel-img grayscale hover:grayscale-0 transition duration-300"-->
<!--                      :class="{ active: selectedDestino?.id === destino.id }"-->
<!--                  />-->
                  {{ destino.nombre }}
<!--                  <div class="absolute inset-x-0 bottom-0 p-3 text-white bg-gradient-to-t from-gray-800 rounded-b-xl">-->
<!--                    {{ destino.nombre }}-->
<!--                  </div>-->
                </button>
              </template>
            </template>
          </div>

        </div>
      </div>
    </div>
  </section>

<!--  <div class="" >-->

<!--    <div class="flex">-->
<!--      <template v-for="(destino, index) in destinos" :key="destino.id">-->
<!--        <template v-if="destino.hoteles && destino.hoteles.length > 0" >-->
<!--          <button class="relative" @click="selectedDestino = destino">-->
<!--            <img :src="destino.imagen" alt="" class=" w-full object-cover rounded-xl shadow-xl hotel-img grayscale hover:grayscale-0 transition duration-300" :class="{ active: selectedDestino.id === destino.id }">-->
<!--            <div class="absolute inset-x-0 bottom-0 p-3 text-white bg-gradient-to-t from-gray-800 rounded-b-xl">-->
<!--              {{destino.nombre}}-->
<!--            </div>-->
<!--          </button>-->
<!--        </template>-->
<!--      </template>-->
<!--    </div>-->


<!--    <div class="relative">-->
<!--      <carousel  ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">-->
<!--        <slide class="" v-for="hotel in selectedDestino.hoteles">-->
<!--          <div class="grid grid-cols-12 gap-4 items-center mb-4 bg-white w-full">-->
<!--            <div class="col-span-3 md:col-span-6">-->
<!--              <img :src="hotel.imagen" alt="" class="object-cover w-full h-full">-->
<!--            </div>-->
<!--            <div class="col-span-3 md:col-span-6 p-6">-->
<!--              <h3 class="font-semibold my-4">{{hotel.nombre}}</h3>-->

<!--              <div class="font-light" v-html="hotel.descripcion">-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </slide>-->
<!--      </carousel>-->
<!--      <div class="flex justify-end gap-2">-->
<!--        <button class="border p-2  border-gray-500 focus:bg-gray-800 focus:text-white" @click="prevSlide">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 mx-auto">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />-->
<!--          </svg>-->
<!--        </button>-->
<!--        <button class="border p-2  border-gray-500 focus:bg-gray-800 focus:text-white" @click="nextSlide">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />-->
<!--          </svg>-->
<!--        </button>-->
<!--      </div>-->

<!--    </div>-->
<!--  </div>-->
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide} from "vue3-carousel";

import {useDestinoStore} from "~/stores/destino";

const destinoStore = useDestinoStore()

const items = ref([
  {id: 1, image: 'ruta-de-imagen1.jpg', description: 'Descripción 1'},
  {id: 2, image: 'ruta-de-imagen2.jpg', description: 'Descripción 2'},
  {id: 3, image: 'ruta-de-imagen3.jpg', description: 'Descripción 3'},
  {id: 4, image: 'ruta-de-imagen4.jpg', description: 'Descripción 4'},
  {id: 5, image: 'ruta-de-imagen5.jpg', description: 'Descripción 5'},
]);

const destinos = ref([]) // Array para almacenar los destinos y hoteles
const selectedDestino = ref(null)

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

const getDestino = async () => {
  try {
    const data = await destinoStore.getDestinoHotel();
    destinos.value = data;

    // Selecciona el primer destino por defecto si existen datos
    if (data && data.length > 0) {
      selectedDestino.value = data[0];
    }
  } catch (error) {
    console.error("Error al obtener destinos:", error);
  }
};

onMounted( ()=>{
   getDestino()
  // try {
  //   // Solicita los destinos y hoteles al backend
  //   const response = await fetch('http://localhost:8000/api/destinations-hotels')
  //   const data = await response.json()
  //   destinos.value = data
  //
  //   // Selecciona el primer destino por defecto
  //   if (data.length > 0) {
  //     selectedDestino.value = data[0]
  //   }
  // } catch (error) {
  //   console.error('Error fetching destinations and hotels:', error)
  // }
})

</script>