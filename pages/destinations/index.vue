<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";

const { $gsap } = useNuxtApp()
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HotelDestino from "~/components/page/destino/HotelDestino.vue";
import IconPackage from "~/components/page/package/IconPackage.vue";

const packageStore = usePackageStore()

const listPackages = ref([])

const loading = ref(true)
const video = ref()
const { onLoaded } = useScriptVimeoPlayer()


const getPackage = async () => {
  const res:any = await packageStore.getDestinations()
  listPackages.value = res
}

$gsap.registerPlugin(ScrollTrigger);
let player: any
onMounted(async () => {
  onLoaded(({ Vimeo }) => {
    player = new Vimeo.Player(video.value, {
      id: 1028177006,
      autoplay: true,
      // background: true,
      // transparent: true,
      loop: true,
      controls: false,
      // responsive: true,
      // autopause: true,
      muted: true
    })
    player.on('loaded', () => {
      loading.value = false // Oculta el indicador de carga cuando el video está listo
    })
  })

  await getPackage()

  const parallaxImages = document.querySelectorAll(".parallax-image");

  parallaxImages.forEach((image) => {
    $gsap.to(image, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: image.parentElement,  // Usa el contenedor padre como trigger
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

})

</script>
<template>
  <div>
  <header class="h-[100vh] 2xl:h-[90vh] relative  overflow-hidden">
    <div class="absolute inset-0 gradient-cicle-gray z-10 items-center flex justify-center">
      <div v-if="loading" class="mt-40 text-center">
        Cargando ..
      </div>
    </div>

<!--    <video autoplay muted loop class="absolute inset-0 w-full  h-full object-cover">-->
<!--      <source src="/videos/destination.mp4" type="video/mp4" />-->
<!--      Tu navegador no soporta el video en HTML5.-->
<!--    </video>-->

    <div v-show="!loading" ref="video" loading="lazy" class="vimeo-wrapper"></div>
    <div class="absolute  inset-0 w-full h-full z-20">
      <div class="container grid items-end pb-12 h-full">
        <div class="">
          <div class="border-2 border-white w-8 mb-2"></div>
          <h1 class="text-white text-opacity-70 leading-tight text-5xl 2xl:text-7xl tracking-wide font-semibold">
            Peru
            Destinations</h1>

          <p class="text-white text-xl   tracking-widest font-light mt-5">Unveil the Wonders of a Journey Through History and Nature.</p>
        </div>
      </div>
    </div>
  </header>

    <section class="container mt-32 hidden md:block">
      <div class="grid grid-cols-12 gap-6 items-center">
        <div class="col-span-4 text-primary">
          <div class="border-title mb-2"></div>
          <h2 class="text-3xl font-semibold mb-6">Unveil the <br>Wonders of Peru</h2>
          <p class="tracking-widest">Peru is a country with endless tourist destinations to explore. Do not miss the opportunity to travel to the most exclusive beaches of Peru, visit the citadel of Machu Picchu on luxury trains, and explore the Peruvian Amazon with the most luxurious cruises that only Machu Picchu Company can offer to all our exclusive travelers. Make sure you visit all the main tourist destinations in Peru with the comforts and luxuries that our organization provides you.</p>
        </div>
        <div class="col-span-8">
          <nuxt-link to="/destinations/machu-picchu">
            <div class="overflow-hidden relative parallax-container h-[920px] 2xl:h-[900px] group">
              <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
              <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964114497portada%20gotoperu%20machupicchu_1708964115.jpg"  class="parallax-image h-[920px] 2xl:h-[1200px] object-cover object-center absolute top-0 left-0 w-full"></nuxt-img>
              <div class="absolute bottom-0 inset-0 items-center grid text-center text-3xl z-10 group-hover:backdrop-blur-sm group-hover:bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out">
                Machu Picchu
                <div class="absolute text-sm bottom-0 w-full p-32 text-white transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
                  Travel on the most luxurious trains to the citadel of Machu Picchu! Experience a tour of Inca City with Machu Picchu Company, which offers personalized services that all our travelers need.
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>

    <div class="container grid grid-cols-1 md:grid-cols-4 gap-6 2xl:grid-cols-4 mt-6 mb-12">
      <nuxt-link :to="'/destinations/'+destination.url" class="relative group" v-for="destination in listPackages">
        <div class="overflow-hidden relative">
          <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
          <nuxt-img :src="destination.imagen" class="object-cover h-[32rem]  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
        </div>

        <div class="absolute bottom-0 inset-0 items-center overflow-hidden grid text-center text-2xl z-10 group-hover:backdrop-blur-sm group-hover:bg-gray-950/30 text-white rounded px-6 py-3 transition duration-500 ease-in-out">

<!--          <p class="text-sm text-gray-500 dark:text-gray-200" v-html="destination.resumen"></p>-->

            {{ destination.nombre }}
            <div class="absolute text-sm bottom-0 w-full p-12 text-white transition-transform transform translate-y-full group-hover:translate-y-0 duration-500" v-html="destination.resumen">

            </div>

        </div>

      </nuxt-link>

<!--      <div class="relative group">-->
<!--        <div class="overflow-hidden">-->
<!--          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/package/MACHUPICCHU-AND-RAINBOW-MOUNTAIN_1710688497.jpg" class="object-cover h-[32rem]  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>-->
<!--        </div>-->
<!--        <div class="absolute bottom-0 inset-0 items-center grid text-center text-2xl z-10 group-hover:backdrop-blur-sm group-hover:bg-gray-950/30 text-white rounded px-6 py-3 transition duration-500 ease-in-out">-->
<!--          Rainbow Mountain-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="relative group">-->
<!--        <div class="overflow-hidden">-->
<!--          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964505112portada gotoperu titicaca lake_1708964505.jpg" class="object-cover h-[32rem]  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>-->
<!--        </div>-->
<!--        <div class="absolute bottom-0 inset-0 items-center grid text-center text-2xl z-10 group-hover:backdrop-blur-sm group-hover:bg-gray-950/30 text-white rounded px-6 py-3 transition duration-500 ease-in-out">-->
<!--          Titicaca Lake-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="relative group">-->
<!--        <div class="overflow-hidden">-->
<!--          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964376528portada gotoperu lima_1708964377.jpg" class="object-cover h-[32rem]  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>-->
<!--        </div>-->

<!--        <div class="absolute bottom-0 inset-0 items-center grid text-center text-2xl z-10 group-hover:backdrop-blur-sm group-hover:bg-gray-950/30 text-white rounded px-6 py-3 transition duration-500 ease-in-out">-->
<!--          Lima-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="relative group">-->
<!--        <div class="overflow-hidden">-->
<!--          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708963976885portada%20gotoperu%20cusco%202_1708963977.jpg" class="object-cover h-[32rem]  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>-->
<!--        </div>-->

<!--        <div class="absolute bottom-0 inset-0 items-center grid text-center text-2xl z-10 group-hover:backdrop-blur-sm group-hover:bg-gray-950/30 text-white rounded px-6 py-3 transition duration-500 ease-in-out">-->
<!--          Cusco-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="relative group">-->
<!--        <div class="overflow-hidden">-->
<!--          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964235902portada%20gotoperu%20sacred_1708964236.jpg" class="object-cover h-[32rem]  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>-->
<!--        </div>-->
<!--        <div class="absolute bottom-0 inset-0 items-center grid text-center text-2xl z-10 group-hover:backdrop-blur-sm group-hover:bg-gray-950/30 text-white rounded px-6 py-3 transition duration-500 ease-in-out">-->
<!--          Sacred Valley-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="relative group">-->
<!--        <div class="overflow-hidden">-->
<!--          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/package/PERU-ADVENTURE_1710688514.jpg" class="object-cover h-[32rem]  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>-->
<!--        </div>-->
<!--        <div class="absolute bottom-0 inset-0 items-center grid text-center text-2xl z-10 group-hover:backdrop-blur-sm group-hover:bg-gray-950/30 text-white rounded px-6 py-3 transition duration-500 ease-in-out">-->
<!--          Ica-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="relative group">-->
<!--        <div class="overflow-hidden">-->
<!--          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964593555portada%20gotoperu%20NAZCA_1708964594.jpg" class="object-cover h-[32rem]  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>-->
<!--        </div>-->

<!--        <div class="absolute bottom-0 inset-0 items-center grid text-center text-2xl z-10 group-hover:backdrop-blur-sm group-hover:bg-gray-950/30 text-white rounded px-6 py-3 transition duration-500 ease-in-out">-->
<!--          Nazca Lines-->
<!--        </div>-->
<!--      </div>-->

    </div>

<!--  <section>-->
<!--    <div class="relative">-->
<!--      <div class="h-[75vh] 2xl:h-[60vh] relative overflow-hidden vimeo-wrapper ">-->
<!--        <div class="absolute bg-gradient-to-t from-gray-800 h-[75vh] opacity-20 z-10 inset-0"></div>-->
<!--        <iframe src="https://player.vimeo.com/video/996360304?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1" frameborder="0" allow="autoplay; fullscreen" class=""></iframe>-->
<!--      </div>-->
<!--      <div class="absolute inset-x-0 bottom-0 z-10">-->
<!--        <div class="container">-->
<!--          <h1 class="text-4xl py-6 font-semibold text-gray-50">-->
<!--            Peru Destinations-->
<!--          </h1>-->
<!--        </div>-->

<!--      </div>-->
<!--      &lt;!&ndash;      <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-50"></div>&ndash;&gt;-->
<!--    </div>-->
<!--  </section>-->

    <IconPackage></IconPackage>





<!--    <section class="">-->
<!--      <div class="grid grid-cols-12">-->
<!--        <div class="col-span-5 overflow-hidden h-[700px] 2xl:h-[900px]">-->
<!--          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/slider/1709049548333Slider%20copia%203%20cusco_1709049549.jpg" class="parallax-image h-[900px] 2xl:h-[1200px] object-cover object-center w-full"></nuxt-img>-->
<!--        </div>-->
<!--        <div class="col-span-7 grid items-center text-white bg-primary p-24">-->
<!--          <div class="">-->
<!--            <div class="border-title-sm mb-2"></div>-->
<!--            <h2 class="text-3xl font-semibold mb-6">PERU HIGHLIGHTS</h2>-->
<!--            <p class=" tracking-widest font-light 2xl:w-1/2">Exploring Peru natural and cultural diversity throughout four regions inside the country. Ecuador's varied geography is a delight for travelers. Formally categorized into four distinct sections, each region possesses its own distinctive allure and entices explorers in pursuit of varied encounters.</p>-->

<!--            <button class="btn-secondary mt-6">Get Started</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

    <section>

      <HotelDestino></HotelDestino>
    </section>


  </div>
</template>
