<template>

  <section class="bg-secondary  bg-opacity-10 py-6">
    <div class="container">
      <carousel  ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">
        <slide :key="1">
      <div class="text-center">
        <nuxt-img src="/icons/a.svg" class="mx-auto h-12 mb-2"></nuxt-img>
        <h3 class="font-semibold">Fully Customizable</h3>
      </div>
        </slide>
        <slide :key="2">
      <div class="text-center">
        <nuxt-img src="/icons/b.svg" class="mx-auto h-12 mb-2"></nuxt-img>
        <h3 class="font-semibold">Personalized service</h3>
      </div>
        </slide>
        <slide :key="3">
      <div class="text-center">
        <nuxt-img src="/icons/c.svg" class="mx-auto h-12 mb-2"></nuxt-img>
        <h3 class="font-semibold">Handpicked hotels</h3>
      </div>
        </slide>
        <slide :key="4">
      <div class="text-center">
        <nuxt-img src="/icons/d.svg" class="mx-auto h-12 mb-2"></nuxt-img>
        <h3 class="font-semibold">5000 + testimonials</h3>
      </div>
        </slide>
      </carousel>
    </div>
  </section>

</template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide} from "vue3-carousel"

const breakpoints = {
  // 500px and up
  350: {
    itemsToShow: 2.2,
    snapAlign: 'start',
  },
  // 700px and up
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
}

</script>