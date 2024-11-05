<script setup lang="ts">
import Angie from "~/components/page/video/Angie.vue";

const { $gsap } = useNuxtApp()
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {usePackageStore} from "~/stores/packages";
import PopularPackages from "~/components/packages/PopularPackages.vue";
import Fiorella from "~/components/page/video/Fiorella.vue";

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
      <div class="mask gradient-cicle-beige"></div>
      <video autoplay muted loop class="absolute inset-0 w-full  h-full object-cover">
        <source src="/videos/banner-mapi3.mp4" type="video/mp4" />
        Tu navegador no soporta el video en HTML5.
      </video>

      <div class="relative z-10 flex items-center ml-52 pt-16 2xl:pt-0 md:mt-0  w-full h-full text-left">
<!--        <h2 class="text-white text-xl md:text-3xl container font-medium ">THE BEST VACATION IN <span class="text-primary">PERU</span> <span class="text-secondary">WITH THE BEST</span> PERUVIAN OPERATOR</h2>-->
        <div class=" container ">
<!--          Explora Perú <br>-->
          <div class="border-title mb-2"></div>
          <h1 class="text-white/80 drop-shadow-[0_0_1px_rgba(255,255,255,0.5)] leading-tight text-5xl 2xl:text-7xl tracking-wide ">
          Libertad. <br>
            Aventura. <br>
          Posibilidades.</h1>

          <p class="text-white text-xl 2xl:text-2xl tracking-widest font-light mt-8 font-parisienne">Para aquellos que quieren ir más allá.</p>

          <button class="btn-ternary mt-12">Inquire Now</button>
        </div>


      </div>
    </div>


  <section class="bg-tertiary bg-opacity-10 py-6">
    <div class="container grid grid-cols-5 gap-6">
      <div class="text-center">
