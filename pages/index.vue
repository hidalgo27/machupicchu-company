<script setup lang="ts">

</script>

<template>
    <div class="relative w-full h-[90vh] overflow-hidden">
      <div class="mask"></div>
      <video autoplay muted loop class="absolute inset-0 w-full  h-full object-cover">
        <source src="/videos/banner.mov" type="video/mp4" />
        Tu navegador no soporta el video en HTML5.
      </video>

      <div class="relative z-10 flex items-center ml-52 w-full h-full text-left bg-black bg-opacity-50">
<!--        <h2 class="text-white text-xl md:text-3xl container font-medium ">THE BEST VACATION IN <span class="text-primary">PERU</span> <span class="text-secondary">WITH THE BEST</span> PERUVIAN OPERATOR</h2>-->
        <div class=" container ">
<!--          Explora Perú <br>-->
          <div class="border-2 w-8 mb-2"></div>
          <h1 class="text-white text-opacity-75 leading-tight text-5xl 2xl:text-7xl tracking-wide font-semibold">
          Libertad. <br>
            Aventura. <br>
          Posibilidades.</h1>

          <p class="text-white text-xl 2xl:text-2xl tracking-widest font-light mt-5">Para aquellos que quieren ir más allá.</p>
          </div>


      </div>
    </div>

  <section class="container my-12">
    <div class="text-center">
      <div class="border-2 w-8 mb-2 mx-auto"></div>
      <h1 class="font-semibold text-4xl mb-6">Peru, upgraded</h1>
      <p class="text-lg tracking-widest font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa deleniti dolor earum mollitia nulla quo reprehenderit tempore? Aspernatur atque consequatur culpa cum natus nulla odit ullam velit vero voluptas.</p>
    </div>
  </section>
  <section class="container my-6">
    <div class="grid grid-cols-12 gap-6 items-center">
      <div class="col-span-4">
        <div class="border-2 w-8 mb-2"></div>
        <h2 class="text-3xl font-semibold mb-6">En búsqueda de <br> nuevas <br> experiencias</h2>
        <p class="tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquam culpa debitis dignissimos distinctio dolorem eligendi eum fugit necessitatibus nisi omnis ratione repellendus, saepe sequi! Explicabo itaque sed tempore.</p>
      </div>
      <div class="col-span-8">
        <nuxt-img src="https://www.foratravel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F9cxgygtadmvl%2F2tlKBuvDz2cOz6ZyUHkqdL%2F01a356fa386986af5a75d18cd5ca1dca%2FImage__1_.jpg%3Fw%3D1200%26h%3D1201%26q%3D75%26fm%3Dwebp&w=1920&q=75"></nuxt-img>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>