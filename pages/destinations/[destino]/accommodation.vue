<script setup lang="ts">
import PopularPackages from "~/components/packages/PopularPackages.vue";

const { $gsap } = useNuxtApp()
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {usePackageStore} from "~/stores/packages";
import Wetravel from "~/components/Wetravel.vue";
$gsap.registerPlugin(ScrollTrigger);

const packageStore = usePackageStore()

const listPackages = ref([])

const getPackage = async () => {
  const res:any = await packageStore.getPackage()
  listPackages.value = res
}

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

  <header class="h-[100vh] 2xl:h-[100vh] relative bg-secondary overflow-hidden grid grid-cols-2">
    <div class="">
    <nuxt-img src="https://gotoperu.com/images/hotels/banner.webp" :placeholder="[50, 25, 75, 5]" alt="" class="parallax-image h-[125vh] 2xl:h-[125vh] object-cover w-full object-bottom bottom-0 "></nuxt-img>
    </div>
    <div class="grid items-center text-white bg-primary p-24 2xl:mb-40">
      <div class="">
        <h1 class="text-secondary mb-2">Machu Picchu</h1>
        <div class="border-title-sm mb-2"></div>
        <h2 class="text-3xl font-semibold mb-6">Inkaterra Machu Picchu Pueblo Hotel</h2>
        <p class=" tracking-widest font-light 2xl:w-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam culpa debitis dignissimos distinctio dolorem eligendi eum fugit necessitatibus nisi omnis ratione repellendus, saepe sequi! Explicabo itaque sed tempore.</p>

        <button class="btn-secondary mt-6">Get Started</button>
      </div>
    </div>
<!--    <div class="absolute  inset-0 w-full h-full">-->
<!--      <div class="container grid grid-cols-2  pb-12 h-full">-->
<!--        <div class="">-->
<!--          <div class="border-2 border-white w-8 mb-2"></div>-->
<!--          <h1 class="text-white text-opacity-70 leading-tight text-5xl 2xl:text-7xl tracking-wide font-semibold">-->
<!--            Peru-->
<!--            Destinations</h1>-->

<!--          <p class="text-white text-xl   tracking-widest font-light mt-5">Unveil the Wonders of a Journey Through History and Nature.</p>-->
<!--        </div>-->
<!--        <div class="">-->
<!--          sd-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </header>
<!--    <section class="container mt-32">-->
<!--      <div class="grid grid-cols-12 gap-6 items-center">-->
<!--        <div class="col-span-4 text-primary">-->
<!--          <div class="border-title mb-2"></div>-->
<!--          <h2 class="text-3xl font-semibold mb-6">Unveil the <br>Wonders of Peru</h2>-->
<!--          <p class="tracking-widest">Discover Peru and let yourself be inspired by its ancient treasures and stunning landscapes. Among the towering Andean peaks, marvels like Machu Picchu and the historic city of Cusco stand as witnesses to the fascinating cultural encounter between the Incas and the Spanish, shaping the country’s rich history.</p>-->
<!--        </div>-->
<!--        <div class="col-span-8 overflow-hidden relative parallax-container h-[920px] 2xl:h-[900px] group">-->
<!--          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964114497portada%20gotoperu%20machupicchu_1708964115.jpg"  class="parallax-image h-[920px] 2xl:h-[1200px] object-cover object-center absolute top-0 left-0 w-full"></nuxt-img>-->
<!--          <div class="absolute bottom-0 inset-0 items-center grid text-center text-3xl z-10 group-hover:backdrop-blur-sm group-hover:bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out">-->
<!--            Machu Picchu-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

  <section class="py-24 bg-white">
    <div class="container font-light grid grid-cols-2 gap-12">

      <div class="">
        <div class="border-title mb-2"></div>
        <h2 class="text-3xl font-semibold mb-6">Peace and tranquillity on the shores of the world’s highest lake</h2>
        <div class="leading-6 space-y-3">
          <p>Located on a private peninsula that juts out onto the fabled waters of Lake Titicaca, Titilaka is designed to allow guests to fully experience this magical and deeply historical place.</p>
          <p>There are just 18 rooms spread over three floors, all boasting views out across the tranquil waters. Dawn rooms face east and catch the sun as it rises – an integrated bathroom means you can watch the sky light up while soaking in your oversized bathtub. Dusk rooms face west and from here you can catch the sun as it sinks behind the horizon at the end of the day. The corner suites are the largest and are located on the third floor, with double windows for incredible views.</p>
          <p>The design is clean and contemporary with local textiles and fresh flowers to add colour and character. There is plenty of space to relax with three lounges, a reading room with books, and wraparound terraces, overwater decks and boardwalks to really connect you to the lake itself.</p>
          <p>There is a small jetty at the end of the peninsula where boats depart from to explore the lake and its islands, and there are kayaks, row boats and bicycles available too. The lodge offers full-day, half-day or short activities – all of which are included in your stay – simply let them know on arrival what you would like to do each day.</p>
          <p>Food at Titilaka is simple and wholesome and uses local produce such as lake trout and Andean spices. You can choose to dine in the restaurant or enjoy your meal outside, enjoying the views and the breeze from the lake. There is also a massage room should you wish to indulge.</p>
          <p>The lodge is all inclusive and breakfast, lunch, afternoon tea, cocktails and dinner, sundowners and snacks throughout the day are included in your stay.</p>
        </div>
      </div>
      <div class="">
        <div class="border-title mb-2"></div>
        <h3 class="text-2xl font-semibold mb-6">Highlights</h3>
        <ul class="divide-y divide-dashed">
          <li class="py-4 first:pt-0 last:pb-0">Soak up views of Lake Titicaca from the hotel's private peninsula</li>
          <li class="py-4 first:pt-0 last:pb-0">Explore the famed floating Uros islands on Lake Titicaca</li>
          <li class="py-4 first:pt-0 last:pb-0">An exclusive opportunity to sail, paddle board or kayak at over 12,000 feet</li>
          <li class="py-4 first:pt-0 last:pb-0">Sunrise and sunset views over the lake from the 18 comfortable rooms</li>
          <li class="py-4 first:pt-0 last:pb-0">Discover the local wildlife on a birding trip</li>
          <li class="py-4 first:pt-0 last:pb-0">Enjoy world-class Peruvian cuisine served in the hotel's restaurant</li>
        </ul>
      </div>
    </div>
  </section>

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


  <Wetravel></Wetravel>

  <PopularPackages :listPackages="listPackages"></PopularPackages>


</template>

<style scoped>

</style>