<!--        <nuxt-img src="/images/icons/mapi.svg" class="mx-auto h-16"></nuxt-img>-->
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="feather" class="mx-auto h-16">
          <path d="M141.7,348.1c4.2-23,7.9-46.2,12.5-69.1c9.8-48.4,34.1-94.5,66.8-131.3c32.8-36.9,74.8-65.4,121.5-81.7
					c25.2-8.8,51.9-14.5,77.7-21.3c26.7-7,53.6-13.4,80.1-20.9c0.5-0.1,1-0.3,1.5-0.4c9.3-2.4,5.4-16.9-4-14.5
					c-23.6,6.2-47.1,12.3-70.7,18.5c-25,6.5-50.3,12.4-75,19.7c-48.8,14.5-93.8,41.3-129.8,77.3c-36,36-62.7,80.9-77.2,129.6
					c-8.4,28.3-12.1,58-17.4,87c-0.2,1-0.4,2.1-0.6,3.1C125.5,353.5,140,357.6,141.7,348.1L141.7,348.1z"></path>
          <path d="M139.5,347.8c22.9-1.9,45.8-3.8,68.6-5.7c11.4-1,22.9-1.9,34.3-2.9c20.3-1.7,39.6-7.1,58.5-14.5
					c29-11.2,55.9-26.7,80.4-45.8c2.1-1.6,2.5-4.9,1.9-7.3c-5.4-22.9-10.8-45.7-16.1-68.6c-2.4,3.2-4.8,6.3-7.2,9.5
					c15.9,0,31.9,0,47.8,0c9,0,17.9,0,26.9,0c1.7,0,3.4,0.1,5.1,0c4.6-0.3,6.8-3.9,9.4-7.2c2.7-3.4,5.3-6.9,7.8-10.4
					c26.1-36.6,32.2-82.6,40.4-125.7c3.3-17,6.5-34.1,9.8-51.1c1.8-9.4-11.8-13.4-14.5-4c-7,24.3-26.1,45.3-44.3,63
					c-25.7,25-54.4,46.9-83.1,68.4c-69,51.5-141.2,100.1-203.1,160.3c-37.9,36.9-72.9,79.2-90.9,129.6c-3.3,9.1,11.2,13,14.5,4
					c16-44.5,46.6-82.4,79.6-115.6c31-31.2,65.3-59.2,100.2-85.9c33.8-25.8,68.3-50.5,102.5-75.8c29.6-22,59.3-44.4,86.1-69.7
					c21.8-20.6,44.4-44.8,52.9-74.3c-4.8-1.3-9.6-2.7-14.5-4c-3.9,20.2-7.7,40.5-11.6,60.7c-4.6,24.3-9.1,48.5-16.6,72.1
					c-6.3,19.7-16.9,36.8-29.9,52.8c1.8-0.7,3.5-1.5,5.3-2.2c-26.6,0-53.2,0-79.8,0c-5,0-8.3,4.8-7.2,9.5
					c5.4,22.9,10.8,45.7,16.1,68.6c0.6-2.4,1.3-4.9,1.9-7.3c-21,16.4-44.4,30-69,40.1c-18.8,7.6-38.4,14.1-58.7,15.8
					c-25.5,2.1-51,4.3-76.5,6.4c-9.1,0.8-18.1,1.5-27.2,2.3C129.9,333.6,129.8,348.6,139.5,347.8L139.5,347.8z"></path>
          <g>
            <path d="M187.4,439.2c-2.1,2.1-4.2,4.2-6.3,6.3c-2.1,2.1-4.2,4.9-6.7,6.3c-7,3.9-13-5-17.3-9.3c-6.6-6.6-13.1-13.1-23.4-12.5
					c-8.9,0.5-14.5,6.3-20.3,12.1c-5.5,5.5-11.1,11.1-16.6,16.6c-1.7,1.7-3.3,3.6-5.8,4.2c-4.1,1-6.8-1.4-9.5-4.1
					c-7.6-7.6-15.7-14.2-27.3-11.2c-6.5,1.7-10.8,6.5-15.4,11.1C28.1,469.4,17.5,480,6.9,490.6c-6.8,6.8,3.8,17.4,10.6,10.6
					c9.3-9.3,18.6-18.6,27.8-27.8c3.1-3.1,6.2-6.9,9.7-9.7c7.2-5.6,13.1,3.5,17.8,7.8c9.5,8.8,23.1,8.6,32.5-0.2
					c4.9-4.6,9.6-9.6,14.4-14.4c3.5-3.5,8.3-10.5,13.4-11.8c6.7-1.7,12.7,7.3,16.8,11.4c2.8,2.8,5.4,5.8,8.8,7.8
					c6.3,4,14.5,4.3,21.2,1.4c7.2-3.2,12.8-10.5,18.2-16C204.8,442.9,194.2,432.3,187.4,439.2L187.4,439.2z"></path>
          </g>
        </svg>
        <h3 class="font-semibold mt-4">Machu Picchu</h3>
        <p class="font-light">for world famous ancient ruins and fascinating insights into the Incan Empire</p>
      </div>
      <div class="text-center">
        <nuxt-img src="/images/icons/ceviche.svg" class="mx-auto h-16"></nuxt-img>
        <h3 class="font-semibold mt-4">Ceviche</h3>
        <p class="font-light">made from fresh fish and marinated in lime juice is just one of Peru's many gourmet delights</p>
      </div>
      <div class="text-center">
        <nuxt-img src="/images/icons/hiking.svg" class="mx-auto h-16"></nuxt-img>
        <h3 class="font-semibold mt-4">Hiking</h3>
        <p class="font-light">biking, horse riding and ancient ruins in the Sacred Valley</p>
      </div>
      <div class="text-center">
        <nuxt-img src="/images/icons/loro.svg" class="mx-auto h-16"></nuxt-img>
        <h3 class="font-semibold mt-4">Peruvian Amazon</h3>
        <p class="font-light">for luxury cruises, secluded lodge retreats, canopy walkways and plenty of incredible wildlife</p>
      </div>
      <div class="text-center">
        <nuxt-img src="/images/icons/sun.svg" class="mx-auto h-16"></nuxt-img>
        <h3 class="font-semibold mt-4">Northern Beaches</h3>
        <p class="font-light">for relaxation and sunset cruises on Peru's rugged coastline</p>
      </div>
    </div>
  </section>


  <section class="container mt-32 mb-12">
    <div class="text-center text-primary">
      <div class="border-title mb-2 mx-auto"></div>
      <h1 class="font-semibold text-4xl mb-6 title ">Peru, upgraded</h1>
      <p class="text-lg tracking-widest font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa deleniti dolor earum mollitia nulla quo reprehenderit tempore? Aspernatur atque consequatur culpa cum natus nulla odit ullam velit vero voluptas.</p>
    </div>
  </section>
  <section class="container mb-32">
    <div class="grid grid-cols-12 gap-6 items-center">
      <div class="col-span-4 text-primary">
        <div class="border-title mb-2"></div>
        <h2 class="text-3xl font-semibold mb-6 ">En búsqueda de <br> nuevas <br> experiencias</h2>
        <p class="tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam culpa debitis dignissimos distinctio dolorem eligendi eum fugit necessitatibus nisi omnis ratione repellendus, saepe sequi! Explicabo itaque sed tempore.</p>
        <div class="grid gap-6 mt-6">
          <Fiorella></Fiorella>
          <Angie></Angie>
        </div>
      </div>
      <div class="col-span-8 overflow-hidden relative parallax-container h-[920px] 2xl:h-[1100px]">
        <nuxt-img src="/images/home/angi-maja.jpg"  class="parallax-image absolute top-0 left-0 w-full h-auto"></nuxt-img>
      </div>
    </div>
  </section>

  <div class="container mb-12">
    <div class="grid grid-cols-12 text-primary gap-6 items-center">
      <div class="col-span-4">
        <div class="border-title mb-2 "></div>
        <h1 class="font-semibold text-4xl mb-6 ">Trip Inspiration</h1>
      </div>
      <div class="col-span-8 border-l-2 px-6">
        <p class=" tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa deleniti dolor earum mollitia nulla quo reprehenderit tempore? Aspernatur atque consequatur culpa cum natus nulla odit ullam velit vero voluptas.</p>
      </div>
    </div>
  </div>


  <PopularPackages :listPackages="listPackages"></PopularPackages>
  <div class="container mt-6 text-right">
    <button class="btn-primary-outline">View more</button>
  </div>


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

            <nuxt-link to="/destinations/peru/accommodation" class="relative group overflow-hidden">
              <div class="overflow-hidden relative">
              <nuxt-img src="/images/hotels/1.jpg" class="object-cover h-[550px] w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
                <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
              </div>
              <div class="absolute bottom-0 left-0  z-10 group-hover:bg-secondary backdrop-blur-sm  text-white rounded px-6 py-3 transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105">
                <div class="border-title-sm mb-2"></div>
                <h3 class="">Hotel B, <span class="italic text-sm">Lima</span></h3>
                <p class="text-sm font-light">Combining intimate, modern hospitality with stylish, historical elegance, Hotel B offers both a polished and d... </p>
              </div>
            </nuxt-link>
          <nuxt-link to="/destinations/peru/accommodation" class="relative group overflow-hidden">
              <div class="overflow-hidden relative">
                <nuxt-img src="/images/hotels/2.jpg" class="object-cover h-[550px] w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
                <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
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
            <div class="overflow-hidden relative">
              <nuxt-img src="/images/hotels/3.jpg" class="w-full  h-[450px] 2xl:h-[550px] object-cover object-center"></nuxt-img>
              <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
            </div>

            <div class="absolute bottom-0 left-0 z-10 group-hover:bg-secondary backdrop-blur-lg text-white rounded px-6 py-3 transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105">
              <div class="border-title-sm mb-2"></div>
              <h3 class="">Hotel B, <span class="italic text-sm">Colca Canyon</span></h3>
              <p class="text-sm font-light">Nestled deep within the Colca Valley, PUQIO is set in a landscape where volcanoes, expansive grasslands, and u...  </p>
            </div>
          </nuxt-link>

          <nuxt-link to="/destinations/peru/accommodation" class="relative group h-[450px] 2xl:h-[550px] overflow-hidden">
            <div class="overflow-hidden relative">
              <nuxt-img src="https://gotoperu.com/images/hotels/banner.webp" class="w-full  h-[450px] 2xl:h-[550px] object-cover"></nuxt-img>
              <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
            </div>

            <div class="absolute w-full bottom-0 left-0  z-10 group-hover:bg-secondary backdrop-blur-lg  text-white rounded px-6 py-3 transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105">
              <div class="border-title-sm mb-2"></div>
              <h3 class="truncate">Inkaterra Machu Pichu Pueblo Hotel , <span class="italic text-sm">Machu Picchu</span></h3>
              <p class="text-sm font-light">The hotel consists of several whitewashed cottages in an Andean village located in the heart of Aguas Calientes, p... </p>
            </div>
          </nuxt-link>
          <nuxt-link to="/destinations/peru/accommodation" class="relative group h-[450px] 2xl:h-[550px] overflow-hidden">
            <div class="overflow-hidden relative">
              <nuxt-img src="/images/hotels/4.jpg" class="w-full  h-[450px] 2xl:h-[550px] object-cover"></nuxt-img>
              <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
            </div>

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

  <section class="container my-32">
    <div class="grid grid-cols-12 gap-6 items-center">
      <div class="col-span-8 overflow-hidden relative parallax-container h-[920px] 2xl:h-[1000px] group">
        <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964114497portada gotoperu machupicchu_1708964115.jpg"  class="parallax-image absolute top-0 left-0 w-full h-auto"></nuxt-img>
        <div class="absolute bottom-0 left-0 m-6 z-20 group-hover:bg-secondary backdrop-blur-sm bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out">
          Machu Picchu
        </div>
        <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
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
        <div class="overflow-hidden relative">
          <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964376528portada gotoperu lima_1708964377.jpg" class="object-cover  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
        </div>

        <div class="absolute bottom-0 left-0 m-6 z-10 group-hover:bg-secondary backdrop-blur-sm bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out">
          Lima
        </div>
      </div>

      <div class="relative group">
        <div class="overflow-hidden relative">
          <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708963976885portada gotoperu cusco 2_1708963977.jpg" class="object-cover  w-full transition duration-500 ease-in-out transform group-hover:-translate-x-0 group-hover:scale-105"></nuxt-img>
        </div>
        <div class="absolute bottom-0 left-0 m-6 z-10 group-hover:bg-secondary backdrop-blur-sm bg-primary/40 text-white rounded px-6 py-3 transition duration-500 ease-in-out">
          Cusco
        </div>
      </div>

      <div class="relative group">
        <div class="overflow-hidden relative">
          <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
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

  <section class="mt-32 bg-tertiary bg-opacity-10">
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
                <div class=" bg-secondary rounded-full h-40 w-40 items-center flex justify-center mx-auto">
