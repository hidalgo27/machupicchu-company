<script setup lang="ts">

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


  <section class="container mt-32">
    <div class="text-center text-primary">
      <div class="border-title mb-2 mx-auto"></div>
      <h1 class="font-semibold text-4xl mb-6">Peru, upgraded</h1>
      <p class="text-lg tracking-widest font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa deleniti dolor earum mollitia nulla quo reprehenderit tempore? Aspernatur atque consequatur culpa cum natus nulla odit ullam velit vero voluptas.</p>
    </div>
  </section>
  <section class="container my-16">
    <div class="grid grid-cols-12 gap-6 items-center">
      <div class="col-span-4 text-primary">
        <div class="border-title mb-2"></div>
        <h2 class="text-3xl font-semibold mb-6">En búsqueda de <br> nuevas <br> experiencias</h2>
        <p class="tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam culpa debitis dignissimos distinctio dolorem eligendi eum fugit necessitatibus nisi omnis ratione repellendus, saepe sequi! Explicabo itaque sed tempore.</p>
      </div>
      <div class="col-span-8">
        <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/package/PERU-ADVENTURE_1710688514.jpg" class="w-full object-cover"></nuxt-img>
      </div>
    </div>
  </section>

  <section class="container mb-6 my-32">
    <div class="grid grid-cols-12 text-primary gap-6 items-center my-12">
      <div class="col-span-4">
        <div class="border-title mb-2 "></div>
        <h1 class="font-semibold text-4xl mb-6">Trip Inspiration</h1>
      </div>
      <div class="col-span-8 border-l-2 px-6">
        <p class="text-lg tracking-widest font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa deleniti dolor earum mollitia nulla quo reprehenderit tempore? Aspernatur atque consequatur culpa cum natus nulla odit ullam velit vero voluptas.</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <div class="">
        <div class="">
          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/package/MACHUPICCHU-AND-RAINBOW-MOUNTAIN_1710688497.jpg" class="w-full"></nuxt-img>
        </div>
        <div class="p-6 text-primary bg-white">
          <div class="border-title mb-2 "></div>
          <h2 class="text-2xl">Cusco Classic</h2>
          <p class="my-3 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem eaque incidunt labore obcaecati odio vel.</p>
          <p class="text-secondary">From $1234 usd</p>
        </div>
      </div>
      <div class="">
        <div class="">
          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/package/HONEYMOON-IN-CUSCO-AND-MACHU-PICCHU_1710688372.jpg" class="w-full"></nuxt-img>
        </div>
        <div class="p-6 text-primary bg-white">
          <div class="border-title mb-2 "></div>
          <h2 class="text-2xl capitalize">inca trail and rainbow mountain</h2>
          <p class="my-3 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem eaque incidunt labore obcaecati odio vel.</p>
          <p class="text-secondary">From $1234 usd</p>
        </div>
      </div>
      <div class="">
        <div class="">
          <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/package/FAMILY-TRIP-TO-PERU_1710688353.jpg" class="w-full"></nuxt-img>
        </div>
        <div class="p-6 text-primary bg-white">
          <div class="border-title mb-2 "></div>
          <h2 class="text-2xl capitalize">best of peru</h2>
          <p class="my-3 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem eaque incidunt labore obcaecati odio vel.</p>
          <p class="text-secondary">From $1234 usd</p>
        </div>
      </div>

    </div>
  </section>

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
        <div class="grid grid-cols-2 items-center">
          <div class="items-center">
            <nuxt-img src="/images/hotels/1.jpg" class="w-full h-[400px] object-cover object-center"></nuxt-img>
            <nuxt-img src="/images/hotels/2.jpg" class="w-full h-[300px] object-cover object-center"></nuxt-img>
            <nuxt-img src="/images/hotels/3.jpg" class="w-full h-[300px] object-cover object-center"></nuxt-img>
          </div>
          <div class="">
            <nuxt-img src="https://gotoperu.com/images/hotels/banner.webp" class="w-full h-[400px] object-cover"></nuxt-img>
            <nuxt-img src="/images/hotels/4.jpg" class="w-full object-cover"></nuxt-img>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container my-32">
    <div class="grid grid-cols-12 gap-6 items-center">
      <div class="col-span-8 relative">
        <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964114497portada gotoperu machupicchu_1708964115.jpg" class="w-full object-cover"></nuxt-img>
        <div class="absolute bottom-0 left-0 m-6 z-10 backdrop-blur-sm bg-white/45 rounded px-6 py-3">
          MachuPicchu
        </div>
      </div>
      <div class="col-span-4 text-primary">
        <div class="border-title mb-2"></div>
        <h2 class="text-3xl font-semibold mb-6">En búsqueda de <br> nuevas <br> experiencias</h2>
        <p class="tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam culpa debitis dignissimos distinctio dolorem eligendi eum fugit necessitatibus nisi omnis ratione repellendus, saepe sequi! Explicabo itaque sed tempore.</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6 my-6">
      <div class="relative">
        <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964376528portada gotoperu lima_1708964377.jpg" class="w-full object-cover"></nuxt-img>
        <div class="absolute bottom-0 left-0 m-6 z-10 backdrop-blur-sm bg-white/45 rounded px-6 py-3">
          Lima
        </div>
      </div>
      <div class="relative">
        <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708963976885portada gotoperu cusco 2_1708963977.jpg" class="w-full object-cover"></nuxt-img>
        <div class="absolute bottom-0 left-0 m-6 z-10 backdrop-blur-sm bg-white/45 rounded px-6 py-3">
          Cusco
        </div>
      </div>
      <div class="relative">
        <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964505112portada gotoperu titicaca lake_1708964505.jpg" class="w-full object-cover"></nuxt-img>
        <div class="absolute bottom-0 left-0 m-6 z-10 backdrop-blur-sm bg-white/45 rounded px-6 py-3">
          Puno
        </div>
      </div>
    </div>
    <div class="text-right">
      <button class="btn-secondary-outline">View more</button>
    </div>
  </section>

  <section class="container my-32">
    <div class="grid grid-cols-12 gap-12 items-center">
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
              <div class="px-12">
                <img src="https://epic.travel/wp-content/uploads/2019/05/talk-icon-blue.svg" alt="Phone Icon" class="rounded-full w-full">
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
              <div class="px-12">
                <img src="https://epic.travel/wp-content/uploads/2019/05/plan-icon-blue.svg" alt="Map Icon" class="rounded-full w-full">
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
              <div class="px-12">
                <img src="https://epic.travel/wp-content/uploads/2019/05/book-icon-blue.svg" alt="Tablet Icon" class="rounded-full w-full">
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

  <section class="container">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-5">
        <nuxt-img src="https://s3.us-west-1.amazonaws.com/gotoperu-com/destinations/1708964235902portada%20gotoperu%20sacred_1708964236.jpg" class=""></nuxt-img>
      </div>
      <div class="col-span-7 grid items-center text-white bg-primary p-24">
        <div class="">
          <div class="border-title mb-2"></div>
          <h2 class="text-3xl font-semibold mb-6">Book with MAPI</h2>
          <p class=" tracking-widest font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam culpa debitis dignissimos distinctio dolorem eligendi eum fugit necessitatibus nisi omnis ratione repellendus, saepe sequi! Explicabo itaque sed tempore.</p>

          <button class="btn-ternary mt-6">Get Started</button>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-primary mt-32 p-6">
    <div class="container text-center">
      <p class="font-light text-sm">© Copyright 2022 GotoPeru. All rights reserved. | GOTOPERU COMPANY EIRL - RUC 20609225441 - Avenida El Sol 449 - Cusco - Cusco - Peru</p>
    </div>
  </footer>





</template>

<style scoped>

</style>