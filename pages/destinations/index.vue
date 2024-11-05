<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";

const { $gsap } = useNuxtApp()
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HotelDestino from "~/components/page/destino/HotelDestino.vue";

const packageStore = usePackageStore()

const listPackages = ref([])

const getPackage = async () => {
  const res:any = await packageStore.getDestinations()
  listPackages.value = res
}


$gsap.registerPlugin(ScrollTrigger);
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
})

</script>
<template>
  <div>
  <header class="h-[100vh] 2xl:h-[90vh] relative bg-secondary overflow-hidden">
    <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
    <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/slider/1708990714220Slider%20copia%20arequipa_1708990715.jpg" :placeholder="[50, 25, 75, 5]" alt="" class="parallax-image h-[125vh] 2xl:h-[130vh] object-cover w-full object-bottom bottom-0 "></nuxt-img>
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

    <section class="container mt-32">
      <div class="grid grid-cols-12 gap-6 items-center">
        <div class="col-span-4 text-primary">
          <div class="border-title mb-2"></div>
          <h2 class="text-3xl font-semibold mb-6">Unveil the <br>Wonders of Peru</h2>
          <p class="tracking-widest">Discover Peru and let yourself be inspired by its ancient treasures and stunning landscapes. Among the towering Andean peaks, marvels like Machu Picchu and the historic city of Cusco stand as witnesses to the fascinating cultural encounter between the Incas and the Spanish, shaping the country’s rich history.</p>
        </div>
        <div class="col-span-8 overflow-hidden relative parallax-container h-[920px] 2xl:h-[900px] group relative">
          <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964114497portada%20gotoperu%20machupicchu_1708964115.jpg"  class="parallax-image h-[920px] 2xl:h-[1200px] object-cover object-center absolute top-0 left-0 w-full"></nuxt-img>
          <div class="absolute bottom-0 inset-0 items-center grid text-center text-3xl z-10 group-hover:backdrop-blur-sm group-hover:bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out">
            Machu Picchu
            <div class="absolute text-sm bottom-0 w-full p-32 text-white transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium assumenda autem culpa delectus dolore, eveniet impedit in iste itaque laborum laudantium nam nesciunt optio pariatur quam repellat tempore voluptas.
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container grid grid-cols-4 gap-6 2xl:grid-cols-4 my-6">
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

    <section class="bg-secondary bg-opacity-10 mt-12 py-6">
      <div class="container grid grid-cols-4 gap-6">
        <div class="text-center">
          <nuxt-img src="https://www.peruforless.com/images/i-personalize-c.svg" class="mx-auto w-16 mb-2"></nuxt-img>
          <h3 class="font-semibold">Fully Customizable</h3>
          <!--          <p class="font-light">for world famous ancient ruins and fascinating insights into the Incan Empire</p>-->
        </div>
        <div class="text-center">
          <nuxt-img src="https://www.peruforless.com/images/i-services-c.svg" class="mx-auto w-16 mb-2"></nuxt-img>
          <h3 class="font-semibold">Personalized service</h3>
          <!--          <p class="font-light">made from fresh fish and marinated in lime juice is just one of Peru's many gourmet delights</p>-->
        </div>
        <div class="text-center">
          <nuxt-img src="https://www.peruforless.com/images/i-hotels-c.svg" class="mx-auto w-16 mb-2"></nuxt-img>
          <h3 class="font-semibold">Handpicked hotels</h3>
          <!--          <p class="font-light">biking, horse riding and ancient ruins in the Sacred Valley</p>-->
        </div>
        <div class="text-center">
          <nuxt-img src="https://www.peruforless.com/images/i-testimonials-c.svg" class="mx-auto w-16 mb-2"></nuxt-img>
          <h3 class="font-semibold">5000 + testimonials</h3>
          <!--          <p class="font-light">for luxury cruises, secluded lodge retreats, canopy walkways and plenty of incredible wildlife</p>-->
        </div>
        <!--        <div class="text-center">-->
        <!--          <nuxt-img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/374671/Boat@2x-128x128.png" class="mx-auto w-16 mb-2"></nuxt-img>-->
        <!--          <h3 class="font-semibold">Northern Beaches</h3>-->
        <!--          <p class="font-light">for relaxation and sunset cruises on Peru's rugged coastline</p>-->
        <!--        </div>-->
      </div>
    </section>





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
