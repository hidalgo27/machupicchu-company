<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";
import PopularPackages from "~/components/packages/PopularPackages.vue";
import Wetravel from "~/components/Wetravel.vue";

const { $gsap } = useNuxtApp()
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IconPackage from "~/components/page/package/IconPackage.vue";

const packageStore = usePackageStore()

const listPackages = ref([])

const loading = ref(true)
const video = ref()
const { onLoaded } = useScriptVimeoPlayer()

const getPackage = async () => {
  const res:any = await packageStore.getPackage()
  listPackages.value = res
}

$gsap.registerPlugin(ScrollTrigger);
let player: any
onMounted(async () => {
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

  onLoaded(({ Vimeo }) => {
    player = new Vimeo.Player(video.value, {
      id: 1028176645,
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

})
</script>
<template>
  <div>

<!--    <section class="h-[75vh] 2xl:h-[110vh] relative">-->
<!--      <nuxt-img src="/images/banners/tortuga-ecuador.webp" alt="" :placeholder="[50, 25, 75, 5]" class="object-cover object-bottom w-full h-[75vh] 2xl:h-[110vh]"></nuxt-img>-->

<!--      <div class="absolute inset-x-0 bottom-0">-->
<!--        <div class="container">-->
<!--          <h1 class="text-4xl py-6 font-semibold text-gray-50">-->
<!--            Ecuador Travel Packages-->
<!--          </h1>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

    <header class="h-[100vh] 2xl:h-[90vh] relative  overflow-hidden">
      <div class="absolute inset-0 gradient-cicle-gray z-10 items-center flex justify-center">
        <div v-if="loading" class="mt-40 text-center">
          <!-- Indicador de carga usando clases de Tailwind -->
          <!--      <nuxt-img src="/images/banners/sacsayhuaman.jpg" :placeholder="[50, 25, 75, 5]" alt="" class=" h-[125vh] 2xl:h-[130vh] object-cover w-full object-bottom bottom-0 "></nuxt-img>-->
          Cargando ..
        </div>
      </div>
<!--      <nuxt-img src="/images/banners/mapi2.jpg" :placeholder="[50, 25, 75, 5]" alt="" class="parallax-image h-[125vh] 2xl:h-[130vh] object-cover w-full object-bottom bottom-0 "></nuxt-img>-->
<!--      <video autoplay muted loop class="absolute inset-0 w-full  h-full object-cover">-->
<!--        <source src="/videos/tren.mov" type="video/mp4" />-->
<!--        Tu navegador no soporta el video en HTML5.-->
<!--      </video>-->
      <div v-show="!loading" ref="video" loading="lazy" class="vimeo-wrapper"></div>
<!--      <div class="vimeo-wrapper">-->
<!--      <iframe src="https://player.vimeo.com/video/1028176645?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1" frameborder="0" allow="autoplay; fullscreen" class=""></iframe>-->
<!--      </div>-->
      <div class="absolute  inset-0 w-full h-full z-20">
        <div class="container grid items-end pb-12 h-full">
          <div class="">
            <div class="border-2 border-white w-8 mb-2"></div>
            <h1 class="text-white text-opacity-70 leading-tight text-5xl 2xl:text-7xl tracking-wide font-semibold">
              Travel
              Packages</h1>

            <p class="text-white text-xl   tracking-widest font-light mt-5">Discover our range of  Peru travel packages and
              find the perfect itinerary for you.</p>
          </div>
        </div>
      </div>
    </header>

    <IconPackage></IconPackage>

    <section class="container mt-16 mb-6">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 md:col-span-5 grid items-center">
          <div class="">
            <div class="border-title mb-2"></div>
            <h2 class="text-3xl font-semibold mb-6">The perfect <br> itinerary for you</h2>
            <p class="tracking-widest">GOTOPERU offers the best Peru travel packages covering the main Peru destinations such as Machu Picchu, Rainbow Mountain, Cusco, Lima, Sacred Valley, Titicaca Lake, Puno, Arequipa, Nazca, the Amazon and many more. Our travel packages range from 2 days to 20 days.</p>
          </div>
        </div>

        <div class="col-span-12 md:col-span-7 bg-amber-300">
          <nuxt-link to="/peru-travel-packages/ultimate-sacred-valley-and-machu-picchu">
            <div class="relative items-end grid parallax-container  overflow-hidden h-[700px] 2xl:h-[1000px]">
              <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964114497portada%20gotoperu%20machupicchu_1708964115.jpg"  class="parallax-image  h-[920px] 2xl:h-[1300px] absolute inset-0 object-cover w-full"></nuxt-img>

              <div class="p-6 m-6 bg-white 2xl:w-1/2 w-3/5 text-primary transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105">
                <div class="border-title mb-2 "></div>
                <h2 class="text-xl">Sacred Valley and Machu Picchu Ultimate Program</h2>
                <p class="my-3 text-sm font-light">7 days</p>
                <!--          <p class="text-secondary">From $1234 usd</p>-->
<!--                <div class="text-secondary">-->
<!--                  $1233 usd-->
<!--                </div>-->
              </div>

            </div>
          </nuxt-link>
        </div>
      </div>
    </section>


<!--    <Wetravel></Wetravel>-->

    <PopularPackages :listPackages="listPackages"></PopularPackages>

    <section class="pl-6 mt-32 hidden">
      <div class="grid grid-cols-12 gap-6 items-center">
        <div class="col-span-4 text-primary p-24">
          <div class="border-title mb-2"></div>
          <h2 class="text-3xl font-semibold mb-6">En búsqueda de <br> nuevas <br> experiencias</h2>
          <p class="tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam culpa debitis dignissimos distinctio dolorem eligendi eum fugit necessitatibus nisi omnis ratione repellendus, saepe sequi! Explicabo itaque sed tempore.</p>
        </div>
        <div class="col-span-8 overflow-hidden relative parallax-container h-[920px] 2xl:h-[900px] group">
          <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/slider/1709045914877Slider%20copia%203%20lima_1709045915.jpg"  class="parallax-image h-[920px] 2xl:h-[1200px] absolute top-0 left-0 w-full"></nuxt-img>
          <div class="absolute bottom-0 inset-0 items-center grid text-center text-3xl z-10 group-hover:backdrop-blur-sm group-hover:bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out">
            Culture
          </div>
        </div>
      </div>
    </section>

    <div class="px-6 grid grid-cols-4 gap-6 2xl:grid-cols-4 my-6 hidden">
      <div class="relative group">
        <div class="overflow-hidden relative">
          <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964376528portada gotoperu lima_1708964377.jpg" class="object-cover h-[32rem]  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
        </div>

        <div class="absolute bottom-0 inset-0 items-center grid text-center text-2xl z-10 group-hover:backdrop-blur-sm group-hover:bg-gray-950/30 text-white rounded px-6 py-3 transition duration-500 ease-in-out">
          Aventure
        </div>
      </div>

      <div class="relative group">
        <div class="overflow-hidden relative">
          <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708963976885portada gotoperu cusco 2_1708963977.jpg" class="object-cover h-[32rem]  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
        </div>
        <div class="absolute bottom-0 inset-0 items-center grid text-center text-2xl z-10 group-hover:backdrop-blur-sm group-hover:bg-gray-950/30 text-white rounded px-6 py-3 transition duration-500 ease-in-out">
          Culinary
        </div>
      </div>

      <div class="relative group">
        <div class="overflow-hidden relative">
          <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964505112portada gotoperu titicaca lake_1708964505.jpg" class="object-cover h-[32rem]  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
        </div>
        <div class="absolute bottom-0 inset-0 items-center grid text-center text-2xl z-10 group-hover:backdrop-blur-sm group-hover:bg-gray-950/30 text-white rounded px-6 py-3 transition duration-500 ease-in-out">
          Family
        </div>
      </div>

      <div class="relative group">
        <div class="overflow-hidden relative">
          <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964376528portada gotoperu lima_1708964377.jpg" class="object-cover h-[32rem]  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
        </div>

        <div class="absolute bottom-0 inset-0 items-center grid text-center text-2xl z-10 group-hover:backdrop-blur-sm group-hover:bg-gray-950/30 text-white rounded px-6 py-3 transition duration-500 ease-in-out">
          Go Local
        </div>
      </div>

    </div>

  </div>
</template>
