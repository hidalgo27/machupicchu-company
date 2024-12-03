<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";
import PopularPackages from "~/components/packages/PopularPackages.vue";
import Wetravel from "~/components/Wetravel.vue";

const { $gsap } = useNuxtApp()
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IconPackage from "~/components/page/package/IconPackage.vue";
import Train from "~/components/page/slider/SliderTrain.vue";
import SliderTrain from "~/components/page/slider/SliderTrain.vue";

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
          Cargando ..
        </div>
      </div>
      <div v-show="!loading" ref="video" loading="lazy" class="vimeo-wrapper"></div>
      <div class="absolute  inset-0 w-full h-full z-20">
        <div class="container grid items-end pb-12 h-full">
          <div class="">
            <div class="border-2 border-white w-8 mb-2"></div>
            <h1 class="text-white text-opacity-70 leading-tight text-5xl 2xl:text-7xl tracking-wide font-semibold">
              Trains</h1>
<!--            <p class="text-white text-xl   tracking-widest font-light mt-5">Discover our range of  Peru travel packages and-->
<!--              find the perfect itinerary for you.</p>-->
          </div>
        </div>
      </div>
    </header>

<!--    <IconPackage></IconPackage>-->

    <section class="container py-12 text-gray-500 text-center">
      <p>An essential part of your visit to Peru is the trains that will transport you to different tourist destinations. Some train routes are optional, and others are mandatory, such as the stretch to Aguas Calientes or Machu Picchu Pueblo. What better way to tour Peru than in luxury trains that will provide all the comforts inside and outside its facilities? Comfort is guaranteed when Machu Picchu Company reserves the most exclusive trains for your tours in Peru.</p>
    </section>


    <section class="container  mb-6">
<!--      <Train></Train>-->
      <slider-train></slider-train>
<!--      <div class="grid grid-cols-12 gap-6 bg-white/50 backdrop-blur-lg">-->
<!--        <div class="col-span-12 md:col-span-5 grid items-center">-->
<!--          <div class="p-12">-->
<!--            <div class="border-title mb-2"></div>-->
<!--            <h2 class="text-3xl font-semibold mb-6">Hiram <br>Bingham</h2>-->
<!--            <p class="tracking-widest">The most luxurious and exclusive train in Peruvian territory will always be the first option we offer to our guests for their visit to the citadel of Machu Picchu.</p>-->

<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-span-12 md:col-span-7 bg-amber-300">-->
<!--          <nuxt-link to="/peru-travel-packages/ultimate-sacred-valley-and-machu-picchu">-->
<!--            <div class="relative items-end grid parallax-container  overflow-hidden h-[700px] 2xl:h-[1000px]">-->
<!--              <nuxt-img src="https://img.belmond.com/f_auto/t_2580x3219/photos/hbi/hbi-din-bar05.jpg"  class="parallax-image  h-[920px] 2xl:h-[1300px] absolute inset-0 object-cover w-full"></nuxt-img>-->
<!--              <div class=" absolute bottom-0 right-0 text-white text-2xl font-parisienne p-6">Hiram Bingham</div>-->
<!--            </div>-->
<!--          </nuxt-link>-->
<!--        </div>-->
<!--        <div class="col-span-12">-->
<!--          <div class="px-12 pb-12 font-light leading-relaxed space-y-4">-->
<!--            <p class="tracking-widest">Step aboard the Hiram Bingham train, an exquisite blend of luxury and adventure that transports travelers through the heart of Peru’s breathtaking Sacred Valley to the legendary Machu Picchu. Operated by Belmond, this opulent train is named after the explorer who brought the ancient Incan citadel to global attention, and it delivers an experience as extraordinary as its destination.</p>-->
<!--            <p class="tracking-widest">The Hiram Bingham is more than a mode of transportation; it’s a moving masterpiece. Its vintage carriages evoke the romance of 1920s rail travel, adorned with polished wood, brass details, and rich fabrics. Guests are treated to world-class service, beginning with a champagne toast. The train’s two dining cars serve gourmet Peruvian cuisine paired with fine wines crafted by expert chefs. A bar car offers signature cocktails and live Andean music, creating a vibrant atmosphere of celebration.</p>-->
<!--            <p class="tracking-widest">Large windows ensure uninterrupted views of the dramatic landscapes, from lush valleys to towering peaks. For those seeking a deeper connection with Peru’s culture, the observation car is perfect for panoramic vistas and photo opportunities.</p>-->
<!--            <p class="tracking-widest">The Hiram Bingham transforms a journey to Machu Picchu into an unforgettable indulgence, blending luxury, history, and natural beauty into one seamless experience. Perfect for discerning travelers seeking unparalleled adventure.</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </section>


    <!--    <Wetravel></Wetravel>-->



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
