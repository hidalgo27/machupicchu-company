<template>
  <div class="h-screen">
    <Headers class="top-0 absolute w-full  z-50"></Headers>
    <slot></slot>
<!--    <section class="py-2  mt-12 relative z-10">-->

<!--      <FormFooterInquireDetail></FormFooterInquireDetail>-->
<!--    </section>-->

    <section class="  mt-12 relative z-10  h-auto overflow-hidden">

      <nuxt-img src="/images/banners/banner-test2.jpg" class="  w-full h-full"></nuxt-img>
      <div class="absolute inset-0 mt-0 2xl:mt-96">
        <FormFooterInquireDetail></FormFooterInquireDetail>
      </div>
    </section>

    <Footer></Footer>
<!--    <Float></Float>-->
  </div>
</template>

<script setup lang="ts">

import Headers from "~/components/page/Headers.vue";
import Footer from "~/components/page/Footer.vue";
import Float from "~/components/page/Float.vue";
</script>