<!--                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14 text-white">-->
<!--                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />-->
<!--                  </svg>-->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="hotels" class="size-16 opacity-70">
                    <path fill="#cae6f7" d="M37.5 168.5h119a30 30 0 0 1 30 30v306H7.5v-306a30 30 0 0 1 30-30zm318 0h119a30 30 0 0 1 30 30v306h-179v-306a30 30 0 0 1 30-30z"></path>
                    <path fill="#b8dff7" d="M474.5 168.5h-45a30 30 0 0 1 30 30v306h45v-306a30 30 0 0 0-30-30zm-323-71h209a30 30 0 0 1 30 30v377h-269v-377a30 30 0 0 1 30-30z"></path>
                    <rect width="179" height="179" x="166.5" y="7.5" fill="#bcd44c" rx="30"></rect>
                    <path fill="#aece44" d="M315.5 7.5h-30a30 30 0 0 1 30 30v119a30 30 0 0 1-30 30h30a30 30 0 0 0 30-30v-119a30 30 0 0 0-30-30Z"></path>
                    <path fill="#e1e1e3" d="M255.818 59.274a14.944 14.944 0 0 1 14.944 14.945v13.486h-29.889V74.22a14.944 14.944 0 0 1 14.945-14.945Z"></path>
                    <path fill="#fff" d="M255.089 84.425h1.458a50.3 50.3 0 0 1 50.3 50.3h-102.06a50.3 50.3 0 0 1 50.302-50.3Z"></path>
                    <path fill="#8b8893" d="M239 343.5h34a30 30 0 0 1 30 30v131h-94v-131a30 30 0 0 1 30-30Z"></path>
                    <path fill="#787681" d="M273 343.5h-30a30 30 0 0 1 30 30v131h30v-131a30 30 0 0 0-30-30Z"></path>
                    <rect width="67" height="67" x="166.5" y="231.5" fill="#52bbe9" rx="4"></rect>
                    <path fill="#1cabe1" d="M229.5 231.5h-30a4 4 0 0 1 4 4v59a4 4 0 0 1-4 4h30a4 4 0 0 0 4-4v-59a4 4 0 0 0-4-4Z"></path>
                    <rect width="67" height="67" x="278.5" y="231.5" fill="#52bbe9" rx="4"></rect>
                    <path fill="#1cabe1" d="M341.5 231.5h-30a4 4 0 0 1 4 4v59a4 4 0 0 1-4 4h30a4 4 0 0 0 4-4v-59a4 4 0 0 0-4-4Z"></path>
                    <path fill="#52bbe9" d="M390.5 231.5h63a4 4 0 0 1 4 4v59a4 4 0 0 1-4 4h-63v-67Z"></path>
                    <path fill="#1cabe1" d="M453.5 231.5h-30a4 4 0 0 1 4 4v59a4 4 0 0 1-4 4h30a4 4 0 0 0 4-4v-59a4 4 0 0 0-4-4Z"></path>
                    <path fill="#52bbe9" d="M58.5 231.5h63v67h-63a4 4 0 0 1-4-4v-59a4 4 0 0 1 4-4Z"></path>
                    <path fill="#1cabe1" d="M91.5 231.5h30v67h-30z"></path>
                    <path fill="#52bbe9" d="M390.5 351.5h63a4 4 0 0 1 4 4v59a4 4 0 0 1-4 4h-63v-67Z"></path>
                    <path fill="#1cabe1" d="M453.5 351.5h-30a4 4 0 0 1 4 4v59a4 4 0 0 1-4 4h30a4 4 0 0 0 4-4v-59a4 4 0 0 0-4-4Z"></path>
                    <path fill="#52bbe9" d="M58.5 351.5h63v67h-63a4 4 0 0 1-4-4v-59a4 4 0 0 1 4-4Z"></path>
                    <path fill="#1cabe1" d="M91.5 351.5h30v67h-30z"></path>
                    <path fill="#3c3b41" d="M233.5 224h-67a7.5 7.5 0 0 0-7.5 7.5v67a7.5 7.5 0 0 0 7.5 7.5h67a7.5 7.5 0 0 0 7.5-7.5v-67a7.5 7.5 0 0 0-7.5-7.5Zm-7.5 67h-52v-52h52Zm248.5-130H398v-33.5A37.542 37.542 0 0 0 360.5 90H353V37.5A37.542 37.542 0 0 0 315.5 0h-119A37.542 37.542 0 0 0 159 37.5V90h-7.5a37.542 37.542 0 0 0-37.5 37.5V161H37.5A37.542 37.542 0 0 0 0 198.5v306a7.5 7.5 0 0 0 7.5 7.5h497a7.5 7.5 0 0 0 7.5-7.5v-306a37.542 37.542 0 0 0-37.5-37.5ZM114 411H62v-52h52Zm0-120H62v-52h52Zm0-67H54.5a7.5 7.5 0 0 0-7.5 7.5v67a7.5 7.5 0 0 0 7.5 7.5H114v38H54.5a7.5 7.5 0 0 0-7.5 7.5v67a7.5 7.5 0 0 0 7.5 7.5H114v71H15V198.5A22.525 22.525 0 0 1 37.5 176H114Zm60-186.5A22.525 22.525 0 0 1 196.5 15h119A22.526 22.526 0 0 1 338 37.5v119a22.526 22.526 0 0 1-22.5 22.5h-119a22.525 22.525 0 0 1-22.5-22.5ZM295.5 497h-79V373.5A22.525 22.525 0 0 1 239 351h34a22.526 22.526 0 0 1 22.5 22.5Zm87.5 0h-72.5V373.5A37.542 37.542 0 0 0 273 336h-34a37.542 37.542 0 0 0-37.5 37.5V497H129V127.5a22.525 22.525 0 0 1 22.5-22.5h7.5v51.5a37.542 37.542 0 0 0 37.5 37.5h119a37.542 37.542 0 0 0 37.5-37.5V105h7.5a22.526 22.526 0 0 1 22.5 22.5Zm15-258h52v52h-52Zm0 120h52v52h-52Zm99 138h-99v-71h59.5a7.5 7.5 0 0 0 7.5-7.5v-67a7.5 7.5 0 0 0-7.5-7.5H398v-38h59.5a7.5 7.5 0 0 0 7.5-7.5v-67a7.5 7.5 0 0 0-7.5-7.5H398v-48h76.5a22.526 22.526 0 0 1 22.5 22.5ZM194.217 142.226h123.565a7.5 7.5 0 1 0 0-15h-3.937a57.958 57.958 0 0 0-35.585-46.052V74.22a22.445 22.445 0 1 0-44.89 0v6.956a57.957 57.957 0 0 0-35.58 46.05h-3.573a7.5 7.5 0 0 0 0 15ZM248.37 74.22a7.458 7.458 0 0 1 7.45-7.45 7.454 7.454 0 0 1 7.44 7.45v3.108a58.041 58.041 0 0 0-6.713-.403h-1.458a58.041 58.041 0 0 0-6.719.404Zm6.719 17.705h1.458a42.872 42.872 0 0 1 42.142 35.3h-85.743a42.873 42.873 0 0 1 42.143-35.3ZM345.5 224h-67a7.5 7.5 0 0 0-7.5 7.5v67a7.5 7.5 0 0 0 7.5 7.5h67a7.5 7.5 0 0 0 7.5-7.5v-67a7.5 7.5 0 0 0-7.5-7.5Zm-7.5 67h-52v-52h52Z"></path>
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
                <div class=" bg-secondary rounded-full h-40 w-40 items-center flex justify-center mx-auto">
