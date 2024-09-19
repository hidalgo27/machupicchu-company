<script setup lang="ts">
const { $gsap } = useNuxtApp()
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {usePackageStore} from "~/stores/packages";
import PopularPackages from "~/components/packages/PopularPackages.vue";

const packageStore = usePackageStore()

const listPackages = ref([])

const getPackage = async () => {
  const res:any = await packageStore.getPackageTop()
  listPackages.value = res
}


// Registra el plugin de ScrollTrigger
$gsap.registerPlugin(ScrollTrigger);
onMounted(async () => {
  await getPackage()

  const parallaxImages = document.querySelectorAll(".parallax-image");

  parallaxImages.forEach((image) => {
    $gsap.to(image, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: image.parentElement,  // Usa el contenedor padre como trigger
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  // $gsap.fromTo(".texto-prueba",
  //     { x: "-100%" },  // Empieza fuera de la pantalla a la izquierda
  //     {
  //       x: "0%",        // Se desplaza hacia su posición normal
  //       ease: "none",   // Sin suavizado
  //       scrollTrigger: {
  //         trigger: ".col-span-3",  // El trigger es el propio div
  //         start: "top 80%",        // Inicia cuando el div está un 80% en la vista
  //         end: "top 20%",          // Termina cuando el div llega al 20% del viewport
  //         scrub: true,             // Sincroniza el desplazamiento con el scroll
  //       }
  //     }
  // );
});


</script>

<template>

    <div class="relative w-full h-[120vh] overflow-hidden">
      <div class="mask"></div>
      <video autoplay muted loop class="absolute inset-0 w-full  h-full object-cover">
        <source src="/videos/banner.mov" type="video/mp4" />
        Tu navegador no soporta el video en HTML5.
      </video>

      <div class="relative z-10 flex items-center ml-52 w-full h-full text-left">
<!--        <h2 class="text-white text-xl md:text-3xl container font-medium ">THE BEST VACATION IN <span class="text-primary">PERU</span> <span class="text-secondary">WITH THE BEST</span> PERUVIAN OPERATOR</h2>-->
        <div class=" container ">
<!--          Explora Perú <br>-->
          <div class="border-title mb-2"></div>
          <h1 class="text-primary text-opacity-90 leading-tight text-5xl 2xl:text-7xl tracking-wide font-semibold">
          Libertad. <br>
            Aventura. <br>
          Posibilidades.</h1>

          <p class="text-white text-xl 2xl:text-2xl tracking-widest font-light mt-5">Para aquellos que quieren ir más allá.</p>

          <button class="btn-secondary mt-8">Inquire Now</button>
        </div>


      </div>
    </div>


  <section class="bg-secondary bg-opacity-10 py-6">
    <div class="container grid grid-cols-5 gap-6">
      <div class="text-center">
        <nuxt-img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/374680/History@2x-128x128.png" class="mx-auto w-16 mb-2"></nuxt-img>
        <h3 class="font-semibold">Machu Picchu</h3>
        <p class="font-light">for world famous ancient ruins and fascinating insights into the Incan Empire</p>
      </div>
      <div class="text-center">
        <nuxt-img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/374677/Food@2x-128x128.png" class="mx-auto w-16 mb-2"></nuxt-img>
        <h3 class="font-semibold">Ceviche</h3>
        <p class="font-light">made from fresh fish and marinated in lime juice is just one of Peru's many gourmet delights</p>
      </div>
      <div class="text-center">
        <nuxt-img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/374679/Hike@2x-128x128.png" class="mx-auto w-16 mb-2"></nuxt-img>
        <h3 class="font-semibold">Hiking</h3>
        <p class="font-light">biking, horse riding and ancient ruins in the Sacred Valley</p>
      </div>
      <div class="text-center">
        <nuxt-img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/374681/Jungle@2x-128x128.png" class="mx-auto w-16 mb-2"></nuxt-img>
        <h3 class="font-semibold">Peruvian Amazon</h3>
        <p class="font-light">for luxury cruises, secluded lodge retreats, canopy walkways and plenty of incredible wildlife</p>
      </div>
      <div class="text-center">
        <nuxt-img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/374671/Boat@2x-128x128.png" class="mx-auto w-16 mb-2"></nuxt-img>
        <h3 class="font-semibold">Northern Beaches</h3>
        <p class="font-light">for relaxation and sunset cruises on Peru's rugged coastline</p>
      </div>
    </div>
  </section>

  <section class="container mt-32 mb-12">
    <div class="text-center text-primary">
      <div class="border-title mb-2 mx-auto"></div>
      <h1 class="font-semibold text-4xl mb-6 title">Peru, upgraded</h1>
      <p class="text-lg tracking-widest font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa deleniti dolor earum mollitia nulla quo reprehenderit tempore? Aspernatur atque consequatur culpa cum natus nulla odit ullam velit vero voluptas.</p>
    </div>
  </section>
  <section class="container mb-32">
    <div class="grid grid-cols-12 gap-6 items-center">
      <div class="col-span-4 text-primary">
        <div class="border-title mb-2"></div>
        <h2 class="text-3xl font-semibold mb-6">En búsqueda de <br> nuevas <br> experiencias</h2>
        <p class="tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam culpa debitis dignissimos distinctio dolorem eligendi eum fugit necessitatibus nisi omnis ratione repellendus, saepe sequi! Explicabo itaque sed tempore.</p>
      </div>
      <div class="col-span-8 overflow-hidden relative parallax-container h-[920px] 2xl:h-[1000px]">
        <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/package/PERU-ADVENTURE_1710688514.jpg"  class="parallax-image absolute top-0 left-0 w-full h-auto"></nuxt-img>
      </div>
    </div>
  </section>

  <div class="container mb-12">
    <div class="grid grid-cols-12 text-primary gap-6 items-center">
      <div class="col-span-4">
        <div class="border-title mb-2 "></div>
        <h1 class="font-semibold text-4xl mb-6">Trip Inspiration</h1>
      </div>
      <div class="col-span-8 border-l-2 px-6">
        <p class=" tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa deleniti dolor earum mollitia nulla quo reprehenderit tempore? Aspernatur atque consequatur culpa cum natus nulla odit ullam velit vero voluptas.</p>
      </div>
    </div>
  </div>


  <PopularPackages :listPackages="listPackages"></PopularPackages>

  <section class="container my-32">
    <div class="grid grid-cols-12 gap-6 items-center">
      <div class="col-span-4 text-primary">
        <div class="border-title mb-2"></div>
        <h2 class="text-3xl font-semibold mb-6">Luxury <br> Accommodation <br> in Peru</h2>
        <p class="tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam culpa debitis dignissimos distinctio dolorem eligendi eum fugit necessitatibus nisi omnis ratione repellendus, saepe sequi! Explicabo itaque sed tempore.</p>
        <div class="mt-12">
          <button class="btn-secondary-outline">View more</button>
        </div>
      </div>
      <div class="col-span-8">
        <div class="grid grid-cols-2 gap-6 items-center">

            <div class="relative group">
              <div class="overflow-hidden">
              <nuxt-img src="/images/hotels/1.jpg" class="object-cover h-[450px] w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
              </div>
              <div class="absolute bottom-0 left-0  z-10 group-hover:bg-secondary backdrop-blur-sm bg-secondary/70 text-white rounded px-6 py-3 transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105">
                <div class="border-title-sm mb-2"></div>
                <h3 class="">Hotel B, <span class="italic text-sm">Lima</span></h3>
                <p class="text-xs font-light">Combining intimate, modern hospitality with stylish, historical elegance, Hotel B offers both a polished and d... </p>
              </div>
            </div>
            <div class="relative group">
              <div class="overflow-hidden">
                <nuxt-img src="/images/hotels/2.jpg" class="object-cover h-[450px] w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
              </div>
              <div class="absolute bottom-0 left-0 z-10 group-hover:bg-secondary backdrop-blur-sm bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105">
                <div class="border-title-sm mb-2"></div>
                <h3 class="">Puqui, <span class="italic text-sm">Colca Canyon</span></h3>
                <p class="text-xs font-light">Nestled deep within the Colca Valley, PUQIO is set in a landscape where volcanoes, expansive grasslands, and u... </p>
              </div>
            </div>



        </div>

      </div>

      <div class="col-span-12">
        <div class="grid grid-cols-3 gap-6 items-center">
          <div class="relative group overflow-hidden h-[450px] 2xl:h-[500px]">
            <nuxt-img src="/images/hotels/3.jpg" class="w-full  h-[450px] 2xl:h-[550px] object-cover object-center parallax-image"></nuxt-img>
            <div class="absolute bottom-0 left-0 z-10 group-hover:bg-secondary backdrop-blur-sm bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105">
              <div class="border-title-sm mb-2"></div>
              <h3 class="">Hotel B, <span class="italic text-sm">Colca Canyon</span></h3>
              <p class="text-xs font-light">Nestled deep within the Colca Valley, PUQIO is set in a landscape where volcanoes, expansive grasslands, and u...  </p>
            </div>
          </div>

          <div class="relative group overflow-hidden h-[450px] 2xl:h-[500px]">
            <nuxt-img src="https://gotoperu.com/images/hotels/banner.webp" class="w-full  h-[450px] 2xl:h-[550px] object-cover parallax-image"></nuxt-img>
            <div class="absolute w-full bottom-0 left-0  z-10 group-hover:bg-secondary backdrop-blur-sm bg-secondary/70 text-white rounded px-6 py-3 transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105">
              <div class="border-title-sm mb-2"></div>
              <h3 class="truncate">Inkaterra Machu Pichu Pueblo Hotel , <span class="italic text-sm">Machu Picchu</span></h3>
              <p class="text-xs font-light">The hotel consists of several whitewashed cottages in an Andean village located in the heart of Aguas Calientes, p... </p>
            </div>
          </div>
          <div class="relative group overflow-hidden h-[450px] 2xl:h-[500px]">
            <nuxt-img src="/images/hotels/4.jpg" class="w-full  h-[450px] 2xl:h-[550px] object-cover parallax-image"></nuxt-img>
            <div class="absolute bottom-0 left-0 z-10 group-hover:bg-secondary backdrop-blur-sm bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105">
              <div class="border-title-sm mb-2"></div>
              <h3 class="">Sol y Luna Lodge & Spa , <span class="italic text-sm">Sacred Valley</span></h3>
              <p class="text-xs font-light">Set among beautiful gardens in the magnificent location of the Sacred Valley, Sol y Luna is a charming and comf... </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  </section>

  <section class="container my-32">
    <div class="grid grid-cols-12 gap-6 items-center">
      <div class="col-span-8 overflow-hidden relative parallax-container h-[920px] 2xl:h-[1000px] group">
        <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964114497portada gotoperu machupicchu_1708964115.jpg"  class="parallax-image absolute top-0 left-0 w-full h-auto"></nuxt-img>
        <div class="absolute bottom-0 left-0 m-6 z-10 group-hover:bg-secondary backdrop-blur-sm bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out">
          Machu Picchu
        </div>
      </div>
<!--      <div class="col-span-8 relative">-->
<!--        <div class="relative group">-->
<!--          <div class="overflow-hidden">-->
<!--            <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964114497portada gotoperu machupicchu_1708964115.jpg" class="object-cover  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>-->
<!--          </div>-->

<!--          <div class="absolute bottom-0 left-0 m-6 z-10 group-hover:bg-secondary backdrop-blur-sm bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out">-->
<!--            Machu Picchu-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="col-span-4 text-primary">
        <div class="border-title mb-2"></div>
        <h2 class="text-3xl font-semibold mb-6">En búsqueda de <br> nuevas <br> experiencias</h2>
        <p class="tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam culpa debitis dignissimos distinctio dolorem eligendi eum fugit necessitatibus nisi omnis ratione repellendus, saepe sequi! Explicabo itaque sed tempore.</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6 my-6">
      <div class="relative group">
        <div class="overflow-hidden">
          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964376528portada gotoperu lima_1708964377.jpg" class="object-cover  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
        </div>

        <div class="absolute bottom-0 left-0 m-6 z-10 group-hover:bg-secondary backdrop-blur-sm bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out">
          Lima
        </div>
      </div>

      <div class="relative group">
        <div class="overflow-hidden">
          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708963976885portada gotoperu cusco 2_1708963977.jpg" class="object-cover  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
        </div>
        <div class="absolute bottom-0 left-0 m-6 z-10 group-hover:bg-secondary backdrop-blur-sm bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out">
          Cusco
        </div>
      </div>

      <div class="relative group">
        <div class="overflow-hidden">
          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964505112portada gotoperu titicaca lake_1708964505.jpg" class="object-cover  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
        </div>
        <div class="absolute bottom-0 left-0 m-6 z-10 group-hover:bg-secondary backdrop-blur-sm bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out">
          Puno
        </div>
      </div>

    </div>
    <div class="text-right">
      <button class="btn-secondary-outline">View more</button>
    </div>
  </section>

  <section class="mt-32 bg-white">
    <div class="container  py-24 grid grid-cols-12 gap-12 items-center">
      <div class="col-span-3 text-primary pr-6">
        <div class="border-title mb-2"></div>
        <h2 class="text-3xl font-semibold mb-6">Our Travel <br> Agency <br> Services</h2>
        <p class="tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam culpa debitis dignissimos distinctio dolorem eligendi eum fugit necessitatibus nisi omnis ratione repellendus, saepe sequi! Explicabo itaque sed tempore.</p>
      </div>
      <div class="col-span-9 pl-16">
<!--        <div class="grid grid-cols-3 step-p gap-6">-->
<!--          <div class="step-g">-->
<!--            <nuxt-img src="https://epic.travel/wp-content/uploads/2019/05/talk-icon-blue.svg" class="w-full"></nuxt-img>-->
<!--          </div>-->
<!--          <div class="step-g">-->
<!--            <nuxt-img src="https://epic.travel/wp-content/uploads/2019/05/talk-icon-blue.svg" class="w-full"></nuxt-img>-->
<!--          </div>-->
<!--          <div class="step-g">-->
<!--            <nuxt-img src="https://epic.travel/wp-content/uploads/2019/05/talk-icon-blue.svg" class="w-full"></nuxt-img>-->
<!--          </div>-->
<!--        </div>-->

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          <!-- Step 1 -->
          <div>
            <div class="mb-4">
              <div class="text-center text-primary mb-4 text-3xl font-semibold">
                <div class="border-title mb-2 mx-auto"></div>
                01
              </div>
              <div class="text-center">
<!--                <img src="https://epic.travel/wp-content/uploads/2019/05/talk-icon-blue.svg" alt="Phone Icon" class="rounded-full w-full">-->
                <div class="p-12 bg-secondary rounded-full h-40 w-40 items-center flex justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                  </svg>
                </div>

              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div>
            <div class="mb-4">
              <div class="text-center text-primary mb-4 text-3xl font-semibold">
                <div class="border-title mb-2 mx-auto"></div>
                02
              </div>
              <div class="text-center">
                <!--                <img src="https://epic.travel/wp-content/uploads/2019/05/talk-icon-blue.svg" alt="Phone Icon" class="rounded-full w-full">-->
                <div class="p-12 bg-secondary rounded-full h-40 w-40 items-center flex justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                  </svg>



                </div>

              </div>
            </div>

          </div>

          <!-- Step 3 -->
          <div>
            <div class="mb-4">
              <div class="text-center text-primary mb-4 text-3xl font-semibold">
                <div class="border-title mb-2 mx-auto"></div>
                03
              </div>
              <div class="text-center">
                <!--                <img src="https://epic.travel/wp-content/uploads/2019/05/talk-icon-blue.svg" alt="Phone Icon" class="rounded-full w-full">-->
                <div class="p-12 bg-secondary rounded-full h-40 w-40 items-center flex justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>

                </div>

              </div>
            </div>
          </div>

        </div>

        <!-- Progress line -->
        <div class="flex justify-center py-3">
          <div class="w-3/4 border-t-4 border-primary relative">
            <div class="absolute left-0 top-0 -mt-[9px] w-4 h-4 bg-white border-4 border-primary rounded-full"></div>
            <div class="absolute left-1/2 top-0 -mt-[9px] transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full"></div>
            <div class="absolute right-0 top-0 -mt-[9px] w-4 h-4 bg-white border-4 border-primary rounded-full"></div>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-6 mt-6 text-primary text-center">
          <div class="">
            <div class="border-title mx-auto"></div>
            <h3 class="my-6 font-medium text-lg capitalize">hotel bookings & perks</h3>
            <p class="text-sm font-light">We’ll help you find your perfect hotel and get your booking squared away. And did we mention that you’ll get exclusive perks & upgrades at no extra cost? Count us in.</p>
          </div>
          <div class="">
            <div class="border-title mx-auto"></div>
            <h3 class="my-6 font-medium text-lg capitalize">custom itinerary planning</h3>
            <p class="text-sm font-light">Our expert advisors will customize your trip itinerary so your travel experience is as unique as you. Whether you need a hotel booking or full itinerary planning, we got you.</p>
          </div>
          <div class="">
            <div class="border-title mx-auto"></div>
            <h3 class="my-6 font-medium text-lg capitalize">personalized travel support</h3>
            <p class="text-sm font-light">Find an advisor who gets your vibe, and collaborate to bring your dream trip to life. You’ll have unlimited messaging with your advisor to make sure your trip is top-notch.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="">
    <div class="grid grid-cols-12">
      <div class="col-span-5 overflow-hidden h-[700px] 2xl:h-[1200px]">
        <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964235902portada%20gotoperu%20sacred_1708964236.jpg" class="parallax-image w-full"></nuxt-img>
      </div>
      <div class="col-span-7 grid items-center text-white bg-primary p-24">
        <div class="">
          <div class="border-title-sm mb-2"></div>
          <h2 class="text-3xl font-semibold mb-6">Book with MAPI</h2>
          <p class=" tracking-widest font-light w-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam culpa debitis dignissimos distinctio dolorem eligendi eum fugit necessitatibus nisi omnis ratione repellendus, saepe sequi! Explicabo itaque sed tempore.</p>

          <button class="btn-secondary mt-6">Get Started</button>
        </div>
      </div>
    </div>
  </section>




</template>

<style scoped>


</style>