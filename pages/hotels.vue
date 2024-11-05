<script setup lang="ts">
import {useHotelStore} from "~/stores/hotel";
import {ScrollTrigger} from "gsap/ScrollTrigger";
const { $gsap } = useNuxtApp()

const listHotel = ref([])
const hotelStore = useHotelStore()

const getHotels = async () => {
  const res:any = await hotelStore.getHotel()
  listHotel.value = res
}

const getServices = (servicios:any) => {
  return servicios.split(',')
}

$gsap.registerPlugin(ScrollTrigger);
onMounted(async () => {
  await getHotels()

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

  <header class="h-[100vh] 2xl:h-[90vh] relative bg-secondary overflow-hidden">
    <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
    <nuxt-img src="/images/hotels/banner.webp" :placeholder="[50, 25, 75, 5]" alt="" class="parallax-image h-[125vh] 2xl:h-[130vh] object-cover w-full object-bottom bottom-0 "></nuxt-img>
    <div class="absolute  inset-0 w-full h-full z-20">
      <div class="container grid items-end pb-12 h-full">
        <div class="">
          <div class="border-2 border-white w-8 mb-2"></div>
          <h1 class="text-white text-opacity-70 leading-tight text-5xl 2xl:text-7xl tracking-wide font-semibold">
            Our Hotels</h1>

          <p class="text-white text-xl   tracking-widest font-light mt-5">Discover our range of  Peru travel packages and
            find the perfect itinerary for you.</p>
        </div>
      </div>
    </div>
  </header>

  <section class="bg-secondary bg-opacity-10 py-6">
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

  <section class="container mt-32">
    <div class="grid grid-cols-12 gap-6 items-center">
      <div class="col-span-4 text-primary">
        <div class="border-title mb-2"></div>
        <h2 class="text-3xl font-semibold mb-6">Luxury <br> Accommodation <br> in Peru</h2>
        <p class="tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam culpa debitis dignissimos distinctio dolorem eligendi eum fugit necessitatibus nisi omnis ratione repellendus, saepe sequi! Explicabo itaque sed tempore.</p>

      </div>
      <div class="col-span-8">
        <div class="grid grid-cols-2 gap-6 items-center">

          <nuxt-link to="/destinations/peru/accommodation" class="relative group">
            <div class="overflow-hidden">
              <nuxt-img src="/images/hotels/1.jpg" class="object-cover h-[550px] w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
            </div>
            <div class="absolute bottom-0 left-0  z-10 group-hover:bg-secondary backdrop-blur-sm  text-white rounded px-6 py-3 transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105">
              <div class="border-title-sm mb-2"></div>
              <h3 class="">Hotel B, <span class="italic text-sm">Lima</span></h3>
              <p class="text-sm font-light">Combining intimate, modern hospitality with stylish, historical elegance, Hotel B offers both a polished and d... </p>
            </div>
          </nuxt-link>
          <nuxt-link to="/destinations/peru/accommodation" class="relative group">
            <div class="overflow-hidden">
              <nuxt-img src="/images/hotels/2.jpg" class="object-cover h-[550px] w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
            </div>
            <div class="absolute bottom-0 left-0 z-10 group-hover:bg-secondary backdrop-blur-sm text-white rounded px-6 py-3 transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105">
              <div class="border-title-sm mb-2"></div>
              <h3 class="">Puqui, <span class="italic text-sm">Colca Canyon</span></h3>
              <p class="text-sm font-light">Nestled deep within the Colca Valley, PUQIO is set in a landscape where volcanoes, expansive grasslands, and u... </p>
            </div>
          </nuxt-link>



        </div>

      </div>

      <div class="col-span-12">
        <div class="grid grid-cols-3 gap-6 items-center">
          <nuxt-link to="/destinations/peru/accommodation" class="relative group h-[450px] 2xl:h-[550px] overflow-hidden">
            <nuxt-img src="/images/hotels/3.jpg" class="w-full  h-[450px] 2xl:h-[550px] object-cover object-center"></nuxt-img>
            <div class="absolute bottom-0 left-0 z-10 group-hover:bg-secondary backdrop-blur-lg text-white rounded px-6 py-3 transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105">
              <div class="border-title-sm mb-2"></div>
              <h3 class="">Hotel B, <span class="italic text-sm">Colca Canyon</span></h3>
              <p class="text-sm font-light">Nestled deep within the Colca Valley, PUQIO is set in a landscape where volcanoes, expansive grasslands, and u...  </p>
            </div>
          </nuxt-link>

          <nuxt-link to="/destinations/peru/accommodation" class="relative group h-[450px] 2xl:h-[550px] overflow-hidden">
            <nuxt-img src="https://gotoperu.com/images/hotels/banner.webp" class="w-full  h-[450px] 2xl:h-[550px] object-cover"></nuxt-img>
            <div class="absolute w-full bottom-0 left-0  z-10 group-hover:bg-secondary backdrop-blur-lg  text-white rounded px-6 py-3 transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105">
              <div class="border-title-sm mb-2"></div>
              <h3 class="truncate">Inkaterra Machu Pichu Pueblo Hotel , <span class="italic text-sm">Machu Picchu</span></h3>
              <p class="text-sm font-light">The hotel consists of several whitewashed cottages in an Andean village located in the heart of Aguas Calientes, p... </p>
            </div>
          </nuxt-link>
          <nuxt-link to="/destinations/peru/accommodation" class="relative group h-[450px] 2xl:h-[550px] overflow-hidden">
            <nuxt-img src="/images/hotels/4.jpg" class="w-full  h-[450px] 2xl:h-[550px] object-cover"></nuxt-img>
            <div class="absolute bottom-0 left-0 z-10 group-hover:bg-secondary backdrop-blur-lg text-white rounded px-6 py-3 transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105">
              <div class="border-title-sm mb-2"></div>
              <h3 class="">Sol y Luna Lodge & Spa , <span class="italic text-sm">Sacred Valley</span></h3>
              <p class="text-sm font-light">Set among beautiful gardens in the magnificent location of the Sacred Valley, Sol y Luna is a charming and comf... </p>
            </div>
          </nuxt-link>


        </div>
      </div>
    </div>
  </section>



  <div class="container mt-6">


    <div class="grid md:grid-cols-3 gap-4 mb-4 bg-white" v-for="(hotels, index) in listHotel" :key="index">

      <div class="md:col-span-1">
        <nuxt-img :src="hotels.imagen" alt="" class="object-cover object-center h-60 w-full"></nuxt-img>
      </div>
      <div class="md:col-span-2 p-6">
        <h3 class="font-bold text-gray-500">{{hotels.nombre}}</h3>
<!--        <div class="flex">-->
<!--          <svg v-for="i in hotels.estrellas" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">-->
<!--            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />-->
<!--          </svg>-->
<!--        </div>-->
        <div class="pt-2 flex text-sm mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p class="ml-2">{{hotels.direccion}}</p>
        </div>
        <div class="font-light" v-html="hotels.descripcion"></div>

<!--        <p class="text-gray-500"><b>Services::</b></p>-->

<!--        <div class="md:flex md:gap-3">-->

<!--          <div class="flex items-center text-gray-500" v-for="(service, serviceIndex) in getServices(hotels.servicios)" :key="serviceIndex">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--            </svg>-->
<!--            {{service}}-->
<!--          </div>-->

<!--        </div>-->

<!--        <div class="flex mt-6 text-sm">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />-->
<!--          </svg>-->
<!--          <a :href="hotels.url" class="btn btn-outline-secondary text-blue-600 ml-2" target="_blank">{{ hotels.nombre }}</a>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