<!--                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14 text-white">-->
<!--                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />-->
<!--                  </svg>-->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="clipboard" class="size-16 opacity-70">
                    <path fill="#ff9e68" d="M20.5 3.5h5c1.1 0 2 .9 2 2v24c0 1.1-.9 2-2 2h-19c-1.1 0-2-.9-2-2v-24c0-1.1.9-2 2-2h5"></path>
                    <path fill="#fff" d="M22.5 5.5h3v24h-19v-24h3"></path>
                    <path fill="#898b99" d="M17.4 2.5c.1-.2.1-.3.1-.5 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .2 0 .3.1.5h-3.1v3h9v-3h-3.1z"></path>
                    <path fill="#67acd5" d="M8.5 7.5h6v6h-6z"></path>
                    <path fill="#a3d86b" d="M8.5 15.5h15v2h-15zm0 10h9v2h-9z"></path>
                    <path fill="#40455a" d="M22.5 27h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path>
                    <path fill="#40455a" d="M21.5 25h-1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h3c.3 0 .5.2.5.5s-.2.5-.5.5h-3c-.3 0-.5.2-.5.5s.2.5.5.5h1c.3 0 .5.2.5.5s-.2.5-.5.5z"></path>
                    <path fill="#40455a" d="M21.5 23c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5s.5.2.5.5v1c0 .3-.2.5-.5.5zm0 5c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5s.5.2.5.5v1c0 .3-.2.5-.5.5z"></path>
                    <path fill="#40455a" d="M25.5 32h-19C5.1 32 4 30.9 4 29.5v-24C4 4.1 5.1 3 6.5 3h5c.3 0 .5.2.5.5s-.2.5-.5.5h-5C5.7 4 5 4.7 5 5.5v24c0 .8.7 1.5 1.5 1.5h19c.8 0 1.5-.7 1.5-1.5v-24c0-.8-.7-1.5-1.5-1.5h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5C26.9 3 28 4.1 28 5.5v24c0 1.4-1.1 2.5-2.5 2.5z"></path>
                    <path fill="#40455a" d="M25.5 30h-19c-.3 0-.5-.2-.5-.5v-24c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5H7v23h18V6h-2.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5.2.5.5v24c0 .3-.2.5-.5.5z"></path>
                    <path fill="#40455a" d="M20.5 6h-9c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5H14c0-1.1.9-2 2-2s2 .9 2 2h2.5c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5zM12 5h8V3h-2.6c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.5.1-.1.1-.2.1-.3 0-.6-.4-1-1-1s-1 .4-1 1c0 .1 0 .2.1.3.1.2 0 .3-.1.5-.1.1-.2.2-.4.2H12v2zm2.5 9h-6c-.3 0-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v6c0 .3-.2.5-.5.5zM9 13h5V8H9v5zm12.5 1h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5zm-1-4h-4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h4c.3 0 .5.2.5.5s-.2.5-.5.5zm3 0h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5zm0 10h-13c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h13c.3 0 .5.2.5.5s-.2.5-.5.5zm-15 0h-.2c-.1 0-.1-.1-.2-.1-.1-.1-.1-.3-.1-.4s0-.3.1-.4c0 0 .1-.1.2-.1.2-.1.4 0 .5.1.1.1.2.3.2.4s-.1.3-.2.3c0 0-.1.1-.2.1 0 .1 0 .1-.1.1zm9 2h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5zm-9 0h-.2c-.1 0-.1-.1-.2-.1s-.1-.1-.1-.2v-.4c0-.1.1-.1.1-.2.2-.1.4-.1.6-.1.1 0 .1.1.2.1s.1.1.1.2v.4c0 .1-.1.1-.1.2-.1.1-.3.1-.4.1zm9 2h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5zm-9 0h-.2c-.1 0-.1-.1-.2-.1-.1-.1-.1-.3-.1-.4s0-.3.1-.4c.2-.1.4-.1.6-.1.1 0 .1.1.2.1s.1.1.1.2v.2c0 .1-.1.3-.2.3 0 0-.1.1-.2.1 0 .1 0 .1-.1.1zm15-12h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5zm0 6h-15c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5zM9 17h14v-1H9v1zm8.5 11h-9c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h9c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5zM9 27h8v-1H9v1zM23.5 8h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5z"></path>
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
              <div class="">
                <!--                <img src="https://epic.travel/wp-content/uploads/2019/05/talk-icon-blue.svg" alt="Phone Icon" class="rounded-full w-full">-->
                <div class=" bg-secondary rounded-full h-40 w-40 items-center flex justify-center mx-auto">
