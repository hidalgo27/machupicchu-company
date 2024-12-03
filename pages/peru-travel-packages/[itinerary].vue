<script lang="ts" setup>
import Itinerary from "~/components/page/detail/Itinerary.vue";

const { $gsap } = useNuxtApp()
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide} from "vue3-carousel"
import {usePackageStore} from "~/stores/packages";
import {useFormStore} from "~/stores/form";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Fiorella from "~/components/page/video/Fiorella.vue";
import Angie from "~/components/page/video/Angie.vue";
import CarouselHotelDetail from "~/components/page/detail/CarouselHotelDetail.vue";

definePageMeta({
  layout: 'custom'
})
// setPageLayout('custom')
useHead({
  script: [ { src: 'https://cdn.wetravel.com/widgets/embed_checkout.js' } ]
})


const packageStore = usePackageStore()
const formStore = useFormStore()

const listTeam = ref([])

const breakpoints = {
  // 500px and up
  350: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
  // 700px and up
  700: {
    itemsToShow: 2.2,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
}


// import InquireHome from "~/components/form/InquireHome.vue";


const triggerButton = ref(null);
const targetButton = ref(null);



const route = useRoute()

const router = useRouter()

const codeWetravel = ref()
const viewButton = ref(false)


const listPackages = ref([])

const showCount = ref({})

const currentItem = ref(null); //
const viewPopover = ref()// índice del ítem actualmente abierto

const randomColorClasses = ['bg-primary', 'bg-secondary', 'bg-gray-800', 'bg-yellow-500', 'bg-indigo-500'];

const randomColorBorder = ['border-primary','border-primary', 'border-secondary', 'border-gray-800', 'border-yellow-500', 'border-indigo-500'];

const clickOtherButton = async (item:any) => {
  // @ts-ignore
  codeWetravel.value = item
  await nextTick();
  targetButton.value.click();
};

const targetAction = () => {
  console.log('Botón objetivo clickeado!');
};

const getQuote = (item) => {
  router.push("#form-dream-adventure")
  packageStore.hotelDetail = item
}

function openPopover(val){
  if (val){
    viewPopover.value = val
  }else {
    viewPopover.value = 0
  }
}
function closePopover(val){
  setTimeout(() => {
    if (mouseIsOverPopover) {
      if (val){
        viewPopover.value = 0
      }
    }
  }, 100);

}


const mouseIsOverPopover = ref(false)

const items = ref([
  { title: 'Título 1', content: 'Contenido 1' },
  { title: 'Título 2', content: 'Contenido 2' },
  { title: 'Título 3', content: 'Contenido 3' },
  { title: 'Título 4', content: 'Contenido 4' },
  { title: 'Título 5', content: 'Contenido 5' },
  { title: 'Título 6', content: 'Contenido 6' },
  { title: 'Título 7', content: 'Contenido 7' },
]);
const toggleItem = (index) => {
  if (currentItem.value === index) {
    currentItem.value = null;
  } else {
    currentItem.value = index;
  }
};

const displayedItems = ref(listPackages.value.slice(0, 2));

const loadMore = () => {
  let nextItems = items.value.slice(displayedItems.value.length, displayedItems.value.length + 2);
  // @ts-ignore
  displayedItems.value = [...displayedItems.value, ...nextItems];
};
const loadLess = () => {
  displayedItems.value = displayedItems.value.slice(0, displayedItems.value.length - 2);
};

const canLoadLess = computed(() => displayedItems.value.length > 2);

const canLoadMore = computed(() => items.value.length > displayedItems.value.length);


const getPackageItinerary = async (url:any) => {
  const res = await packageStore.getItinerary(url)
  listPackages.value = res

  formStore.titlePackages = res[0].titulo

  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}


const getThreeStarPrice = (arr:any) => {
  const price = arr.find((priceInfo: { estrellas: number; }) => priceInfo.estrellas === 3);
  return price ? price.precio_d : 'No disponible';
}

/*const capitalizeFirstLetter = (string) => {
  return string
      ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
      : '';
};*/

const getGroupedByCountry = (arr) => {
  const grouped = {};
  for (const paqueteDestino of arr) {
    const { destinos } = paqueteDestino;
    const { pais, nombre, id } = destinos;
    // @ts-ignore
    if (!grouped[pais]) {
      // @ts-ignore
      grouped[pais] = [];
    }
    // @ts-ignore
    grouped[pais].push({ nombre, id });
  }
  return grouped;
};

// const paisesUnicos = (destinos:any) => {
//   const paisesVistos = new Set();
//   return destinos.filter((destino: { destinos: { pais: any; }; }) => {
//     const pais = destino.destinos.pais;
//     if (!paisesVistos.has(pais.id)) {
//       paisesVistos.add(pais.id);
//       return true;
//     }
//     return false;
//   }).map((destino: { destinos: { pais: any; }; }) => destino.destinos.pais);
// };


// const obtenerDestinosPorPais = (paisId:number) => {
//   const destinos: any[] = [];
//   listPackages.value.forEach(paquete => {
//     paquete.paquetes_destinos.forEach((destino: { destinos: { pais: { id: number; }; }; }) => {
//       if (destino.destinos.pais.id === paisId) {
//         destinos.push(destino.destinos);
//       }
//     });
//   });
//   return destinos;
// };


const expand = (id) => {
  // @ts-ignore
  const totalLength = listPackages.value.find(p => p.id === id).paquete_itinerario.length;
  // @ts-ignore
  showCount.value[id] = Math.min(showCount.value[id] + 8, totalLength); // Aumentar de 2 en 2
};


const contract = (id) => {
  // @ts-ignore
  showCount.value[id] = Math.max(4, showCount.value[id] - 4); // Reducir de 2 en 2, mínimo 2
};


// const loadScript = () => {
//   const scriptExists = document.querySelector('script[src="https://cdn.wetravel.com/widgets/embed_checkout.js"]') !== null;
//   if (!scriptExists) {
//     const script = document.createElement('script');
//     script.src = 'https://cdn.wetravel.com/widgets/embed_checkout.js';
//     script.type = 'text/javascript';
//     script.async = true;
//     document.head.appendChild(script);
//   }
// }

const getTeam = async () => {
  const res:any = await packageStore.getTeam()


  listTeam.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}
const limitedTeam = computed(() => listTeam.value.slice(0, 7));



$gsap.registerPlugin(ScrollTrigger);





onMounted(async () => {
  await getTeam()
  // loadScript()
  // console.log(route)
  await getPackageItinerary(route.params.itinerary)
  listPackages.value.forEach(p => {
    // @ts-ignore
    showCount.value[p.id] = 15;
  });

  // await nextTick();
  codeWetravel.value = packageStore.code_w
  viewButton.value = true

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

  const firstImages = document.querySelectorAll('.first-image');
  const secondImages = document.querySelectorAll('.second-image');

  // Animación para las imágenes con la clase .first-image (de izquierda a derecha)
  firstImages.forEach((firstImage) => {
    firstImage.addEventListener('mouseenter', () => {
      $gsap.set(firstImage, { zIndex: 30 });
      $gsap.to(firstImage, {
        x: -20, // Mover 20px hacia la izquierda
        duration: 0.3,
        ease: "power1.inOut",
        onComplete: () => {
          $gsap.to(firstImage, {
            x: 20, // Volver hacia la derecha y superponerse
            duration: 0.3,
            ease: "power1.inOut",
          });
        }
      });
    });

    firstImage.addEventListener('mouseleave', () => {
      $gsap.to(firstImage, {
        x: 0, // Regresar a la posición original
        duration: 0.3,
        ease: "power1.inOut",
        onComplete: () => {
          $gsap.set(firstImage, { zIndex: 20 }); // Restablecer z-index después de la animación
        }
      });
    });
  });

  // Animación para las imágenes con la clase .second-image (de derecha a izquierda)
  secondImages.forEach((secondImage) => {
    secondImage.addEventListener('mouseenter', () => {
      $gsap.set(secondImage, { zIndex: 30 });
      $gsap.to(secondImage, {
        x: 20, // Mover 20px hacia la derecha
        duration: 0.3,
        ease: "power1.inOut",
        onComplete: () => {
          $gsap.to(secondImage, {
            x: -20, // Volver hacia la izquierda y superponerse
            duration: 0.3,
            ease: "power1.inOut",
          });
        }
      });
    });

    secondImage.addEventListener('mouseleave', () => {
      $gsap.to(secondImage, {
        x: 0, // Regresar a la posición original
        duration: 0.3,
        ease: "power1.inOut",
        onComplete: () => {
          $gsap.set(secondImage, { zIndex: 20 }); // Restablecer z-index después de la animación
        }
      });
    });
  });



})


// onUnmounted(() => {
//   const script = document.querySelector('script[src="https://cdn.wetravel.com/widgets/embed_checkout.js"]');
//   if (script) {
//     script.remove();
//   }
// });


</script>
<template>
  <div>

    <button
        class="btn-primary wtrvl-checkout_button hidden z-10 "
        id="wetravel_button_widget"
        data-env="https://www.wetravel.com"
        data-version="v0.3"
        data-uid="239346"
        :data-uuid="''+packageStore.code_w"
        :href="'https://www.wetravel.com/checkout_embed?uuid='+codeWetravel"
        ref="targetButton" @click="targetAction">
      Book Now
    </button>
    <div v-for="packages in listPackages" class="mb-12">


      <!--  <header class="h-[75vh] relative">-->
      <!--    <img src="/images/banners/banner-lg.png" alt="" class="object-cover w-screen h-full">-->
      <!--    <div class="absolute inset-x-0 bottom-0 text-center hidden md:block">-->
      <!--      <h1 class="mb-24 font-bold text-6xl text-white">-->
      <!--        {{packages.titulo}}-->
      <!--      </h1>-->
      <!--    </div>-->
      <!--  </header>-->

<!--      <div class="relative">-->
<!--        <div class="h-[75vh] relative overflow-hidden vimeo-wrapper">-->
<!--          <iframe src="https://player.vimeo.com/video/772468390?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1" frameborder="0" allow="autoplay; fullscreen" class=""></iframe>-->
<!--        </div>-->
<!--        <div class="absolute inset-x-0 bottom-0 text-center">-->
<!--          <h1 class="text-white text-xl md:text-4xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)] mb-24">{{packages.titulo}}</h1>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="h-[75vh] 2xl:h-[60vh] bg-gray-500">-->
<!--        <carousel  ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">-->
<!--          <template v-for="paquete_destino in packages.paquetes_destinos">-->

<!--              <slide v-for="(destino_imagen, index) in paquete_destino.destinos.destino_imagen" :key="index">-->
<!--                <nuxt-img :src="destino_imagen.nombre" alt="" :placeholder="[50, 25, 75, 5]" class="object-cover w-full h-[75vh] 2xl:h-[60vh] object-bottom"></nuxt-img>-->
<!--              </slide>-->

<!--          </template>-->
<!--        </carousel>-->

<!--      </div>-->

      <header class="h-[100vh] 2xl:h-[100vh] relative bg-secondary overflow-hidden grid grid-cols-2">
        <div class="col-span-2 md:col-span-1">
<!--          <nuxt-img src="https://gotoperu.com/images/hotels/banner.webp" :placeholder="[50, 25, 75, 5]" alt="" class="parallax-image h-[125vh] 2xl:h-[125vh] object-cover w-full object-bottom bottom-0 "></nuxt-img>-->
<!--          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/slider/1709050239382Slider%20copia%203%20machupicchu_1709050241.jpg" alt="" :placeholder="[50, 25, 75, 5]" class="object-cover w-full h-[75vh] 2xl:h-[100vh] object-bottom"></nuxt-img>-->
          <carousel  ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">
            <template v-for="paquete_destino in packages.paquetes_destinos">
              <slide v-for="(destino_imagen, index) in paquete_destino.destinos.destino_imagen" :key="index">
                <nuxt-img :src="destino_imagen.nombre" alt="" :placeholder="[50, 25, 75, 5]" class="parallax-image h-[125vh] 2xl:h-[125vh] object-cover w-full object-bottom"></nuxt-img>
              </slide>
            </template>
          </carousel>
        </div>
        <div class="col-span-2 md:col-span-1  items-center text-white bg-primary px-24 h-full 2xl:mb-40 hidden md:grid">
          <div class="">

            <div class="text-secondary mb-2 flex gap-2 items-center">
              <div>
                {{ packages.duracion }} days
              </div>

            </div>
            <div class="border-title-sm mb-2"></div>
            <div class="2xl:text-3xl text-xl font-semibold mb-2">
              <h1>{{ packages.titulo }}</h1>
            </div>

            <div v-if="getThreeStarPrice(packages.precio_paquetes) > 0">
              <p class="text-xs font-light mb-1">Price p.p. from</p>
              <span class="text-2xl text-quaternary font-semibold">${{ getThreeStarPrice(packages.precio_paquetes) }}</span>
              <span class="text-sm text-quaternary"> usd</span>
            </div>

<!--            <h4>travel advisor of the month</h4>-->
<!--            <div class="py-6 flex gap-6">-->
<!--              <nuxt-img src="https://gotoperu-com.s3.us-west-1.amazonaws.com/team/maja.jpg" class=" h-20"></nuxt-img>-->
<!--              <nuxt-img src="https://gotoperu-com.s3.us-west-1.amazonaws.com/team/karina.jpg" class=" h-20"></nuxt-img>-->
<!--            </div>-->
<!--              <div class="flex -space-x-1 overflow-hidden">-->
<!--                <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white m-1" :src="team.imagen_perfil" :alt="team.nombre" v-for="(team, index) in limitedTeam" :key="index">-->
<!--              </div>-->

<!--            <p class=" tracking-widest font-light 2xl:w-1/2 mt-3">Get a travel expert to plan your dream vacation</p>-->

            <div class="flex gap-6 my-6  text-secondary  items-center">
              <a href="#overview"  class="text-sm py-2 px-3 bg-slate-100 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Overview</a>
              <a href="#itinerary" class="text-sm py-2 px-3 bg-slate-100 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary" >Itinerary</a>
              <a href="#included" class="text-sm py-2 px-3 bg-slate-100 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Included</a>
              <!--      <a href="#hotels" class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Hotels</a>-->
              <!--      <a href="included" class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Hotels</a>-->
              <!--                <a href="#prices" class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Prices</a>-->
              <nuxt-link to="#form-dream-adventure" class="btn-ternary">Plan your adventure</nuxt-link>
            </div>


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




      <section class="my-12 hidden md:block">
        <div class="container grid grid-cols-3 text-center">
          <div class="">
<!--            <nuxt-img src="/icons/location-2.svg" class="h-16 mx-auto mb-2"></nuxt-img>-->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="community" class="h-16 mx-auto mb-2">
              <path fill="#67acd5" d="M28.3 21.6c.1-.3.2-.5.3-.7 0-.1.1-.3.1-.4.1-.2.1-.4.2-.6.1-.3.2-.7.3-1 0-.1 0-.3.1-.4.1-.3.1-.6.1-.8v-.4c0-.4.1-.8.1-1.2 0-7.5-6-13.5-13.5-13.5S2.5 8.5 2.5 16c0 .4 0 .8.1 1.2v.4c0 .3.1.6.1.8 0 .1 0 .3.1.4.1.3.2.7.3 1 .1.2.1.4.2.6 0 .1.1.3.1.4.1.2.2.5.3.7C4.8 24 6.6 26 8.8 27.4c.5.3 1 .6 1.6.9.2.1.5.2.7.3.1 0 .3.1.4.1.2.1.4.1.6.2.3.1.7.2 1 .3.1 0 .3 0 .4.1.3.1.6.1.8.1h.4c.4 0 .8.1 1.2.1s.8 0 1.2-.1h.4c.3 0 .6-.1.8-.1.1 0 .3 0 .4-.1.3-.1.7-.2 1-.3.2-.1.4-.1.6-.2.1 0 .3-.1.4-.1.2-.1.5-.2.7-.3.6-.3 1.1-.5 1.6-.9 2.4-1.4 4.2-3.4 5.3-5.8z"></path>
              <path fill="#a17852" d="M5.1 26.9c-.4-.4-.4-1 0-1.4l4.2-4.2 1.4 1.4-4.2 4.2c-.4.4-1 .4-1.4 0z"></path>
              <circle cx="16.1" cy="15.9" r="5.5" fill="#5791d1" transform="rotate(-45.001 16.083 15.917)"></circle>
              <circle cx="16.1" cy="15.9" r="4" fill="#fff" transform="rotate(-45.001 16.083 15.917)"></circle>
              <path fill="#40455a" d="M19 9.6c-.2 0-.5-.2-.5-.4C17.9 4.9 16.8 3 16 3s-1.9 1.9-2.5 6.2c0 .3-.3.5-.6.4-.3 0-.5-.3-.4-.6.4-2.6 1.4-7 3.5-7s3.1 4.4 3.5 7.1c0 .2-.1.5-.5.5.1 0 0 0 0 0zM16 30c-2.1 0-3.1-4.4-3.5-7.1 0-.3.1-.5.4-.6.3 0 .5.1.6.4.7 4.3 1.8 6.2 2.5 6.2s1.9-1.9 2.5-6.2c0-.3.3-.5.6-.4.3 0 .5.3.4.6-.4 2.7-1.4 7.1-3.5 7.1z"></path>
              <path fill="#40455a" d="M16.1 21.9c-1.5 0-3.1-.6-4.2-1.8-2.3-2.3-2.3-6.1 0-8.5 2.3-2.3 6.1-2.3 8.5 0 2.3 2.3 2.3 6.1 0 8.5-1.2 1.2-2.8 1.8-4.3 1.8zm-3.6-2.4c1.9 1.9 5.1 1.9 7.1 0 1.9-2 1.9-5.1 0-7.1s-5.1-1.9-7.1 0-1.9 5.1 0 7.1zm-6.7 8.2c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1L9 20.9c.2-.2.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7l-4.2 4.2c-.3.3-.7.5-1.1.5zm-.3-1.2c.2.2.5.2.7 0l3.9-3.9-.7-.7-3.9 3.9c-.2.2-.2.5 0 .7z"></path>
              <path fill="#40455a" d="M10.1 22.4c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l2.1-2.1c.2-.2.5-.2.7 0s.2.5 0 .7l-2.1 2.1c-.1.1-.2.1-.3.1zm-1-2.9C6.4 19.1 2 18.1 2 16s4.4-3.1 7.1-3.5c.3 0 .5.1.6.4 0 .3-.1.5-.4.6C4.9 14.1 3 15.2 3 16s1.9 1.9 6.2 2.5c.3 0 .5.3.4.6 0 .2-.2.4-.5.4zm13.8 0c-.2 0-.5-.2-.5-.4 0-.3.1-.5.4-.6 4.3-.7 6.2-1.8 6.2-2.5s-1.9-1.9-6.2-2.5c-.3 0-.5-.3-.4-.6 0-.3.3-.5.6-.4 2.6.4 7.1 1.4 7.1 3.5s-4.5 3.1-7.2 3.5z"></path>
              <path fill="#40455a" d="M16 30c-2.6 0-5.2-.7-7.4-2.2-.2-.1-.3-.5-.2-.7s.5-.3.7-.2c2.1 1.3 4.5 2 6.9 2 7.2 0 13-5.8 13-13S23.2 3 16 3 3 8.8 3 16c0 2.4.7 4.8 2 6.9.1.2.1.5-.2.7-.2.1-.5.1-.7-.2C2.7 21.2 2 18.6 2 16 2 8.3 8.3 2 16 2s14 6.3 14 14-6.3 14-14 14z"></path>
              <path fill="#40455a" d="M16 26c-1.6 0-3.2-.2-4.8-.6-.3-.1-.4-.3-.4-.6.1-.3.3-.4.6-.4 1.5.4 3 .6 4.5.6 7.2 0 13-4 13-9s-5.8-9-13-9S3 11 3 16c0 2.1 1.1 4.1 3 5.7.2.2.2.5.1.7-.2.2-.5.2-.7.1C3.2 20.7 2 18.4 2 16 2 10.5 8.3 6 16 6s14 4.5 14 10-6.3 10-14 10z"></path>
              <path fill="#40455a" d="M16 30c-2.4 0-4.7-1.2-6.5-3.3-.2-.2-.2-.5.1-.7.2-.2.5-.2.7.1 1.6 1.9 3.6 3 5.7 3 5 0 9-5.8 9-13S21 3 16 3 7 8.8 7 16c0 1.5.2 3.1.6 4.5.1.3-.1.5-.4.6-.3.1-.5-.1-.6-.4-.4-1.5-.6-3.1-.6-4.7C6 8.3 10.5 2 16 2s10 6.3 10 14-4.5 14-10 14z"></path>
            </svg>

            <p>Personalised journeys from start to finish</p>
          </div>
          <div class="">
<!--            <nuxt-img src="/icons/care-4.svg" class="h-16 mx-auto mb-2"></nuxt-img>-->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="feedback" class="h-16 mx-auto mb-2">
              <path fill="#c9cec4" d="M12.5 3.5h5v5h-5zm0 10h5v5h-5zm0 10h5v5h-5z"></path>
              <circle cx="6" cy="6" r="3.5" fill="#ffda87"></circle>
              <circle cx="6" cy="16" r="3.5" fill="#a3d86b"></circle>
              <circle cx="6" cy="26" r="3.5" fill="#ff9e68"></circle>
              <path fill="#40455a" d="M6 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-7C4.3 3 3 4.3 3 6s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path>
              <path fill="#40455a" d="M6 8c-.5 0-1-.2-1.4-.6-.2-.2-.2-.5 0-.7s.5-.2.7 0c.4.4 1 .4 1.4 0 .2-.2.5-.2.7 0s.2.5 0 .7C7 7.8 6.5 8 6 8z"></path>
              <circle cx="4.8" cy="5" r=".5" fill="#40455a"></circle>
              <circle cx="7.3" cy="5" r=".5" fill="#40455a"></circle>
              <path fill="#40455a" d="M6 20c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-7c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path>
              <path fill="#40455a" d="M7.1 17.5H4.9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H7c.3 0 .5.2.5.5s-.2.5-.4.5z"></path>
              <circle cx="4.8" cy="15" r=".5" fill="#40455a"></circle>
              <circle cx="7.3" cy="15" r=".5" fill="#40455a"></circle>
              <path fill="#40455a" d="M6 30c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-7c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path>
              <path fill="#40455a" d="M7.1 28c-.1 0-.3 0-.4-.1-.4-.4-1-.4-1.4 0-.2.2-.5.2-.7 0s-.2-.5 0-.7c.7-.7 2.1-.7 2.8 0 .2.2.2.5 0 .7-.1.1-.2.1-.3.1z"></path>
              <circle cx="4.8" cy="25" r=".5" fill="#40455a"></circle>
              <circle cx="7.3" cy="25" r=".5" fill="#40455a"></circle>
              <path fill="#40455a" d="M17.5 9h-5c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h5c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5zM13 8h4V4h-4v4z"></path>
              <path fill="#40455a" d="M15.4 7.5c-.1 0-.3 0-.4-.1L13.6 6c-.2-.2-.2-.5 0-.7s.5-.2.7 0l1.1 1.1 3.2-3.2c.2-.2.5-.2.7 0s.2.5 0 .7l-3.5 3.5c-.1 0-.2.1-.4.1zM17.5 19h-5c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h5c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5zM13 18h4v-4h-4v4zm4.5 11h-5c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h5c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5zM13 28h4v-4h-4v4zm16.5-3h-9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5s-.2.5-.5.5zm-3 2h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5zm3-12h-9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5s-.2.5-.5.5zm-3 2h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5zm3-12h-9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5s-.2.5-.5.5zm-3 2h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5z"></path>
            </svg>
            <p>Every trip helps support Conservation</p>
          </div>
          <div class="">
<!--            <nuxt-img src="/icons/clock.svg" class="h-16 mx-auto mb-2"></nuxt-img>-->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="feedback" class="h-16 mx-auto mb-2">
              <path fill="#516d97" d="M4.5 12.4h5.7v12.8H4.5z"></path>
              <path fill="#fff" d="M7.5 12.4h5.7v12.8H7.5z"></path>
              <path fill="#fed8aa" d="M27.4 18.1c0-.8-.6-1.4-1.4-1.4.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4h-3.5c-.8 0-1.4-.6-1.4-1.4V9.8c0-1.7-1.4-3.1-3.1-3.1h-.5v3.4c0 .6-.2 1.2-.6 1.7l-1.1 1.5c-.3.4-.7.6-1.1.6h-1.4v10H15c.5 0 1 .2 1.2.7.2.5.7.8 1.3.8h7.1c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4H26c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4c.7-.2 1.4-.9 1.4-1.7z"></path>
              <path fill="#40455a" d="M13.2 25.8H7.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5.2V12.9H7.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5.7c.3 0 .5.2.5.5v12.8c0 .3-.3.6-.5.6z"></path>
              <path fill="#40455a" d="M7.5 25.8H4.6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H7V12.9H4.6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2.8c.3 0 .5.2.5.5v12.8c.1.3-.2.6-.4.6z"></path>
              <circle cx="10.3" cy="22.4" r=".7" fill="#40455a"></circle>
              <path fill="#40455a" d="M26 17.2h-2.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H26c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-3.6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H26c1.1 0 1.9.9 1.9 1.9 0 1-.9 1.9-1.9 1.9z"></path>
              <path fill="#40455a" d="M26 20.1h-2.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H26c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-2.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H26c1.1 0 1.9.9 1.9 1.9 0 1-.9 1.9-1.9 1.9z"></path>
              <path fill="#40455a" d="M26 22.9h-2.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H26c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-2.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H26c1.1 0 1.9.9 1.9 1.9 0 1-.9 1.9-1.9 1.9z"></path>
              <path fill="#40455a" d="M24.5 25.8h-7.1c-.7 0-1.4-.4-1.7-1-.1-.2-.4-.4-.8-.4h-1.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H15c.7 0 1.3.4 1.6.9.2.3.5.5.8.5h7.1c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-1.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1.4c1.1 0 1.9.9 1.9 1.9.1 1-.8 1.9-1.9 1.9zm-9.9-11.4h-1.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1.4c.3 0 .6-.1.7-.4l1.1-1.5c.3-.4.5-.9.5-1.4V6.8c0-.3.2-.5.5-.5h.5c2 0 3.6 1.6 3.6 3.6v2.6c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9.8c0-1.4-1.1-2.6-2.6-2.6V10c0 .7-.2 1.4-.7 2l-1.1 1.5c-.3.6-.9.9-1.5.9z"></path>
              <path fill="#40455a" d="M24.5 14.4h-2.1c-1.1 0-1.9-.9-1.9-1.9V11c0-.3.2-.5.5-.5s.5.2.5.5v1.4c0 .5.4.9.9.9h2.1c.3 0 .5.2.5.5s-.2.6-.5.6z"></path>
            </svg>
            <p>Every detail taken care of</p>
          </div>
        </div>
      </section>

      <section class="">
        <div class="container grid md:grid-cols-12 gap-12">
          <div class="md:col-span-8 order-2 md:order-1">

<!--              <div class="flex gap-6 my-5 overflow-x-scroll focus:touch-pan-x">-->
<!--                <a href="#overview"  class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Overview</a>-->
<!--                <a href="#itinerary" class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary" >Itinerary</a>-->
<!--                <a href="#included" class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Included</a>-->
<!--                &lt;!&ndash;      <a href="#hotels" class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Hotels</a>&ndash;&gt;-->
<!--                &lt;!&ndash;      <a href="included" class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Hotels</a>&ndash;&gt;-->
<!--&lt;!&ndash;                <a href="#prices" class="text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Prices</a>&ndash;&gt;-->
<!--              </div>-->


<!--            <div class="grid grid-cols-3 text-xs md:grid-cols-5  gap-6">-->
<!--              <div v-for="(destination, index) in p = packages.paquetes_destinos" :key="destination.id">-->

<!--                <div class="relative">-->
<!--                  <img :src="destination.destinos.imagen" alt="" class=" w-full object-cover rounded-xl shadow-xl">-->
<!--                  <div class="absolute inset-x-0 bottom-0 p-3 text-white bg-gradient-to-t from-gray-800 rounded-b-xl">-->
<!--                    {{destination.destinos.nombre}}-->
<!--                  </div>-->
<!--                </div>-->

<!--              </div>-->
<!--            </div>-->






<!--            <div class="grid my-8 space-y-2">-->
<!--              <div class="flex gap-2">-->
<!--                <img src="/icons/location.svg" alt=""> <span class="font-bold">Start</span> Lima, Peru-->
<!--              </div>-->
<!--              &lt;!&ndash;          <div class="flex gap-2">&ndash;&gt;-->
<!--              &lt;!&ndash;            <img src="/icons/location.svg" alt=""> <span class="font-bold">Finish</span> La Paz, Bolivia&ndash;&gt;-->
<!--              &lt;!&ndash;          </div>&ndash;&gt;-->
<!--              <div class="flex gap-2">-->
<!--                <img src="/icons/location.svg" alt="">-->
<!--                <span class="font-bold">Destinations</span>-->


<!--                <span class="badged-sm" :class="randomColorClasses[index % randomColorClasses.length]" v-for="(destination, index) in p = packages.paquetes_destinos" :key="destination.id">-->
<!--                  {{destination.destinos.nombre}}-->
<!--                </span>-->
<!--              </div>-->

<!--              <div class="flex gap-2">-->
<!--                <img src="/icons/search.svg" alt=""> <span class="font-bold">Code</span> {{ packages.codigo }}-->
<!--              </div>-->
<!--            </div>-->

            <article class="mt-6" id="overview">
              <h2 class="text-2xl font-bold mb-8">Overview</h2>
              <div v-html="packages.descripcion">
              </div>
              <div class="bg-white p-2 rounded-2xl mt-12">
                <img :src="packages.mapa" alt="" class="rounded-2xl w-full">
              </div>
            </article>


            <Itinerary :listPackages="listPackages"></Itinerary>



            <article class="mt-6" id="overview">
              <h2 class="text-2xl font-bold mb-8">Recommended Hotels</h2>

              <CarouselHotelDetail :listPackages="listPackages"></CarouselHotelDetail>

            </article>


          </div>
          <div class="md:col-span-3 order-1 md:order-2 z-10 -mt-40 md:-mt-0">


            <div class="flex backdrop-blur bg-white/70 p-6 gap-3 ">

              <div class="flex-1  flex items-center" v-if="packages.is_p_t == 1">

                <div class="text-4xl font-semibold text-gray-600">
                  <span class="text-base text-secondary block mb-2">{{ packages.duracion }} days</span>
                  <div class="border-title-sm mb-2 "></div>
                  <h2 class="text-2xl mb-3 font-bold text-gray-600"> {{ packages.titulo }}</h2>
                  <div class="grid grid-cols-2 gap-2">
                    <div class="rounded overflow-hidden relative first-image group">
                      <nuxt-img src="/images/team/angi.jpg" class="h-72 -scale-x-100 object-cover object-center group-hover:shadow w-full"></nuxt-img>
                      <div class="absolute backdrop-blur-lg bottom-0 w-full p-2 text-white transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
                        <h4 class="text-xs">Fiorela - Luxury Travel Advisor to Peru</h4>
                        <p class="text-xs font-light">Fiorela designs personalized luxury trips to Peru, ensuring unique and exclusive experiences for an unforgettable adventure.</p>
                        <a href="" class="text-xs flex gap-2 items-center mt-2">Contact: <nuxt-link to=""><nuxt-img src="/icons/whatsapp.svg" class="h-4"></nuxt-img></nuxt-link></a>
                      </div>
                    </div>
                    <div class="rounded overflow-hidden relative second-image group pt-6">
                      <nuxt-img src="/images/team/fiore.jpg" class="h-72 object-cover group-hover:shadow rounded object-center w-full"></nuxt-img>
                      <div class="absolute backdrop-blur-lg bottom-0 w-full p-2 text-white transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
                        <h4 class="text-xs">Fiorela - Luxury Travel Advisor to Peru</h4>
                        <p class="text-xs font-light">Fiorela designs personalized luxury trips to Peru, ensuring unique and exclusive experiences for an unforgettable adventure.</p>
                        <a href="" class="text-xs flex gap-2 items-center mt-2">Contact: <nuxt-link to=""><nuxt-img src="/icons/whatsapp.svg" class="h-4"></nuxt-img></nuxt-link></a>
                      </div>
                    </div>
                  </div>
<!--                  <div class="flex -space-x-1 overflow-hidden">-->
<!--                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" :src="team.imagen_perfil" :alt="team.nombre" v-for="(team, index) in limitedTeam" :key="index">-->
<!--                  </div>-->
                  <p class="text-sm font-normal mt-2">Get a travel expert to plan your dream vacation</p>

                  <div v-if="getThreeStarPrice(packages.precio_paquetes) > 0">
                    <p class="text-xs font-light mt-2">Price p.p. from</p>
                    <span>${{ getThreeStarPrice(packages.precio_paquetes) }}</span>
                    <span class="text-sm"> usd</span>
                  </div>

                  <span class="text-red-500 text-sm font-bold" v-else>Price: Inquire Now</span>

                  <span class="block text-red-500 mt-3 text-xs font-normal">See book With Confidence terms</span>
                </div>
              </div>

              <div class="flex-1 border bg-white p-3 flex items-center" v-else>

                <div class="text-4xl font-semibold text-gray-600" v-if="packages.precio_tours > 0">
                  <span class="text-base block">{{ packages.duracion }} days</span>
                  <p class="text-xs font-light mt-3">Price p.p. from</p>
                  <span>${{ packages.precio_tours }}</span>
                  <span class="text-sm"> usd</span>
                  <span class="block text-red-500 mt-3 text-xs font-normal">See book With Confidence terms</span>
                </div>

                <span class="text-red-500 font-bold" v-else>Inquire</span>


              </div>

            </div>

            <div class="mt-6">
              <button v-if="packages.codigo_f" class="wtrvl-checkout_button btn-primary block w-full mb-2" id="wetravel_button_widget" data-env="https://www.wetravel.com" data-version="v0.2" data-uid="239346" :data-uuid="packages.codigo_f" :href="'https://www.wetravel.com/checkout_embed?uuid='+packages.codigo_f" >Book Now</button>
              <a href="#form-dream-adventure" class="btn-secondary mt-3  font-bold block text-center w-full">Get a Quote</a>
            </div>



            <div class="grid grid-cols-2 my-12 gap-4">
              <div class="flex items-center gap-3">
                <div class="rounded-full bg-secondary p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="leading-none">
                  <span class="text-xs block">Travel Style</span>
                  <span class="text-sm font-medium">ESCORTED TOURS</span>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="rounded-full bg-gray-400 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="stroke-amber-400" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="leading-none">
                  <span class="text-xs block">Season</span>
                  <span class="text-sm font-medium">JAN - DEC</span>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="rounded-full bg-gray-900 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div class="leading-none">
                  <span class="text-xs block">Interest</span>
                  <span class="text-sm font-medium">Culture, history, Adventure</span>
                </div>
              </div><div class="flex items-center gap-3">
              <div class="rounded-full bg-primary p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <div class="leading-none">
                <span class="text-xs block">Departure</span>
                <span class="text-sm font-medium">Daily</span>
              </div>
            </div>






            </div>

<!--            <div class="block">-->
<!--              <div id="TA_cdsratingsonlynarrow522" class="TA_cdsratingsonlynarrow w-full"><ul id="8CdJuXhFL" class="TA_links ZrzN0Ffd"><li id="7JQHh6DaTf" class="SOH6nHQUMt"><a target="_blank" href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d15202262-Reviews-Gotoperu-Cusco_Cusco_Region.html"><img src="https://www.tripadvisor.com.pe/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg" class="mx-auto" alt="TripAdvisor"/></a></li></ul></div>-->
<!--              <script async src="https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&amp;uniq=522&amp;locationId=15202262&amp;lang=es_PE&amp;border=true&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>-->
<!--            </div>-->
          </div>
        </div>
      </section>

      <section class="container hidden">
        <div class="flex mb-3 items-center text-2xl text-gray-700 font-bold gap-2 dark:text-gray-400">
          <div class="">
            <span class="inline-block w-5 h-2.5 bg-secondary"></span>
          </div> Included
        </div>
        <div class="grid grid-cols-6 gap-4">
          <div class="col-start-2 col-span-4">
            <div class="grid grid-cols-3 md:grid-cols-7 content-center text-center">
              <div class="">
                <img src="/images/include/assistances.png" alt="" class="object-contain px-4 text-center">
                <p class="text-xs">Assistances</p>
              </div>
              <div class="">
                <img src="/images/include/breakfast.png" alt="" class="object-contain px-4 text-center">
                <p class="text-xs">Breakfast</p>
              </div>
              <div class="">
                <img src="/images/include/entrances.png" alt="" class="object-contain px-4 text-center">
                <p class="text-xs">Entrances</p>
              </div>

              <div class="">
                <img src="/images/include/hotels.png" alt="" class="object-contain px-4 text-center">
                <p class="text-xs">Hotels</p>
              </div>
              <div class="">
                <img src="/images/include/tours.png" alt="" class="object-contain px-4 text-center">
                <p class="text-xs">Tours</p>
              </div>
<!--              <div class="">-->
<!--                <img src="/images/include/trains.png" alt="" class="object-contain px-4 text-center">-->
<!--                <p class="text-xs">Trains</p>-->
<!--              </div>-->
              <div class="">
                <img src="/images/include/transfers.png" alt="" class="object-contain px-4 text-center">
                <p class="text-xs">Transfers</p>
              </div>

              <div class="">
                <img src="/images/include/flight.png" alt="" class="object-contain px-4 grayscale text-center">
                <p class="text-xs">Flight</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--    <ModalItinerary></ModalItinerary>-->

      <div class="">
        <div class="fixed bottom-0 right-0 z-40 py-2 px-4 sm:inline-flex md:mb-0 md:hidden">
          <a href="#form-dream-adventure" class="">
            <div class="flex items-center">
              <span class="bg-gray-800 text-white -mr-3 py-2 px-4 rounded-lg border-2 border-secondary">Start my quote</span>
              <nuxt-img src="/images/team/men1.webp" alt="" class="w-16 h-16 rounded-full bg-white object-cover object-top border-2 border-secondary"></nuxt-img>
            </div>
          </a>
        </div>

        <div class="fixed bottom-0 mb-20 right-0 z-40 py-6 px-7 sm:inline-flex md:mb-0">
          <a :href="'https://wa.me/51959685038?text=I%20would%20like%20a%20quote%20for%20the%20package: '+packages.titulo" target="_blank" rel="noopener noreferrer">
            <span class="flex relative h-10 w-10">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
            </span>
          </a>
          <!--        <a href="https://wa.me/51959685038?text=Deseo%20una%20cotización%20del%20paquete:" target="_blank" rel="noopener noreferrer">Enviar mensaje</a>-->
        </div>
        <div class="fixed bottom-0 mb-20 right-0 z-40 py-5 px-6 sm:inline-flex md:mb-0">
          <a :href="'https://wa.me/51959685038?text=I%20would%20like%20a%20quote%20for%20the%20package: '+packages.titulo" target="_blank" rel="noopener noreferrer" class="bg-white rounded-full">
            <nuxt-img src="/icons/whatsapp.svg" alt="" class="w-12"></nuxt-img>
          </a>
        </div>
      </div>

    </div>

    <section>
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-5 overflow-hidden relative">

<!--          <nuxt-img src="/images/team/maja-angi.jpg" class="parallax-image h-[800px] 2xl:h-[1600px] object-cover"></nuxt-img>-->
          <Fiorella></Fiorella>
          <Angie></Angie>
        </div>
        <div class="col-span-12 md:col-span-7 grid items-center text-white bg-primary p-12 md:p-24">
          <div class="">
            <div class="border-title-sm mb-2"></div>
            <h2 class="text-3xl font-semibold mb-6">Travel with us</h2>
            <p class=" tracking-widest font-light md:w-1/2">Luxury travel programs have never been so enjoyable until now! Nowadays, travelers are looking for maximum comfort in their vacations, but they are also looking to explore the region in a local way and get to know the cultures of each country up close. So Machu Picchu Company has developed a series of customized tours that compose the perfect travel program for you and your family.</p>
            <div class="mt-12">
              <nuxt-link to="#form-dream-adventure" class="btn-ternary">Get a Quote</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.timeline-container {
  border-left: 2px solid #ddd;
  margin-left: 20px;
  padding-left: 20px;
}

.timeline-day {
  position: relative;
  margin-bottom: 20px;
}

.timeline-header {
  background-color: #f8f8f8;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.timeline-content {
  border-top: 1px solid #ddd;
  margin-top: 10px;
  padding-top: 10px;
  overflow: hidden;
  /* Las alturas se gestionan dinámicamente con GSAP y el estado de apertura */
}
</style>