<!--                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14 text-white">-->
<!--                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />-->
<!--                  </svg>-->

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="customer" class="size-16 opacity-70">
                    <path fill="#5c5e70" d="M6.5 11.5V13h-1c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1H6m11.5 1.5V13h1c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1H18"></path>
                    <path fill="#a17852" d="M17.2 10.8h.3l1-2.8c.3-1.3-.7-2.5-2-2.5 0-1.5-1.4-2.7-2.9-2.4l-6 1C6.2 4.2 5.3 5.6 5.5 7l1 3.8h.3"></path>
                    <path fill="#67acd5" d="m9.1 19.8-4.7 1.6c-1.7.6-2.9 2.2-2.9 4V29h21v-3.7c0-1.8-1.2-3.4-2.9-4l-4.7-1.6"></path>
                    <path fill="#5791d1" d="M22.5 29v-3.7c0-.8-.2-1.5-.6-2.2-2.5.3-4.4 2.4-4.4 5v.9h5zm-21 0v-3.7c0-.8.2-1.5.6-2.2 2.5.3 4.4 2.4 4.4 5v.9h-5z"></path>
                    <path fill="#fed8aa" d="M17.1 10.8c-.5 0-.9-.4-.9-.9V8.2c0-.4-.4-.6-.7-.3-1.7 1.3-4 1.8-6.1 1.4l-.8-.2c-.5 0-.9.4-.9.9s-.4.9-.9.9h-.3v1.7c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5v-1.7h-.4z"></path>
                    <path fill="#fed8aa" d="M9 17.3v2.1c0 1.6 3 2.9 3 2.9s2.9-1.3 2.9-2.9v-2.1"></path>
                    <path fill="#fff" d="M29.5 6h-7c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h1v2l3-2h3c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1z"></path>
                    <path fill="#40455a" d="M28.4 8.5h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5zm-2 2h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5zM12 22.8h-.2c-.3-.1-3.2-1.5-3.2-3.4v-2.1c0-.3.2-.5.5-.5s.5.2.5.5v2.1c0 1 1.6 2 2.4 2.4.8-.4 2.4-1.4 2.4-2.4v-2.1c0-.3.2-.5.5-.5s.5.2.5.5v2.1c0 1.9-2.9 3.2-3.2 3.4H12z"></path>
                    <path fill="#40455a" d="M12 18.5c-3.3 0-6-2.7-6-6V11c0-.3.2-.5.5-.5s.5.2.5.5v1.5c0 2.8 2.2 5 5 5s5-2.2 5-5V11c0-.3.2-.5.5-.5s.5.2.5.5v1.5c0 3.3-2.7 6-6 6z"></path>
                    <path fill="#40455a" d="M17.5 11.3h-.3c-.3 0-.5-.2-.5-.5s.2-.5.4-.5l.9-2.5c.1-.4 0-.9-.3-1.2-.3-.4-.8-.6-1.2-.6-.3 0-.5-.2-.5-.5 0-.6-.3-1.2-.7-1.6s-1-.5-1.6-.4l-6 1c-.5.1-1 .4-1.3.8-.3.5-.5 1-.4 1.6l.9 3.4c.2 0 .4.2.4.5s-.2.5-.5.5h-.3c-.2 0-.4-.2-.5-.4L5 7.1c-.2-.8 0-1.6.5-2.3.5-.7 1.2-1.1 2-1.2l6-1c.9-.1 1.7.1 2.4.7.6.5.9 1.2 1 1.9.6 0 1.1.3 1.5.8.5.6.7 1.4.5 2.1l-1 2.8c0 .2-.2.4-.4.4z"></path>
                    <path fill="#40455a" d="M17.4 11.3h-.3c-.7 0-1.4-.6-1.4-1.4V8.4c-1.8 1.3-4.2 1.8-6.4 1.4l-.8-.2c-.1 0-.3.2-.3.4 0 .7-.6 1.4-1.4 1.4h-.2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h.3c.2 0 .4-.2.4-.4 0-.7.6-1.4 1.4-1.4l1 .2c2 .4 4.1-.1 5.7-1.3.3-.2.7-.2 1-.1s.5.5.5.8v1.7c0 .2.2.4.4.4h.3c.3 0 .5.2.5.5s-.4.5-.7.5zm5.1 18.2h-21c-.3 0-.5-.2-.5-.5v-3.7c0-2 1.3-3.8 3.2-4.5l4.7-1.6c.3-.1.5.1.6.3.1.3-.1.5-.3.6l-4.7 1.6c-1.5.6-2.5 2-2.5 3.6v3.2h20v-3.2c0-1.6-1-3-2.5-3.5l-4.7-1.6c-.3-.1-.4-.4-.3-.6.1-.3.4-.4.6-.3l4.7 1.6c1.9.6 3.2 2.4 3.2 4.5V29c0 .3-.2.5-.5.5z"></path>
                    <path fill="#40455a" d="M22.5 29.5h-5c-.3 0-.5-.2-.5-.5v-.8c0-2.8 2.1-5.2 4.9-5.5.2 0 .4.1.5.2.4.7.7 1.6.7 2.4V29c-.1.3-.3.5-.6.5zm-4.5-1h4v-3.2c0-.5-.1-1.1-.4-1.6-2.1.4-3.6 2.3-3.6 4.5v.3zm-11.5 1h-5c-.3 0-.5-.2-.5-.5v-3.7c0-.8.2-1.7.7-2.4.1-.2.3-.3.5-.2C4.9 23 7 25.4 7 28.2v.8c0 .3-.2.5-.5.5zm-4.5-1h4v-.3c0-2.2-1.6-4-3.7-4.5-.2.5-.3 1.1-.3 1.6v3.2zm15-12.4h-3.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H17c1.1 0 2-.9 2-2v-1.7c0-.3.2-.5.5-.5s.5.2.5.5v1.7c0 1.6-1.4 3-3 3zM6.5 13.5h-1c-.8 0-1.5-.7-1.5-1.5v-1c0-.8.7-1.5 1.5-1.5H6c.3 0 .5.2.5.5s-.2.5-.5.5h-.5c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5H6v-1c0-.3.2-.5.5-.5s.5.2.5.5V13c0 .3-.2.5-.5.5z"></path>
                    <path fill="#40455a" d="M18.5 13.5h-1c-.3 0-.5-.2-.5-.5v-1.5c0-.3.2-.5.5-.5s.5.2.5.5v1h.5c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5H18c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h.5c.8 0 1.5.7 1.5 1.5v1c0 .8-.7 1.5-1.5 1.5zm5 1c-.1 0-.2 0-.2-.1-.2-.1-.3-.2-.3-.4v-1.5h-.5c-.8 0-1.5-.7-1.5-1.5V7c0-.8.7-1.5 1.5-1.5h7c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5h-2.8l-2.9 1.9c-.1.1-.2.1-.3.1zm-1-8c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h1c.3 0 .5.2.5.5v1.1l2.2-1.5c.1-.1.2-.1.3-.1h3c.3 0 .5-.2.5-.5V7c0-.3-.2-.5-.5-.5h-7z"></path>
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
      <div class="col-span-5 overflow-hidden h-[700px] 2xl:h-[1200px] relative">
        <div class="absolute inset-0 gradient-cicle-beige z-10"></div>
        <nuxt-img src="/images/home/footer-maja.jpg" class="parallax-image h-[800px] 2xl:h-[1400px] object-cover"></nuxt-img>
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